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
const f = require('./src/frontEndHandler.js');

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
    mojang.authenticator();
};

async function attemptUpdate() {
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

    //serverQuery(false);
    serviceAuthentication(); //Disabled because Seiki is currently working on it.
    attemptUpdate();
    f.titleBarListeners();
    f.buttonListeners();
});