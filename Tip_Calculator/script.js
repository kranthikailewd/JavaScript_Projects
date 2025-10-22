function calculatorFunction() {
    let billAmount = document.getElementById("billAmount");
    let percentOfTip = document.getElementById("percentageTip");
    let tipAmountOutput = parseInt(billAmount.value) * (parseInt(percentOfTip.value) / 100);

    if (billAmount.value === "" || percentOfTip.value === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input.";

    } else {
        document.getElementById("tipAmount").value = tipAmountOutput;
        document.getElementById("totalAmount").value = parseInt(billAmount.value) + tipAmountOutput;
        document.getElementById("errorMessage").textContent = "";
    }


}
