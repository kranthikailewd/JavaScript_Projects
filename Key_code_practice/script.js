let userInput = document.getElementById("userInput");
let ulEl = document.getElementById("keyCodeList");

userInput.addEventListener("keydown", function(event) {
    let liItem = document.createElement("li");
    ulEl.appendChild(liItem);
    liItem.textContent = event.keyCode;
});
