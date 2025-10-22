let aboutget = document.getElementById("aboutTab");
let timeget = document.getElementById("timeToVisitTab");
let attractionsget = document.getElementById("attractionsTab");

function aboutShow() {
    aboutget.classList.add("d-block");
    timeget.classList.add("d-none");
    attractionsget.classList.add("d-none");

    timeget.classList.remove("d-block");
    attractionsget.classList.remove("d-block");

    document.getElementById("aboutButton").style.backgroundColor = "white";
    document.getElementById("timeToVisitButton").style.backgroundColor = "grey";
    document.getElementById("attractionsButton").style.backgroundColor = "grey";
}

function timeShow() {
    aboutget.classList.add("d-none");
    timeget.classList.add("d-block");
    attractionsget.classList.add("d-none");

    aboutget.classList.remove("d-block");
    attractionsget.classList.remove("d-block");

    document.getElementById("aboutButton").style.backgroundColor = "grey";
    document.getElementById("timeToVisitButton").style.backgroundColor = "white";
    document.getElementById("attractionsButton").style.backgroundColor = "grey";
}

function attractionsShow() {
    aboutget.classList.add("d-none");
    timeget.classList.add("d-none");
    attractionsget.classList.add("d-block");

    timeget.classList.remove("d-block");
    aboutget.classList.remove("d-block");

    document.getElementById("aboutButton").style.backgroundColor = "grey";
    document.getElementById("timeToVisitButton").style.backgroundColor = "grey";
    document.getElementById("attractionsButton").style.backgroundColor = "white";
}
