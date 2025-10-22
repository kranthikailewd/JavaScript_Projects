let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let mainContainer = document.getElementById("profileContainer");
mainContainer.style.textAlign = "center";

let profileImage = document.createElement("img");
profileImage.setAttribute("src", profileDetails.imgSrc);
let imageBox = document.getElementById("imgContainer");
imageBox.appendChild(profileImage);
profileImage.style.height = "175px";
imageBox.style.paddingTop = "100px";
imageBox.style.paddingBottom = "30px";

let nameTitle = document.createElement("h1");
nameTitle.style.fontWeight = "700";
nameTitle.textContent = profileDetails.name;
nameTitle.style.fontSize = "20px";
mainContainer.appendChild(nameTitle);

let ageNumber = document.createElement("p");
ageNumber.textContent = "Age : " + profileDetails.age;
ageNumber.style.fontWeight = "700";
mainContainer.appendChild(ageNumber);
