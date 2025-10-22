let inputBox = document.getElementById("cartItemTextInput");
let addingButton = document.getElementById("addBtn");
let listGroup = document.getElementById("listGroupBox");

function clickedToAdd() {
    let item = document.createElement("li");
    item.style.listStyleType = "none";
    listGroup.appendChild(item);
    item.textContent = inputBox.value;
    inputBox.value = "";
}
