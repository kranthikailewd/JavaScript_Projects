//Original

let firstPosition = document.getElementById("firstNumber");
let secondPosition = document.getElementById("secondNumber");
let inputPosition = document.getElementById("userInput");
let gameResultInfo = document.getElementById("gameResult");


function restartGame() {
    firstPosition.textContent = Math.ceil(Math.random() * 100);
    secondPosition.textContent = Math.ceil(Math.random() * 100);
    inputPosition.value = "";
    gameResultInfo.textContent = "";
}
restartGame();

function checkResult() {
    if (parseInt(firstPosition.textContent) + parseInt(secondPosition.textContent) === parseInt(inputPosition.value)) {
        gameResultInfo.textContent = "Congratulations! You got it right.";
        gameResultInfo.style.backgroundColor = "#028a0f";
    } else {
        gameResultInfo.textContent = "Please Try Again!";
        gameResultInfo.style.backgroundColor = "#1e217c";
    }
}
