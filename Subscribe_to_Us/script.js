let subsForm = document.getElementById("subscribeForm");
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let nameReq = document.getElementById("nameErrMsg");
let emailReq = document.getElementById("emailErrMsg");
let submitButton = document.getElementById("subsBtn");

userName.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameReq.textContent = "Required*";
    } else {
        nameReq.textContent = "";
    }
});
userEmail.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailReq.textContent = "Required*";
    } else {
        emailReq.textContent = "";
    }
});
subsForm.addEventListener("submit", function(event) {
    event.preventDefault();
});
