async function buttonListeners() {
    atsume.logger(`INFO`, `[Session Manager]: Listening for Play Triggers.`);
    /** Removing button listener because Seiki was here.
    document.getElementById("playBtn1").addEventListener("click", () => {
        alert('Launching the game. Please wait!')
        runtime.runApplication('ipconfig');
        getUpdate()
    });
    */

    document.getElementById("playBtn2").addEventListener("click", async () => {
        const downloadBar = document.getElementById('download-bar');
        const syncbar = document.getElementById('download-bar-actualbar');
        const fs = require('fs');
        const fsExtra = require('fs-extra')
        const fetch = require('node-fetch');
        const download = require('download');
        const extract = require('extract-zip');
        const atsume = require('./atsumeLib.js')

        // alert('Launching the game. Please wait!')
        downloadBar.classList.remove('hidden')

        // Checking for any updates pending.
        let currentVersion;
        updateLoadBar(true, '10%', 'Checking for updates...');
        if (!fs.existsSync(`${process.env.APPDATA}//devpanda//client//profile//modvar.json`)) {
            fs.writeFileSync(`${process.env.APPDATA}//devpanda//client//profile//modvar.json`, '1.0.0')
            currentVersion = '1.0.0'
        } else {
            currentVersion = await fs.readFileSync(`${process.env.APPDATA}//devpanda//client//profile//modvar.json`);
        }

        updateLoadBar(true, '30%', 'Acquiring modpack information...');

        let getJSON;
        await fetch('http://www.veloxnetwork.ml/database/db.json')
            .then(res => res.json())
            .then(json => getJSON = json);

        updateLoadBar(true, '60%', 'Checking for updates...');

        let latest = getJSON.launcher[2].latestModpackVersion;

        async function getSetUpdate() {
            
            // Mod and Game files.
            if (currentVersion != latest) {
                // let array = getJSON.versions[0]
                // console.log(array)
                let array = getJSON.versions[latest]
                console.log(array.length)
                // Start update shiet.
                // Essential libraries and other necessities.

                // Libraries
                atsume.logger(`INFO`, `Importing package [Libraries]`);
                updateLoadBar(true, '0%', `Downloading Patch (libraries) from the Resource Manager...`);
                fs.writeFileSync(`${process.env.APPDATA}\\devpanda\\cache\\libraries.zip`,
                    await download(`http://www.veloxnetwork.ml/files/essentials/v${latest}/libraries.zip`).on('downloadProgress', (callback) => {
                        updateLoadBar(true, `${Math.round(callback.percent*100)}%`, `Downloading Patch (libraries) from the Resource Manager...`);
                    }));
                setTimeout(function finishCallback() {
                    updateLoadBar(true, '100%', `Resolving data from Patch (libraries) from the Resource Manager...`);
                }, 950);

                // Libraries
                atsume.logger(`INFO`, `Importing package [Assets]`);
                updateLoadBar(true, '0%', `Downloading Patch (assets) from the Resource Manager...`);
                fs.writeFileSync(`${process.env.APPDATA}\\devpanda\\cache\\assets.zip`,
                    await download(`http://www.veloxnetwork.ml/files/essentials/v${latest}/assets.zip`).on('downloadProgress', (callback) => {
                        updateLoadBar(true, `${Math.round(callback.percent*100)}%`, `Downloading Patch (assets) from the Resource Manager...`);
                    }));
                setTimeout(function finishCallback() {
                    updateLoadBar(true, '100%', `Resolving data from Patch (assets) from the Resource Manager...`);
                }, 950);

                // Download all mod-related packages.
                for (i = 0; i < array.length; i++) {
                    atsume.logger(`INFO`, `Importing package ${i + 1}`);
                    updateLoadBar(true, '0%', `Downloading Patch ${i + 1} from the Resource Manager...`);
                    fs.writeFileSync(`${process.env.APPDATA}\\devpanda\\cache\\pack${i + 1}.zip`,
                        await download(`http://www.veloxnetwork.ml/files/mods/v${latest}/pack${i + 1}.zip`).on('downloadProgress', (callback) => {
                            updateLoadBar(true, `${Math.round(callback.percent*100)}%`, `Downloading Patch ${i + 1} from the Resource Manager...`);
                        }));
                    setTimeout(function finishCallback() {
                        updateLoadBar(true, '100%', `Resolving data from Patch ${i + 1} from the Resource Manager...`);
                    }, 950);
                }

                // Check and download instance package.
                if (!fs.existsSync(`${process.env.APPDATA}\\devpanda\\instance\\bin\\minecraft.jar`)) {
                    atsume.logger(`Importing package [MAIN INSTANCE PACKAGE]`);
                    updateLoadBar(true, '0%', `Downloading instance.zip from the Resource Manager...`);
                    fs.writeFileSync(`${process.env.APPDATA}\\devpanda\\cache\\instance.zip`,
                        await download(`http://www.veloxnetwork.ml/files/instance/v${latest}/instance.zip`).on('downloadProgress', (callback) => {
                            updateLoadBar(true, `${Math.round(callback.percent*100)}%`, `Downloading instance.zip from the Resource Manager...`);
                        }));
                    setTimeout(function finishCallback() {
                        updateLoadBar(true, '100%', `Resolving data from instance.zip from the Resource Manager...`);
                    }, 950);

                    // Now unpackage and install instance.
                    atsume.logger(`INFO`, `Extracting the instance.zip file.`)
                    updateLoadBar(true, '1%', `Extracting packet [instance.zip]`);
                    await extract(`${process.env.APPDATA}\\devpanda\\cache\\instance.zip`, {
                        dir: `${process.env.APPDATA}\\devpanda\\instance`
                    });
                    updateLoadBar(true, '100%', `Extracting packet [instance.zip]`);
                }

                // Clear and re-apply mods to the instance folder.
                try {
                    fsExtra.emptyDirSync(`${process.env.APPDATA}\\devpanda\\instance\\mods`);
                    fsExtra.emptyDirSync(`${process.env.APPDATA}\\devpanda\\assets`);
                    fsExtra.emptyDirSync(`${process.env.APPDATA}\\devpanda\\libraries`);
                } catch (err) {
                    // Do nothing cause it means there was nothing in the first place.
                }

                atsume.logger(`INFO`, `Extracting individual mod packages.`)
                updateLoadBar(true, '1%', `Extracting packet [Patch ${i + 1}]`);
                for (i = 0; i < array.length; i++) {
                    await extract(`${process.env.APPDATA}\\devpanda\\cache\\pack${i + 1}.zip`, {
                        dir: `${process.env.APPDATA}\\devpanda\\instance\\mods`
                    });
                    updateLoadBar(true, '100%', `Extracting packet [Patch ${i + 1}]`);
                }

                atsume.logger(`INFO`, `Extracting assets.`)
                updateLoadBar(true, '1%', `Extracting packet [assets]`);
                for (i = 0; i < array.length; i++) {
                    await extract(`${process.env.APPDATA}\\devpanda\\cache\\assets.zip`, {
                        dir: `${process.env.APPDATA}\\devpanda\\assets`
                    });
                    updateLoadBar(true, '100%', `Extracting packet [assets]`);
                }

                atsume.logger(`INFO`, `Extracting libraries`)
                updateLoadBar(true, '1%', `Extracting packet [libraries]`);
                for (i = 0; i < array.length; i++) {
                    await extract(`${process.env.APPDATA}\\devpanda\\cache\\libraries.zip`, {
                        dir: `${process.env.APPDATA}\\devpanda\\libraries`
                    });
                    updateLoadBar(true, '100%', `Extracting packet [libraries]`);
                }

                updateLoadBar(false, '0%', 'Done!');

                // And finally, apply patch update to the version medium.
                fs.writeFileSync(`${process.env.APPDATA}//devpanda//client//profile//modvar.json`, latest);

            } else {
                // Continue on.
            }
        }

        await getSetUpdate();
        setTimeout(function startGame() {
            updateLoadBar(true, '100%', 'Running Java arguments...');
            setTimeout(async function startGame() {
                updateLoadBar(false, '0%', '.');
                let args = await runtime.createArguments();
                runtime.runApplication(args);
            }, 750)
        }, 2500)

    });

    document.getElementById("update-btn").addEventListener("click", () => {
        getUpdate();
    });

    async function getUpdate() {
        atsume.logger(`DATABASE`, `[Session Manager @ getUpdate]: Awaiting update.`);
        // alert("Update getting. Please wait as we are checking the current version number.");
        const playBtn = document.getElementById('playBtn2')
        const updateBtn = document.getElementById('update-btn')
        const downloadBar = document.getElementById('download-bar');
        const syncbar = document.getElementById('download-progress-bar');

        playBtn.disabled = true;
        updateBtn.disabled = true;
        playBtn.innerHTML = 'Update running!';
        updateBtn.innerHTML = 'Updating...';

        downloadBar.classList.remove('hidden')
    };

    async function applyUpdate() {
        atsume.logger(`DATABASE`, `[Session Manager @ applyUpdate]: Callback received.`);
        // alert("Update applying.");
    };

    async function finishUpdate() {
        playBtn.disabled = false;
        updateBtn.disabled = false;
        playBtn.innerHTML = 'Play Velox Reloaded';
        updateBtn.innerHTML = 'Update Test';
    };
};
module.exports.buttonListeners = buttonListeners;


async function titleBarListeners() {
    // Electorn shit here.
    const {
        remote
    } = require('electron');

    document.getElementById('close-button').addEventListener('click', closeWindow);
    document.getElementById('minimise-button').addEventListener('click', minimizeWindow);
    document.getElementById('maximise-button').addEventListener('click', maximizeWindow);

    function closeWindow() {
        let window = remote.BrowserWindow.getFocusedWindow();
        window.close();
    }

    function minimizeWindow() {
        let window = remote.BrowserWindow.getFocusedWindow();
        window.minimize();
    }

    function maximizeWindow() {
        let window = remote.BrowserWindow.getFocusedWindow();
        window.isMaximized() ? window.unmaximize() : window.maximize();
    }
};
module.exports.titleBarListeners = titleBarListeners;

function $(selector) {
    return document.querySelector(selector);
}
module.exports.$ = $;


function flashAuthIndicator(text, icon, iconSpinning) {
    const btn = $("#auth-indicator");

    //$("#auth-indicator-icon svg").classList.remove("*");

    $("#auth-indicator-icon svg").classList.add(icon)
    $("#auth-indicator-icon svg").classList.add("svg-inline--fa")
    $("#auth-indicator-icon svg").classList.add("fa-w-16");

    if (iconSpinning === true) {
        $("#auth-indicator-icon").classList.add("spinning");
    } else {
        $("#auth-indicator-icon").classList.remove("spinning");
    }

    $("#auth-indicator-text").innerHTML = text;
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 200)
}
module.exports.flashAuthIndicator = flashAuthIndicator;

function updateUserDisplay(name, img) {
    $('#account-img').src = name;
    $('#account-name').innerHTML = img;
}
module.exports.updateUserDisplay = updateUserDisplay;

function updateLoadBar(boolean, percentage, text) {
    const downloadBar = document.getElementById('download-bar');
    const syncbar = document.getElementById('download-progress-bar');
    const textbar = document.getElementById('download-progresstext')

    // First params (If it's visible.)
    if (boolean == true) {
        downloadBar.classList.remove('hidden')
    } else {
        downloadBar.classList.add('hidden')
        return;
    }

    // Set percentage.
    syncbar.style.width = percentage;
    $('#download-progress-percent').innerHTML = percentage;

    // Set text.
    textbar.innerHTML = text;
}