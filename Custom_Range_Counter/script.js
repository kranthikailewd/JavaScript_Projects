let fromValue = document.getElementById("fromUserInput");
let toValue = document.getElementById("toUserInput");
let startButton = document.getElementById("startBtn");
let counterNumbers = document.getElementById("counterText");


startButton.onclick = function() {
    let counter = parseInt(fromValue.value);
    if (fromValue.value === "") {
        alert("Enter the From Value.");
    } else if (toValue.value === "") {
        alert("Enter the To Value.");
    } else {
        if (parseInt(fromValue.value) < parseInt(toValue.value)) {
            counterNumbers.textContent = fromValue.value;
        }
        let UniqueId = setInterval(function() {
            counterNumbers.textContent = counter;
            if (counter === parseInt(toValue.value)) {
                clearInterval(UniqueId);
            }
            counter += 1;
        }, 1000);
    }
};
