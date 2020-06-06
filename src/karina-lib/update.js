// Setup Service
const Setup = async (step) => {
   const atsume = require('./atsumeLib.js');

   if (step == '1') {
      // Auth.json
      if (!fs.existsSync('src/profile/auth.json')) {
         fs.writeFileSync('src/profile/auth.json', JSON.stringify({
            email: 'undefined',
            password: 'undefined'
         }));
      }

      // Memory.json
      if (!fs.existsSync('src/profile/memory.json')) {
         fs.writeFileSync('src/profile/memory.json', JSON.stringify({
            minimumRAM: '1024',
            maximumRAM: '2048'
         }));
      }

      // Class stable directory.
      if (!fs.existsSync(`${process.env.APPDATA}/devpanda`)) {
         fs.mkdirSync(`${process.env.APPDATA}/devpanda`)
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

      return setupInstructions;
   } else if (step == '2') {

   } else {
      return process.exit();
   }
}

exports.Setup = Setup;