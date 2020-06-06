// Setup Service
const Setup = async (step) => {
   const atsume = require('./atsumeLib.js');

   if (step == '1') { // Initial client stuff

      // Class stable directory.
      if (!fs.existsSync(`${process.env.APPDATA}/devpanda`)) {
         fs.mkdirSync(`${process.env.APPDATA}/devpanda`)
      }

      // Client directory.
      if (!fs.existsSync(`${process.env.APPDATA}/devpanda/client`)) {
         fs.mkdirSync(`${process.env.APPDATA}/devpanda/client`)
      }

      // Profile directory
      if (!fs.existsSync(`${process.env.APPDATA}/devpanda/client/profile`)) {
         fs.mkdirSync(`${process.env.APPDATA}/devpanda/client/profile`)
      }

      // session.json
      if (!fs.existsSync(`${process.env.APPDATA}/devpanda/client/session.json`)) {
         fs.writeFileSync(`${process.env.APPDATA}/devpanda/client/session.json`, JSON.stringify({
         }));
      }
      
      // Auth.json
      if (!fs.existsSync(`${process.env.APPDATA}/devpanda/client/profile/auth.json`)) {
         fs.writeFileSync(`${process.env.APPDATA}/devpanda/client/profile/auth.json`, JSON.stringify({
            email: 'undefined',
            password: 'undefined'
         }));
      }

      // Memory.json
      if (!fs.existsSync(`${process.env.APPDATA}/devpanda/client/profile/memory.json`)) {
         fs.writeFileSync(`${process.env.APPDATA}/devpanda/client/profile/memory.json`, JSON.stringify({
            minimumRAM: '1024',
            maximumRAM: '2048'
         }));
      }

      // Instance directory.
      if (!fs.existsSync(`${process.env.APPDATA}/devpanda/instance`)) {
         fs.mkdirSync(`${process.env.APPDATA}/devpanda/instance`)
      }

      // Libraries directory.
      if (!fs.existsSync(`${process.env.APPDATA}/devpanda/libraries`)) {
         fs.mkdirSync(`${process.env.APPDATA}/devpanda/libraries`)
      }

      // Assets directory.
      if (!fs.existsSync(`${process.env.APPDATA}/devpanda/assets`)) {
         fs.mkdirSync(`${process.env.APPDATA}/devpanda/assets`)
      }

      // cache directory.
      if (!fs.existsSync(`${process.env.APPDATA}/devpanda/cache`)) {
         fs.mkdirSync(`${process.env.APPDATA}/devpanda/cache`)
      }

   } else if (step == '2') { // 
      // Do nothing.
   } else {
      return process.exit();
   }
}

exports.Setup = Setup;