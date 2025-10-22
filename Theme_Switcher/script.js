let mainContainer = document.getElementById("bgContainer");
let mainHeading = document.getElementById("heading");
let userInput = document.getElementById("themeUserInput");



userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (userInput.value === "Dark") {
            mainContainer.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
        } else if (userInput.value === "Light") {
            mainContainer.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        } else {
            alert("Enter valid theme");
        }
    }

});
