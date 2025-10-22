let userName = document.getElementById("name");
let nameErr = document.getElementById("nameErrMsg");
let userEmail = document.getElementById("email");
let emailErr = document.getElementById("emailErrMsg");
let workingStatus = document.getElementById("status");
let maleRadio = document.getElementById("genderMale");
let femaleRadio = document.getElementById("genderFemale");

let form = document.getElementById("addUserForm");


let workStatusOption = {
    stat: "Active"
};

function genderReveal() {
    if (maleRadio.checked) {
        return "Male";
    } else {
        return "Female";
    }
}



workingStatus.addEventListener("change", function(event) {
    workStatusOption.stat = event.target.value;
})

form.addEventListener("submit", function(event) {
    event.preventDefault();
    nameErr.textContent = "";
    emailErr.textContent = "";
    if (userName.value === "") {
        nameErr.textContent = "Required*";
        nameErr.style.color = "red";
    } else if (userEmail.value === "") {
        emailErr.textContent = "Required*";
        emailErr.style.color = "red";
    } else {
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer a977ac62f5102625de7eda2e2597b645691db524f687bee3a54a86cabcc6ecf7"
            },
            body: JSON.stringify({
                name: userName.value,
                email: userEmail.value,
                status: workStatusOption.stat,
                gender: genderReveal(),
            })
        };
        let url = "https://gorest.co.in/public-api/users";

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData);
                if (jsonData.data[0].message === "has already been taken") {
                    emailErr.textContent = "Email Already Exists";
                    emailErr.style.color = "green";
                }
            });
    }

});
