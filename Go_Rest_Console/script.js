let requestUrlEl = document.getElementById("requestUrl");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let sendRequest = document.getElementById("sendRequestBtn");
let responseStatusCode = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");

let form = document.getElementById("consoleForm");


let methodChange = {
    method: "POST"
};

function validation(event) {
    methodChange.method = event.target.value;
}

requestMethodEl.addEventListener("change", validation);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (methodChange.method === "POST") {
        let postUrl = requestUrlEl.value;
        let options = {
            method: methodChange.method,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer a977ac62f5102625de7eda2e2597b645691db524f687bee3a54a86cabcc6ecf7"
            },
            body: requestBodyEl.value
        };

        fetch(postUrl, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                responseStatusCode.value = jsonData.code;
                responseBodyEl.value = JSON.stringify(jsonData);
            });
    } else {
        let postUrl = requestUrlEl.value;
        let options = {
            method: methodChange.method,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer a977ac62f5102625de7eda2e2597b645691db524f687bee3a54a86cabcc6ecf7"
            },
            body: requestBodyEl.value
        };

        fetch(postUrl, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                responseStatusCode.value = jsonData.code;
                responseBodyEl.value = JSON.stringify(jsonData);
            });
    }
});
