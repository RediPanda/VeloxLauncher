function $(selector) {
    return document.querySelector(selector);
}

function flashAuthIndicator(text, icon, iconSpinning) {
    const btn = $("#auth-indicator");

    $("#auth-indicator-icon svg").classList.remove("*");

    $("#auth-indicator-icon svg").classList.add(icon)
    $("#auth-indicator-icon svg").classList.add("svg-inline--fa")
    $("#auth-indicator-icon svg").classList.add("fa-w-16");

    if (iconSpinning === true) {
        $("#auth-indicator-icon").classList.add("spinning");
    } else {
        $("#auth-indicator-icon").classList.remove("spinning");
    }

    $("#auth-indicator-text").innerHTML = text;
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 200)
}

module.exports.flashAuthIndicator = flashAuthIndicator;
module.exports.$ = $;
