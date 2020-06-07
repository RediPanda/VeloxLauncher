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
        // alert('Launching the game. Please wait!')
        let args = await runtime.createArguments();
        runtime.runApplication(args);
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

    $("#auth-indicator-icon svg").classList.remove("*");

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