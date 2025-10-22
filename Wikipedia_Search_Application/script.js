let userInput = document.getElementById("searchInput");
let resultDiv = document.getElementById("searchResults");
let loadingSign = document.getElementById("spinner");

function createAndAppend(eachSubObject) {
    let {
        title,
        link,
        description
    } = eachSubObject;
    console.log(title);
    console.log(link);
    console.log(description);

    let eachItemDiv = document.createElement("div");
    resultDiv.appendChild(eachItemDiv);

    let eachTitle = document.createElement("a");
    eachTitle.classList.add("result-title");
    eachTitle.textContent = title;
    eachItemDiv.appendChild(eachTitle);

    let seperater = document.createElement("br");
    eachItemDiv.appendChild(seperater);

    let eachLink = document.createElement("a");
    eachLink.classList.add("result-url");
    eachLink.textContent = link;
    eachItemDiv.appendChild(eachLink);

    let eachDescription = document.createElement("p");
    eachDescription.classList.add("link-description");
    eachDescription.textContent = description;
    eachItemDiv.appendChild(eachDescription);


}

function getAllRelatedItems(event) {
    if (event.key === "Enter") {
        resultDiv.textContent = "";
        loadingSign.classList.toggle("d-none");

        let options = {
            method: "GET"
        };
        let url = "https://apis.ccbp.in/wiki-search?search=" + userInput.value;

        fetch(url, options)
            .then(function(response) {
                userInput.value = "";
                return response.json();
            })
            .then(function(jsonData) {

                let searchResultsObject = jsonData.search_results;
                console.log(searchResultsObject);
                for (let eachSubObject of searchResultsObject) {
                    createAndAppend(eachSubObject);
                }
                loadingSign.classList.toggle("d-none");
            });
    }
}


userInput.addEventListener("keydown", getAllRelatedItems);
