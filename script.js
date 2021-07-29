function changeParagraph() {
    if (document.getElementById("change").innerHTML == "We're no strangers to love") {
        document.getElementById("change").innerHTML = ""
    } else document.getElementById("change").innerHTML = "We're no strangers to love"
}

let hasPlayed = false;
function handleFirstPlay(event) {
    if (hasPlayed === false) {
        hasPlayed = true;

        let vid = event.target;

        vid.onplay = null;
    }
}

function explore() {
    document.links
}