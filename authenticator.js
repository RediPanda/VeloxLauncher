const questions = require("questions");
const encrypt = require("./src/karina-lib/encrypt.js");
const fs = require("fs");

// Set process title.
process.title = "Redi's Authenticator Applet // v1.0.1";

// Clear the prompt.
console.clear();

questions.askMany(
  {
    email: { info: "What is your email used for your Minecraft Account?" },
    pwd: {
      info:
        "What is the password associated with your Minecraft Account? \n\nPlease note that your password is not sent to any 3rd party connections or stored in a remote server. \nYour credentials will however only be stored in an encrypted file only accessible by RediServices and its unique seed. \n\nOnly your machine can access and read these files.\n\n\nEnter your password",
    },
  },
  function (result) {
    let pwdcharcount = result.pwd.split("").length;
    console.clear();

    questions.askOne(
      {
        info: `
Is the following information accurate? [Yes/No]
    
    
----- START OF DATA STREAM.
    EMAIL: ${result.email}
    PASSWORD: ${"*".repeat(pwdcharcount)}
----- END OF DATA STREAM.
    
    
Please type [Yes] to confirm changes or [No] to cancel the process.`,
      },
      function (res) {
        if (res.toLowerCase() === "yes") {
          // Append new account changes.
          console.log("\n\n\n  [!] Starting to append changes. Please do not close this window.");
          (
            async () => {
              console.log("\n[!] Successfully started the daemon container!");

              let specialKey = await encrypt.createKey();
              let newUser = encrypt.encrypt(specialKey, result.email);
              let newPwd = encrypt.encrypt(specialKey, result.pwd);

              console.log("\n[!] Securing the payload container to the authentication storage service...");
              let payload = JSON.stringify({ email: newUser, password: newPwd });

              // Class stable directory.
              if (!fs.existsSync(`${process.env.APPDATA}/devpanda`)) {
                fs.mkdirSync(`${process.env.APPDATA}/devpanda`);
              }

              // Client directory.
              if (!fs.existsSync(`${process.env.APPDATA}/devpanda/client`)) {
                fs.mkdirSync(`${process.env.APPDATA}/devpanda/client`);
              }

              // Profile directory
              if (!fs.existsSync(`${process.env.APPDATA}/devpanda/client/profile`)) {
                fs.mkdirSync(`${process.env.APPDATA}/devpanda/client/profile`);
              }

              fs.writeFileSync(`${process.env.APPDATA}/devpanda/client/profile/auth.json`, payload);

              console.log("\n[/] Successfully encrypted the account details!");
            }
          )();
        } else if (res.toLowerCase() === "no") {
          // Close the process.
        } else {
          process.exit(0); // Exit with Code 0.
        }
      }
    );
  }
);
