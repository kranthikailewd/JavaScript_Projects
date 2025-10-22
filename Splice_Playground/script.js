let arr = [1, 7, 3, 1, 0, 20, 77];
let stringifiedArray = JSON.stringify(arr);

let startIndex = document.getElementById("startIndexInput");
let delCount = document.getElementById("deleteCountInput");
let addingItem = document.getElementById("itemToAddInput");
let spliceButton = document.getElementById("spliceBtn");

let updatedArray = document.getElementById("updatedArray");
updatedArray.textContent = stringifiedArray;

spliceButton.onclick = function() {
    // arr = JSON.parse(updatedArray.textContent);
    let startIndexVal = parseInt(startIndex.value);
    let delCountVal = parseInt(delCount.value);
    let addingItemVal = addingItem.value;
    if (startIndexVal === "") {
        alert("Please Enter the Start Index!");
    } else {
        if (delCountVal === "") {
            arr.splice(startIndexVal, 0, addingItemVal);
            updatedArray.textContent = JSON.stringify(arr);
            return;
        } else {
            arr.splice(startIndexVal, delCountVal, addingItemVal);
            updatedArray.textContent = JSON.stringify(arr);
            return;
        }

    }
};
