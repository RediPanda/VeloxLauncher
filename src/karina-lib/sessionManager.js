// External libraries
const fetch = require('node-fetch');
const fs = require('fs');
const random = require('randomatic');
const Gamedig = require('gamedig');
const extract = require('extract-zip');
const mysql = require('mysql2');

// Internal libraries
const atsume = require('./src/karina-lib/atsumeLib.js');
const runtime = require('./src/karina-lib/runtime.js');

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

    atsume.logger(`INFO`, "[Session Manager @ fs]: Grabbing authentication packets...")

    let inputEmail;
    let inputPass;

    try {
        if (fs.existsSync('src/profile')) {
            atsume.logger(`INFO`, "[Session Manager @ fs]: Profiler is present during load. Loading information to the module.")

            let authDataRaw = await fs.readFileSync(`${process.env.APPDATA}/devpanda/client/profile/auth.json`, 'utf8')
            let authData = JSON.parse(authDataRaw)

            if (authData.email === undefined) {
                if (confirm("[Velox Security Wall] Missing auth details (@username)")) {
                    window.close()
                } else {
                    window.close()
                }
            } else if (authData.password === undefined) {
                if (confirm("[Velox Security Wall] Missing auth details (@password)")) {
                    window.close()
                } else {
                    window.close()
                }
            }
            inputEmail = authData.email
            inputPass = authData.password
        }
    } catch (err) {
        alert("Failed to find the profiling directory!")
        return atsume.logger(`ERROR`, err)
    }

    let body = {
        "agent": { // defaults to Minecraft
            "name": "Minecraft", // For Mojang's other game Scrolls, "Scrolls" should be used
            "version": 1 // This number might be increased
            // by the vanilla client in the future
        },
        "username": inputEmail, // Can be an email address or player name for
        // unmigrated accounts
        "password": inputPass,
        "requestUser": true // optional; default: false; true adds the user object to the response
    }

    let obj;

    atsume.logger(`API`, `[Session Manager]: Sending POST request to authserver.mojang.com/authenticate`);
    atsume.logger(`API`, `[Session Manager]: Authenticating user under the identity - (${inputEmail})`)

    await fetch('https://authserver.mojang.com/authenticate', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
        .then(json => {
            // console.log(json)
            obj = json
        });

        atsume.logger(`API`, `[Session Manager]: Received callback response.`);

    if (obj.error === "ForbiddenOperationException") {
        atsume.logger(`API`, `[Session Manager @ Authentication]: Failed to authenticate user @${inputEmail}`)
        text.innerHTML = 'Failed to authenticate your login credentials!';
        fs.writeFile('cache/session-lock.json', JSON.stringify({
            token: finalToken,
            date: Date.now(),
            boolean: 0
        }), function (err, results) {
            // console.log(err + '  ' + results) 
        });
    } else if (obj.accessToken) {
        atsume.logger(`API`, `[Session Manager @ Authentication]: Successfully authenticated user @${inputEmail}`)
        // text.innerHTML = 'Successfully validated your session!';
        fs.writeFile('${process.env.APPDATA}/devpanda/cache/session-lock.json', JSON.stringify({
            token: finalToken,
            date: Date.now(),
            boolean: 1
        }), function (err, results) {
            // console.log(err + '  ' + results)
        });
    } else {
        return text.innerHTML = 'An internal error has occured. Please restart the application or contact the developer with the appropriate log files.';
    }

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

    document.getElementById("playBtn2").addEventListener("click", () => {
        alert('Launching the game. Please wait!')
        runtime.runApplication('ipconfig');
    });

    document.getElementById("updateBtn").addEventListener("click", () => {
        getUpdate();
    });

    async function applyUpdate() {
        atsume.logger(`DATABASE`, `[Session Manager @ applyUpdate]: Callback received.`);
        alert("Update applying.");
    };

    async function getUpdate() {
        atsume.logger(`DATABASE`, `[Session Manager @ getUpdate]: Callback received.`);
        alert("Update getting. Please wait as we are checking the current version number.");

        let versionBuffer = fs.readFileSync(`${process.env.APPDATA}/devpanda/client/profile/redis.json`)
        let latestVersion = fetch()
        if (versionBuffer) {}
    };

    // Once the DOM Content load, we shall check for any latest updates.
    try {
        // Read off existing profile settings.
        if (fs.existsSync(`${process.env.APPDATA}/devpanda/client/profile`)) {
            atsume.logger(`INFO`, `[Session Manager @ apt-module]: Profile directory detected.`);
        }
    } catch(err) {
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
    const {remote} = require('electron');

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
async function serverQuery() {
    atsume.logger(`INFO`, `[Session Manager]: Starting Server Query...`);

    setInterval(async function getServerQuery() {
        atsume.logger(`API`, `[Session Manager @ Query]: Starting Heartbeat roundtrip...`);
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
            atsume.logger(`API`, '[Server Query] Stacktrace Online ')
            status_boolean = 1;
        }).catch((error) => {
            atsume.logger(`API`, '[Server Query] Stacktrace Offline ')
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
document.addEventListener('DOMContentLoaded', async function() {
    const services = require('./src/karina-lib/update.js');
    atsume.logger(`INFO`, `[Session Manager]: DOMContent Loaded! Starting other function services...`);

    // Run the setup (includes the prerequisites checks.)
    let setupResult = await services.Setup(1);

    serverQuery();
    toolbarListeners();
    // serviceAuthentication(); Disabled because Seiki is currently working on it.
    buttonListeners();

});