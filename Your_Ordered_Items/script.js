let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];

let mainContainer = document.getElementById("orderedItemsContainer");

let listGroup = document.createElement("ul");
listGroup.id = "listGroupId";
listGroup.classList.add("p-0");
mainContainer.appendChild(listGroup);

function ordering(dish) {
    let listItem = document.createElement("li");
    listItem.id = "item" + dish.uniqueNo;
    listItem.classList.add("d-flex", "flex-row", "mb-3", "justify-content-center");
    listItem.style.listStyleType = "none";
    listGroup.appendChild(listItem);

    let dishVariety = document.createElement("p");
    dishVariety.id = "variety" + dish.uniqueNo;
    dishVariety.textContent = dish.itemName;
    dishVariety.classList.add("mr-3");
    listItem.appendChild(dishVariety);

    let cancelling = document.createElement("button");
    cancelling.id = "button" + dish.uniqueNo;
    cancelling.textContent = "Cancel";
    cancelling.style.fontWeight = "500";
    cancelling.classList.add("btn", "btn-danger");
    listItem.appendChild(cancelling);
    cancelling.onclick = function() {
        listGroup.removeChild(listItem);
    };
}

for (let dish of itemList) {
    ordering(dish);
}
