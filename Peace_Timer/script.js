let secTimer20 = document.getElementById("twentySecondsBtn");
let secTimer30 = document.getElementById("thirtySecondsBtn");
let secTimer40 = document.getElementById("fortySecondsBtn");
let minTimer1 = document.getElementById("oneMinuteBtn");
let display = document.getElementById("timerText");

let unique20;
let unique30;
let unique40;
let unique60;

secTimer20.onclick = function() {
    clearInterval(unique30);
    clearInterval(unique40);
    clearInterval(unique60);
    let counter = 20;
    display.textContent = counter + " seconds left";
    unique20 = setInterval(function() {
        display.textContent = counter + " seconds left";
        if (counter === 0) {
            clearInterval(unique20);
            display.textContent = "Your moment is Complete.";
        }
        counter -= 1;
    }, 1000);
};

secTimer30.onclick = function() {
    clearInterval(unique20);
    clearInterval(unique40);
    clearInterval(unique60);
    let counter = 30;
    display.textContent = counter + " seconds left";
    unique30 = setInterval(function() {
        display.textContent = counter + " seconds left";
        if (counter === 0) {
            clearInterval(unique30);
            display.textContent = "Your moment is Complete.";
        }
        counter -= 1;
    }, 1000);
};

secTimer40.onclick = function() {
    clearInterval(unique20);
    clearInterval(unique30);
    clearInterval(unique60);
    let counter = 40;
    display.textContent = counter + " seconds left";
    unique40 = setInterval(function() {
        display.textContent = counter + " seconds left";
        if (counter === 0) {
            clearInterval(unique20);
            display.textContent = "Your moment is Complete.";
        }
        counter -= 1;
    }, 1000);
};

minTimer1.onclick = function() {
    clearInterval(unique20);
    clearInterval(unique30);
    clearInterval(unique40);
    let counter = 60;
    display.textContent = counter + " seconds left";
    unique60 = setInterval(function() {
        display.textContent = counter + " seconds left";
        if (counter === 0) {
            clearInterval(unique20);
            display.textContent = "Your moment is Complete.";
        }
        counter -= 1;
    }, 1000);
};
