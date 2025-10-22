let newObject = document.getElementById("requestBody");
let sendRequestButton = document.getElementById("sendPostRequestBtn");
let statusNote = document.getElementById("requestStatus");
let responseBodyText = document.getElementById("httpResponse");

let loadingSign = document.getElementById("loading");


sendRequestButton.onclick = function() {
    loadingSign.classList.toggle("d-none");
    statusNote.classList.toggle("d-none");

    let newDataToAdd = newObject.value;

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer a977ac62f5102625de7eda2e2597b645691db524f687bee3a54a86cabcc6ecf7"
        },
        body: newDataToAdd
    };

    fetch("https://gorest.co.in/public-api/users", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            statusNote.textContent = jsonData.code;
            responseBodyText.textContent = JSON.stringify(jsonData);
            loadingSign.classList.toggle("d-none");
            statusNote.classList.toggle("d-none");
        });
};
