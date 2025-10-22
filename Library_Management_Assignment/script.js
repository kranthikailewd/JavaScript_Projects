let userInput = document.getElementById("searchInput");
let nothingEl = document.getElementById("nothingId");
let popularEl = document.getElementById("popularId");
let booksContainer = document.getElementById("searchResults");
let bookArrange = document.getElementById("bookShow");

let loadingSign = document.getElementById("spinner");

function gettingElements(list) {
    for (let eachBookObject of list) {
        let everyBook = document.createElement("div");
        everyBook.classList.add("col-6", "text-center");
        bookArrange.appendChild(everyBook);

        let everyBookImg = document.createElement("img");
        everyBookImg.setAttribute("src", eachBookObject.imageLink);
        everyBookImg.style.height = "180px";
        everyBook.appendChild(everyBookImg);

        let everyBookAuthor = document.createElement("p");
        everyBookAuthor.textContent = eachBookObject.author;
        everyBookAuthor.style.fontSize = "18px";
        everyBookAuthor.style.fontWeight = "600";
        everyBook.appendChild(everyBookAuthor);
    }
}


userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        loadingSign.classList.add("d-flex");
        loadingSign.classList.remove("d-none");
        bookArrange.innerHTML = "";
        let options = {
            method: "GET"
        };
        let url = "https://apis.ccbp.in/book-store?title=" + userInput.value;

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                if (jsonData.search_results.length !== 0) {
                    nothingEl.classList.add("d-none");
                    let list = jsonData.search_results;
                    loadingSign.classList.remove("d-flex");
                    loadingSign.classList.add("d-none");
                    gettingElements(list);

                    popularEl.classList.remove("d-none");
                } else {
                    nothingEl.classList.remove("d-none");
                    popularEl.classList.add("d-none");
                }
            });
    }
});
