let mainContainer = document.getElementById("checkboxWithLabelContainer");
mainContainer.style.height = "100vh";
mainContainer.style.textAlign = "center";


let group = document.createElement("div");
group.id = "groupingbox";
mainContainer.appendChild(group);
group.style.marginTop = "50vh";

let checking = document.createElement("input");
checking.id = "checkbox";
checking.type = "checkbox";
checking.style.margin = "10px";
group.appendChild(checking);

let labeling = document.createElement("label");
labeling.id = "checkboxLabel";
labeling.setAttribute("for", "checkbox");
labeling.textContent = "Click Me!";
group.appendChild(labeling);
