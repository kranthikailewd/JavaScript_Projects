let form = document.getElementById("addUserForm");

let nameEl = document.getElementById("name");
let nameErr = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErr = document.getElementById("emailErrMsg");

let submitButton = document.getElementById("submitBtn");

function validateName() {
    if (nameEl.value === "") {
        nameErr.textContent = "Required*";
    } else {
        nameErr.textContent = "";
    }
}

function validateEmail() {
    if (emailEl.value === "") {
        emailErr.textContent = "Required*";
    } else {
        emailErr.textContent = "";
    }
}

nameEl.addEventListener("blur", validateName);

emailEl.addEventListener("blur", validateEmail);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    validateName();
    validateEmail();
});
