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
        const fetch = require('node-fetch');
        const download = require('download');
        const extract = require('extract-zip');

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
            if (currentVersion != latest) {
                let array = getJSON.versions[0]
                // Start update shiet.

                // Download all 
                for (i = 0; i < array.length; i++) {
                    updateLoadBar(true, '10%', `Downloading Patch ${i + 1} from the Resource Manager...`);
                    fs.writeFileSync(`${process.env.APPDATA}\\devpanda\\cache\\pack${i + 1}.zip`, await download(`http://www.veloxnetwork.ml/files/mods/${latest}/pack${i + 1}.zip`));
                    setTimeout(function finishCallback() {
                        updateLoadBar(true, '100%', `Resolving data from Patch ${i + 1} from the Resource Manager...`);
                    }, 950);
                }

            } else {
                // Continue on.
            }
        }

        await getSetUpdate();
        updateLoadBar(true, '90%', 'Starting Forge Mod Loader...');

        setTimeout(function startGame() {
            updateLoadBar(true, '100%', 'Running Java arguments...');
            setTimeout(async function startGame() {
                updateLoadBar(false, '0%', '.');
                //let args = await runtime.createArguments();
                //runtime.runApplication(args);
            }, 750)
        }, 1500)

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

    // Set text.
    textbar.innerHTML = text;
}