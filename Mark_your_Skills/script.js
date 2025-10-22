let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

let mainContainer = document.getElementById("skillsContainer");

let listGroup = document.createElement("ul");
listGroup.id = "listGroupId";
mainContainer.appendChild(listGroup);

function skillMarking(skill) {
    let listItem = document.createElement("li");
    listItem.id = "list" + skill.uniqueNo;
    listItem.classList.add("mb-3");
    listItem.style.listStyleType = "none";
    listGroup.appendChild(listItem);

    let checking = document.createElement("input");
    checking.type = "checkbox";
    checking.id = "checkbox" + skill.uniqueNo;
    checking.classList.add("mr-2");
    listItem.appendChild(checking);

    let labeling = document.createElement("label");
    labeling.id = "label" + skill.uniqueNo;
    labeling.setAttribute("for", checking.id);
    labeling.textContent = skill.skillName;
    labeling.style.fontWeight = "500";
    listItem.appendChild(labeling);
    checking.onclick = function() {
        labeling.classList.toggle("coloring");
    };
}

for (let skill of skillList) {
    skillMarking(skill);
}
