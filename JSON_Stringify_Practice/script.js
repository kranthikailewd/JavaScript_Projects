let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let mainContainer = document.getElementById("jsonContainer");

let bikePara = document.createElement("p");
let personPara = document.createElement("p");
let todosPara = document.createElement("p");

mainContainer.appendChild(bikePara);
mainContainer.appendChild(personPara);
mainContainer.appendChild(todosPara);

bikePara.classList.add("greying");
personPara.classList.add("greying");
todosPara.classList.add("greying");

bikePara.textContent = JSON.stringify(bikes);
personPara.textContent = JSON.stringify(person);
todosPara.textContent = JSON.stringify(todos);
