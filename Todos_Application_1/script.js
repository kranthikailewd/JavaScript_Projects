/* Follow the instructions found in the description to complete the JavaScript functionality.*/

let todoList = [{
        text: "Learn HTML",
        unique_code: 1
    },
    {
        text: "Learn CSS",
        unique_code: 2
    },
    {
        text: "Learn JavaScript",
        unique_code: 3
    },
    {
        text: "Learn React",
        unique_code: 4
    }
];

let taskList = document.getElementById("todoItemsContainer");


function createAndAddTodo(todo) {
    let liItem = document.createElement("li");
    liItem.id = "list" + todo.unique_code;
    liItem.classList.add("d-flex", "flex-row", "todo-item-container");
    taskList.appendChild(liItem);

    let liButton = document.createElement("input");
    liButton.setAttribute("type", "checkbox");
    liButton.id = "listButton" + todo.unique_code;
    liButton.style.width = "20px";
    liButton.classList.add("mr-2");
    liItem.appendChild(liButton);

    let liCard = document.createElement("div");
    liCard.id = "listCard" + todo.unique_code;
    liCard.classList.add("label-container", "d-flex", "flex-row");
    liItem.appendChild(liCard);

    let liLabel = document.createElement("label");
    liLabel.setAttribute("for", "listButton" + todo.unique_code);
    liLabel.id = "listLabel" + todo.unique_code;
    liLabel.classList.add("checkbox-label");
    liLabel.textContent = todo.text;
    liCard.appendChild(liLabel);

    let liDelBox = document.createElement("div");
    liDelBox.classList.add("delete-icon-container");
    liCard.appendChild(liDelBox);

    let liDelete = document.createElement("i");
    liDelete.classList.add("fa-solid", "fa-trash", "delete-icon");
    liDelBox.appendChild(liDelete);
}

for (let todo of todoList) {
    createAndAddTodo(todo);
}
