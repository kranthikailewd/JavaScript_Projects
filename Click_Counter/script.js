let counterNumber = document.getElementById("counterValue");
let clickCount = localStorage.getItem("clickCount");
console.log(clickCount);
if (clickCount === null) {
    console.log("1");
    counterNumber.textContent = 0;
} else {
    counterNumber.textContent = parseInt(clickCount);
}
let clickButton = document.getElementById("incrementBtn");

clickButton.onclick = function() {
    clickCount = localStorage.getItem("clickCount");
    counterNumber.textContent = parseInt(clickCount) + 1;
    localStorage.setItem("clickCount", parseInt(clickCount) + 1);

    // if (localStorage.getItem("clickCount") === null) {
    //     counterNumber.textContent = 1;
    // } else {
    //     counterNumber.textContent = parseInt(localStorage.getItem("clickCount")) + 1;
    //     localStorage.setItem("clickCount", counterNumber.textContent);
    // }
};
