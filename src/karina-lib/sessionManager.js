// External libraries
const fetch = require('node-fetch');
const fs = require('fs');
const random = require('randomatic');
const Gamedig = require('gamedig');
const extract = require('extract-zip');
const mysql = require('mysql2');
const moment = require('moment');

// Internal libraries
const atsume = require('./src/karina-lib/atsumeLib.js');
const runtime = require('./src/karina-lib/runtime.js');
const mojang = require('./src/karina-lib/server.js')

// Internal variables.
const localfileVersion = 'v1.0.2';

// Establish database connections.
// SIKE, FUCK DATABASES.



// Token clearance
let finalToken = `${random('Aa0', 5)}-${random('Aa0', 5)}-${random('Aa0', 5)}-${random('Aa0', 5)}-${random('Aa0', 5)}`;
atsume.logger(`INFO`, `Registering program session as (${finalToken})`);

// On page load/app load, authenticate the user using old data.
async function serviceAuthentication() {
    atsume.logger(`INFO`, `[Session Manager]: Checking Mojang Authentication Servers...`);

    const panel = document.getElementById('accountPanel');
    const text = document.getElementById('panelText');
    const status = document.getElementById('panelStatus');

    mojang.authenticator();

};

// On page load/app load, open event listeners. (Button Functions)
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
        atsume.logger(`DATABASE`, `[Session Manager @ getUpdate]: Callback received.`);
        // alert("Update getting. Please wait as we are checking the current version number.");
        const playBtn = document.getElementById('playBtn2')
        const updateBtn = document.getElementById('update-btn')

        playBtn.disabled = true;
        updateBtn.disabled = true;
        playBtn.innerHTML = 'Update running!';
        updateBtn.innerHTML = 'Updating...';
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



    // Once the DOM Content load, we shall check for any latest updates.
    try {
        // Read off existing profile settings.
        if (fs.existsSync(`${process.env.APPDATA}/devpanda/client/profile`)) {
            atsume.logger(`INFO`, `[Session Manager @ apt-module]: Profile directory detected.`);
        }
    } catch (err) {
        // Compile new profile settings based on SessionManager version.
        fs.writeFile(`${process.env.APPDATA}/devpanda/client/profile/launcher-settings.json`, JSON.stringify({
            version: localfileVersion
        }), function (err, results) {
            // console.log(err + '  ' + results)
        });
    };
};

async function toolbarListeners() {
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

// On page load/app load, perform server status check.
async function serverQuery(debug) {
    atsume.logger(`INFO`, `[Session Manager]: Starting Server Query...`);

    setInterval(async function getServerQuery() {
        if (debug === true) atsume.logger(`API`, `[Session Manager @ Query]: Starting Heartbeat roundtrip...`);
        // Obtain local storage files. If not, generate new ones.
        let contentData = fs.readFileSync('src/karina-lib/patch.json', 'utf8');
        let objectData = JSON.parse(contentData)

        let btnElement = document.getElementById('statusBar')

        let status_boolean = 0;

        await Gamedig.query({
            type: 'minecraft',
            host: objectData.serverBearer,
            maxAttempts: 3
        }).then((state) => {
            if (debug === true) atsume.logger(`API`, '[Server Query] Stacktrace Online ')
            status_boolean = 1;
        }).catch((error) => {
            if (debug === true) atsume.logger(`API`, '[Server Query] Stacktrace Offline ')
            status_boolean = 0;
        });

        if (status_boolean == '1') {
            // Server's online!
            btnElement.classList.remove('badge-primary')
            btnElement.classList.remove('badge-danger')
            btnElement.classList.add('badge-success')
            btnElement.innerHTML = "Online"
        } else {
            // Assume the server's unreachable.
            btnElement.classList.remove('badge-primary')
            btnElement.classList.remove('badge-success')
            btnElement.classList.add('badge-danger')
            btnElement.innerHTML = "Offline"
        }
    }, 7000)

};

// On page load/app load, perform setup checks.
document.addEventListener('DOMContentLoaded', async function () {
    const services = require('./src/karina-lib/update.js');
    atsume.logger(`INFO`, `[Session Manager]: DOMContent Loaded! Starting other function services...`);

    // Run the setup (includes the prerequisites checks.)
    let setupResult = await services.Setup(1);

    serverQuery(false);
    toolbarListeners();
    serviceAuthentication(); //Disabled because Seiki is currently working on it.
    buttonListeners();

});