let numbers = [17, 31, 77, 20, 63];
console.log(numbers.indexOf(20));

let input = document.getElementById("userInput");
let findButton = document.getElementById("findBtn");
let inputDisplay = document.getElementById("indexOfNumber");



findButton.onclick = function() {
    let inputVal = input.value;
    inputDisplay.textContent = numbers.indexOf(parseInt(inputVal));
};
