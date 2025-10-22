let form = document.getElementById("updatePasswordForm");

let newPasswordEl = document.getElementById("newPassword");
let newPassErr = document.getElementById("newPasswordErrMsg");

let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPassErr = document.getElementById("confirmPasswordErrMsg");

let updateButton = document.getElementById("updateBtn");

function validateNewPassword() {
    if (newPasswordEl.value === "") {
        newPassErr.textContent = "Required*";
    } else {
        newPassErr.textContent = "";
    }
}

function validateConfirmPassword() {
    if (confirmPasswordEl.value === "") {
        confirmPassErr.textContent = "Required*";
    } else {
        confirmPassErr.textContent = "";
    }
}

newPasswordEl.addEventListener("blur", validateNewPassword);

confirmPasswordEl.addEventListener("blur", validateConfirmPassword);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword();
    validateConfirmPassword();
    if (newPasswordEl.value !== confirmPasswordEl.value) {
        confirmPassErr.textContent = "Passwords must be same";
    }
});
