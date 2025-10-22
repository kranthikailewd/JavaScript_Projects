let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let mainHeading = document.getElementsByClassName("recipe-title")[0];
let title = recipeObj.title;
console.log(title);

mainHeading.textContent = title;

let foodImage = document.querySelector("img");
foodImage.setAttribute("src", recipeObj.imgSrc);
let foodList = document.querySelector("ul");
for (let item of recipeObj.ingredients) {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    foodList.appendChild(listItem);
    foodList.style.color = "#fff";
}
