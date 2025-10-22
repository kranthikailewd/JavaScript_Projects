let joke = document.getElementById("jokeText");
let jokeButton = document.getElementById("jokeBtn");

let spinnerLogo = document.getElementById("spinner");

jokeButton.onclick = function() {
    joke.classList.toggle("d-none");
    spinnerLogo.classList.toggle("d-none");

    let options = {
        method: "GET"
    };

    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            joke.textContent = jsonData.value;
            spinnerLogo.classList.toggle("d-none");
            joke.classList.toggle("d-none");
        });
};
