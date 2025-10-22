let userInputEl = document.getElementById("userInput");
let factPara = document.getElementById("fact");
let loadingLogo = document.getElementById("spinner");



function getTheFactList(event) {
    if (event.key === "Enter") {
        if (userInputEl === "") {
            alert("Enter a Number to get the Joke");
        } else {
            factPara.textContent = "";
            loadingLogo.classList.toggle("d-none");

            let options = {
                method: "GET"
            };
            let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputEl.value;

            fetch(url, options)
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsonData) {
                    loadingLogo.classList.toggle("d-none");
                    factPara.textContent = jsonData.fact;

                });
        }
    }
}



userInputEl.addEventListener("keydown", getTheFactList);
