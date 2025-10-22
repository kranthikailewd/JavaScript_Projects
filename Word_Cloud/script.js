let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainer = document.getElementById("wordsContainer");
let errorText = document.getElementById("errorMsg");
let userInputText = document.getElementById("userInput");
let addButton = document.getElementById("addBtn");

function randomFontSizeGen() {
    let randomFont = Math.random() * 100;
    randomFont = Math.ceil(randomFont);
    return randomFont + "px";
}

addButton.onclick = function() {
    let userGivenText = userInputText.value;
    if (userGivenText === "") {
        errorText.textContent = "Please enter valid input!";
    } else {
        let wordSpace = document.createElement("span");
        wordSpace.textContent = userGivenText;
        wordSpace.style.fontSize = randomFontSizeGen();
        wordsContainer.appendChild(wordSpace);
    }
};
