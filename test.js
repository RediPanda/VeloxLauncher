// Internal libraries
const atsume = require('./src/karina-lib/atsumeLib.js');
const runtime = require('./src/karina-lib/runtime.js');
const encrypt = require('./src/karina-lib/encrypt.js');

async function now() {

   let key = await encrypt.createKey();

   let string = "mysecretbatchofcookies";

   let output1 = encrypt.encrypt(key, string);
   console.log(output1)
   let output2 = encrypt.decrypt(key, output1);
   console.log(output2)
}

// now();

async function test(input) {
   let key = await encrypt.createKey();

   let string = input;

   let output1 = encrypt.encrypt(key, string);
   console.log(output1);
   let output2 = encrypt.decrypt(key, output1);
   console.log(output2);
}

test('insert');