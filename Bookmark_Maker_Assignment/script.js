// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let form = document.getElementById("bookmarkForm");

let siteName = document.getElementById("siteNameInput");
let nameErr = document.getElementById("siteNameErrMsg");
let siteUrl = document.getElementById("siteUrlInput");
let urlErr = document.getElementById("siteUrlErrMsg");
let submitButton = document.getElementById("submitBtn");
let bookmarkList = document.getElementById("bookmarksList");


function nameBlur() {
    if (siteName.value === "") {
        nameErr.textContent = "Required*";
        nameErr.style.color = "#dc3545";
    }
}
siteName.addEventListener("change", nameBlur);

function urlBlur() {
    if (siteName.value === "") {
        urlErr.textContent = "Required*";
        urlErr.style.color = "#dc3545";
    }
}
siteUrl.addEventListener("change", urlBlur);

// -------------------------------------------------------------------------

let list = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    nameBlur();
    urlBlur();

    //Each time create new object and push it into list, so that every object in the list won't
    // point to same reference and every object won't be with same values.
    let eachListItem = {
        listItemSiteName: "",
        listItemSiteUrl: ""
    };

    if (siteName.value !== "" && siteUrl.value !== "") {
        eachListItem.listItemSiteName = siteName.value;
        eachListItem.listItemSiteUrl = siteUrl.value;
        list.push(eachListItem);
        console.log(list);

        bookmarkList.innerHTML = "";
        for (let eachItem of list) {
            let eachLi = document.createElement("li");
            eachLi.style.listStyleType = "none";
            eachLi.style.width = "100%";
            eachLi.style.marginBottom = "10px";
            eachLi.classList.add("bookmarksListItem");
            bookmarkList.appendChild(eachLi);

            let liNamePara = document.createElement("p");
            liNamePara.textContent = eachItem.listItemSiteName;
            eachLi.appendChild(liNamePara);
            let liUrlAnchor = document.createElement("a");
            liUrlAnchor.textContent = eachItem.listItemSiteUrl;
            liUrlAnchor.setAttribute("href", eachItem.listItemSiteUrl);
            eachLi.appendChild(liUrlAnchor);

        }
    }



})
