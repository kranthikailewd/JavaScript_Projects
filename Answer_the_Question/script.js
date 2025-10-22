let form = document.getElementById("questionsForm");

let hyd = document.getElementById("cityHyderabad");
let chn = document.getElementById("cityChennai");
let del = document.getElementById("cityDelhi");
let mum = document.getElementById("cityMumbai");

let grab;
console.log(grab);

let submitButton = document.getElementById("submitBtn");

let result = document.getElementById("resultMsg");

function changeValidation() {
    result.textContent = "";
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!hyd.checked && !chn.checked && !del.checked && !mum.checked) {
        result.textContent = "Please select the answer!";
        result.style.color = "red";
    } else if (!del.checked) {
        result.textContent = "Wrong Answer!";
        result.style.color = "red";
    } else {
        result.textContent = "Correct Answer!";
        result.style.color = "green";
    }
});

form.addEventListener("change", changeValidation);


// NOTE :-------------------------------
//     let selectedCity = document.querySelector('input[name="city"]:checked');
// This will directly get the selected input radio. by using !selectedCity we can check if not even
// one option is checked, and if selectedCity.value != Delhi then give it as wrong answer.
