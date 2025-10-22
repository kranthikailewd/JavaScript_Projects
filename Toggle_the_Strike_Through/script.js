let mainContainer = document.getElementById("checkBoxWithLabelContainer");

let inputContainer = document.createElement("div");
inputContainer.id = "secondContainer";
inputContainer.classList.add("d-flex", "flex-row", "justify-content-center");
mainContainer.appendChild(inputContainer);

let userInput = document.createElement("input");
userInput.id = "checkbox";
userInput.type = "checkbox";
inputContainer.appendChild(userInput);

let inputLabel = document.createElement("label");
inputLabel.id = "checkboxLabel";
inputLabel.textContent = "I am a label";
inputLabel.setAttribute("for", "checkbox");
inputContainer.appendChild(inputLabel);

userInput.classList.add("m-2");
userInput.onclick = function() {
    if (userInput.checked) {
        inputLabel.classList.add("striking");
    } else {
        inputLabel.classList.remove("striking");
    }
}
