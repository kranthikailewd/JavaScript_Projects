let userInputEl = document.getElementById("userInput");
let userObjectEl = document.getElementById("requestBody");
let sendRequestButton = document.getElementById("sendPutRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

let loadingSign = document.getElementById("loading");

sendRequestButton.onclick = function() {
    loadingSign.classList.toggle("d-none");
    requestStatusEl.classList.toggle("d-none");


    let userInputElText = userInputEl.value;
    let userObjectElText = userObjectEl.value;

    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer a977ac62f5102625de7eda2e2597b645691db524f687bee3a54a86cabcc6ecf7"
        },
        body: userObjectElText
    };

    let url = "https://gorest.co.in/public-api/users/" + userInputElText;

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestStatusEl.textContent = jsonData.code;
            httpResponseEl.textContent = JSON.stringify(jsonData);
            loadingSign.classList.toggle("d-none");
            requestStatusEl.classList.toggle("d-none");
        });
};
