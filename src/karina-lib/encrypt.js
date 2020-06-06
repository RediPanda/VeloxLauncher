// The encryption service responsible for handling special data across our services.

// Create key. Will return the origin key if found.
const createKey = async () => {
   const fs = require('fs');
   const random = require('randomatic');

   let outputkey = random('Aa0', 512);

   if (!fs.existsSync(`${process.env.APPDATA}/devpanda/client/profile/services.json`)) {
      await fs.writeFileSync(`${process.env.APPDATA}/devpanda/client/profile/services.json`, `${outputkey}`)
   } else {
      outputkey = await fs.readFileSync(`${process.env.APPDATA}/devpanda/client/profile/services.json`, 'utf8');
   }

   // console.log(outputkey)
   return outputkey;
}

// Encrypt package.
const encrypt = (key, package) => {
   const fs = require('fs');
   const Crypto = require('cryptr');
   const crypto = new Crypto(key);

   let packet = crypto.encrypt(package);

   // console.log(packet)
   return packet;
}

// Decrypt package.
const decrypt = (key, package) => {
   const fs = require('fs');
   const Crypto = require('cryptr');
   const crypto = new Crypto(key);

   let packet = crypto.decrypt(package);

   // console.log(packet)
   return packet;
}

exports.createKey = createKey;
exports.encrypt = encrypt;
exports.decrypt = decrypt;