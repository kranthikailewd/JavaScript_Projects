let get_hour_input = document.getElementById("hoursInput");
let get_min_input = document.getElementById("minutesInput");
let get_btn = document.getElementById("convertBtn");
let get_p1 = document.getElementById("timeInSeconds");
let get_p2 = document.getElementById("errorMsg");
let get_div = document.getElementById("container");
get_div.classList.remove("convert");
get_btn.addEventListener("click", function() {

    if (get_hour_input.value === "") {
        get_p2.textContent = "Please enter a valid number of hours.";
        get_p1.textContent = "";
        get_div.classList.remove("convert");
    } else if (get_min_input.value === "") {
        get_p2.textContent = "Please enter a valid number of minutes.";
        get_p1.textContent = "";
        get_div.classList.remove("convert");
    } else {
        get_p2.textContent = "Please enter avalid number of hours.";
        get_p1.textContent = "";
        get_div.classList.remove("convert");
    }
    if (get_hour_input.value !== "" && get_min_input.value !== "") {
        let int_hour = parseInt(get_hour_input.value);
        let int_min = parseInt(get_min_input.value);
        let seconds = int_hour * 3600 + int_min * 60;
        get_p1.textContent = seconds + "s";
        get_p2.textContent = "";
        get_div.classList.add("convert");
    }
});
