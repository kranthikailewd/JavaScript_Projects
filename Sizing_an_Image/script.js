let imageElement = document.getElementById("image");

let defaultImageWidth = 200;

imageElement.style.width = defaultImageWidth + "px";

function decFunction() {
    if (defaultImageWidth > 100) {
        defaultImageWidth = defaultImageWidth - 5;
        document.getElementById("image").style.width = defaultImageWidth + "px";
        document.getElementById("imageWidth").textContent = defaultImageWidth + "px";
        document.getElementById("warningMessage").textContent = "";

    } else {
        document.getElementById("warningMessage").textContent = "Too small, Increase the Size of the Image.";
    }
}

function incFunction() {
    if (defaultImageWidth < 300) {
        defaultImageWidth = defaultImageWidth + 5;
        document.getElementById("image").style.width = defaultImageWidth + "px";
        document.getElementById("imageWidth").textContent = defaultImageWidth + "px";
        document.getElementById("warningMessage").textContent = "";
    } else {
        document.getElementById("warningMessage").textContent = "Too big, decrease the Size of the Image.";
    }

}
