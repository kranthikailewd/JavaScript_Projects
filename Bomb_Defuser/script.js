let defuseInput = document.getElementById("defuser");
let timerEl = document.getElementById("timer");

let timeInterval = 10;

let uniqueId = setInterval(function() {
    timerEl.textContent = timeInterval;
    timeInterval -= 1;
    if (timeInterval === 0) {
        timerEl.textContent = "BOOM";
        clearInterval(uniqueId);
    }
}, 1000);

defuseInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (defuseInput.value === "defuse") {
            clearInterval(uniqueId);
            timerEl.textContent = "You did it!";
        }
    }
});
