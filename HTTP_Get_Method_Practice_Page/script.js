let sendingButton = document.getElementById("sendGetRequestBtn");
let statusText = document.getElementById("requestStatus");
let loadingIntro = document.getElementById("loading");
let bodyText = document.getElementById("httpResponse");


sendingButton.onclick = function() {
    statusText.textContent = loadingIntro.textContent;

    let options = {
        method: "GET"
    };

    fetch("https://gorest.co.in/public-api/users", options)
        .then(function(response) {
            statusText.textContent = response.status;
            return response.json();
        })
        .then(function(jsonData) {
            bodyText.textContent = JSON.stringify(jsonData);
            console.log(jsonData);
        });
};
