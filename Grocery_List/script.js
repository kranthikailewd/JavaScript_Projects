let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let mainContainer = document.getElementById("groceryListContainer");
mainContainer.style.backgroundColor = "#03254c";
mainContainer.style.height = "100vh";
mainContainer.classList.add("p-5");

let mainHeading = document.createElement("h1");
mainHeading.textContent = "Grocery List";
mainHeading.style.textAlign = "center";
mainHeading.style.color = "white";
mainContainer.appendChild(mainHeading);

let listBox = document.createElement("ul");
listBox.classList.add("p-5");
listBox.style.borderRadius = "10px";
listBox.style.backgroundColor = "#f5f9fd";
mainContainer.appendChild(listBox);

for (let item of groceryList) {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    listBox.appendChild(listItem);
    listItem.classList.add("mb-2");
}
