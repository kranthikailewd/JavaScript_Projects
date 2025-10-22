let container_id = document.getElementById("colorPickerContainer");
let color_mention = document.getElementById("selectedColorHexCode");
let button_select1 = document.getElementById("button1");
let button_select2 = document.getElementById("button2");
let button_select3 = document.getElementById("button3");
let button_select4 = document.getElementById("button4");

function to_grey() {
    container_id.style.backgroundColor = "#e0e0e0";
    color_mention.textContent = "#e0e0e0";
}

function to_green() {
    container_id.style.backgroundColor = "#6fcf97";
    color_mention.textContent = "#6fcf97";
}

function to_blue() {
    container_id.style.backgroundColor = "#56ccf2";
    color_mention.textContent = "#56ccf2";
}

function to_magenta() {
    container_id.style.backgroundColor = "#bb6bd9";
    color_mention.textContent = "#bb6bd9";
}

