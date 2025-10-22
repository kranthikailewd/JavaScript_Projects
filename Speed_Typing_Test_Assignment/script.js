let time = document.getElementById("timer");
let randQuote = document.getElementById("quoteDisplay");
let quoteWrite = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let submitButton = document.getElementById("submitBtn");
let resetButton = document.getElementById("resetBtn");

let loadingSign = document.getElementById("spinner");

let count;
let url = "https://apis.ccbp.in/random-quote";
let stopId;

function gettingQuote() {
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            loadingSign.classList.add("d-none");
            loadingSign.classList.remove("d-flex");
            randQuote.textContent = jsonData.content;
            quoteWrite.value = "";
        });
}
gettingQuote();

resetButton.addEventListener("click", function() {
    loadingSign.classList.remove("d-none");
    loadingSign.classList.add("d-flex");
    clearInterval(stopId);
    resultEl.textContent = "";
    count = 0;
    time.textContent = count;
    stopId = setInterval(function() {
        count += 1;
        time.textContent = count;
    }, 1000);

    gettingQuote();
});


submitButton.addEventListener("click", function() {
    if (randQuote.textContent === quoteWrite.value) {
        clearInterval(stopId);
        resultEl.textContent = "You typed in " + count + " seconds";
    } else if (quoteWrite.value === "") {
        resultEl.textContent = "You typed incorrect sentence";
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
});
