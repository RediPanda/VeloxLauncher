// External libraries
const fetch = require('node-fetch'),
   fs = require('fs'),
   moment = require('moment');

// Internal libraries
const atsume = require('./atsumeLib.js'),
   runtime = require('./runtime.js'),
   cypher = require('./encrypt.js'),
   f = require("./frontEndHandler");

const authenticator = async () => {
   // DOM Elements.
   atsume.logger(`INFO`, "[Session Manager @ fs]: Grabbing authentication packets...")

   let inputEmail;
   let inputPass;

   // Encyrption Details.
   let key = await cypher.createKey();

   try {
      if (fs.existsSync(`${process.env.APPDATA}/devpanda/client/profile`)) {
         atsume.logger(`INFO`, "[Session Manager @ fs]: Profiler is present during load. Loading information to the module.")

         let authDataRaw = await fs.readFileSync(`${process.env.APPDATA}/devpanda/client/profile/auth.json`, 'utf8')
         let authData = JSON.parse(authDataRaw)

         // console.log(authData)

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
         inputEmail = await cypher.decrypt(key, authData.email);
         inputPass = await cypher.decrypt(key, authData.password);

      }
   } catch (err) {
      alert("Failed to find the profiling directory! This issue only occurs if the authentication files were missing or cannot be parsed through our services. \n\nThis warning may be ignored, but it does flag that your account will not be used when launching the game.")
      return atsume.logger(`ERROR`, err)
      console.log(err)
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
      fs.writeFile(`${process.env.APPDATA}/devpanda/client/session.json`, JSON.stringify({
         token: 'invalid',
         uuid: obj.selectedProfile.id,
         username: obj.selectedProfile.name,
         date: Date.now(),
         boolean: 0
      }), function (err, results) {
         // console.log(err + '  ' + results) 
      });

      f.flashAuthIndicator("Login Failed", "fa-time", false)
   } else if (obj.accessToken) {
      atsume.logger(`API`, `[Session Manager @ Authentication]: Successfully authenticated user @${inputEmail}`)
      // text.innerHTML = 'Successfully validated your session!';
      fs.writeFile(`${process.env.APPDATA}/devpanda/client/session.json`, JSON.stringify({
         token: obj.accessToken,
         uuid: obj.selectedProfile.id,
         username: obj.selectedProfile.name,
         date: Date.now(),
         boolean: 1
      }), function (err, results) {
         // console.log(err + '  ' + results)
      });

      f.$('#account-img').src = `https://minotar.net/avatar/${obj.selectedProfile.id}/100.png`;
      f.$('#account-name').innerHTML = `${obj.selectedProfile.name}`
      f.flashAuthIndicator("Login Successful", "fa-check", false)
   } else {
      text.innerHTML = 'An internal error has occured. Please restart the application or contact the developer with the appropriate log files.';
   }

   return obj;
}

exports.authenticator = authenticator;