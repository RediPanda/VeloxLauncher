// The home of all of KarinaLib Functions.

// Grab cookie data.
const getCookie = (cname) => {
    let cookieID = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieID) == 0) {
            return c.substring(cookieID.length, c.length);
        }
    }
    return "";
}

// Set cookie data.
const setCookie = (cname, cvalue, exdays) => {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Create logger class.
const logger = (type, arguments) => {
    const fs = require('fs');

    let originTime = new Date();
    let hour = originTime.getHours();
    let minute = originTime.getMinutes();
    let second = originTime.getSeconds();

    let outputlog = `[STDOUT] [${type}] [${hour}:${minute}:${second}] :: ${arguments} \n`;

    fs.appendFileSync('logs/applogs.txt', outputlog);
    console.log(outputlog)
}

exports.getCookie = getCookie;
exports.setCookie = setCookie;
exports.logger = logger;