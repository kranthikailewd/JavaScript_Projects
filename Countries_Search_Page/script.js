// let userInput = document.getElementById("searchInput");
// let spinnerLogo = document.getElementById("spinner");
// let countries = document.getElementById("resultCountries");


// function createAndAppend(eachCountry) {
//     let {
//         flag,
//         name,
//         population
//     } = eachCountry;

//     let eachItem = document.createElement("div");
//     eachItem.classList.add("country-card", "col-12", "col-md-6");
//     countries.appendChild(eachItem);

//     let eachItemDiv = document.createElement("div");
//     eachItemDiv.classList.add("row");
//     eachItem.appendChild(eachItemDiv);

//     // ------------------------------------------------------------

//     let countryImgDiv = document.createElement("div");
//     countryImgDiv.classList.add("col-3");
//     eachItemDiv.appendChild(countryImgDiv);

//     let eachFlag = document.createElement("img");
//     eachFlag.setAttribute("src", flag);
//     eachFlag.classList.add("country-flag");
//     countryImgDiv.appendChild(eachFlag);

//     // ------------------------------------------------------------

//     let countryTextDiv = document.createElement("div");
//     countryTextDiv.classList.add("col-9");
//     eachItemDiv.appendChild(countryTextDiv);

//     let eachName = document.createElement("p");
//     eachName.textContent = name;
//     eachName.classList.add("country-name");
//     countryTextDiv.appendChild(eachName);

//     let eachPopulation = document.createElement("p");
//     eachPopulation.textContent = population;
//     eachPopulation.classList.add("country-population");
//     countryTextDiv.appendChild(eachPopulation);

// }


// function getAllData(event) {
//     countries.textContent = "";
//     spinnerLogo.classList.toggle("d-none");
//     let options = {
//         method: "GET"
//     };
//     let url = "https://apis.ccbp.in/countries-data";
//     fetch(url, options)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(jsonData) {
//             for (let eachObject of jsonData) {
//                 let countryName = eachObject.name;
//                 if (countryName.toLowerCase().includes(userInput.value.toLowerCase())) {
//                     createAndAppend(eachObject);
//                 }
//             }
//             spinnerLogo.classList.toggle("d-none");
//         });

// }

// userInput.addEventListener("keyup", getAllData);



// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------





let searchInputEl = document.getElementById("searchInput");
let spinnerEl = document.getElementById("spinner");
let resultCountriesEl = document.getElementById("resultCountries");


let searchInputVal = "";
let countriesList = [];


function createAndAppendCountry(country) {
    // Creating and appending countryEl to the resultCountriesEl
    let countryEl = document.createElement("div");
    countryEl.classList.add("country-card", "col-11", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
    resultCountriesEl.appendChild(countryEl);


    // Creating and appending countryFlagEl to the countryEl
    let countryFlagEl = document.createElement("img");
    countryFlagEl.src = country.flag;
    countryFlagEl.classList.add("country-flag", "mt-auto", "mb-auto");
    countryEl.appendChild(countryFlagEl);


    // Creating and appending countryInfoEl to the countryEl
    let countryInfoEl = document.createElement("div");
    countryInfoEl.classList.add("d-flex", "flex-column", "ml-4");
    countryEl.appendChild(countryInfoEl);


    // Creating and appending countryNameEl to the countryInfoEl
    let countryNameEl = document.createElement("p");
    countryNameEl.textContent = country.name;
    countryNameEl.classList.add("country-name");
    countryInfoEl.appendChild(countryNameEl);


    // Creating and appending countryPopulationEl to the countryInfoEl
    let countryPopulationEl = document.createElement("p");
    countryPopulationEl.textContent = country.population;
    countryPopulationEl.classList.add("country-population");
    countryInfoEl.appendChild(countryPopulationEl);
}


function displaySearchResults() {
    for (let country of countriesList) {
        let countryName = country.name;


        // If the searchInputVal includes in the countryName, creating and appending it to the resultCountriesEl
        if (countryName.includes(searchInputVal)) {
            createAndAppendCountry(country);
        }
    }
}


function getCountries() {
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
        method: "GET"
    };


    resultCountriesEl.textContent = "";


    spinnerEl.classList.remove("d-none");
    resultCountriesEl.classList.add("d-none");


    //Making an HTTP request (GET method) using fetch
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            resultCountriesEl.classList.remove("d-none");
            spinnerEl.classList.add("d-none");


            countriesList = jsonData;
            displaySearchResults();
        });
}


function onChangeSearchInput(event) {
    searchInputVal = event.target.value;
    getCountries();
}


getCountries();
searchInputEl.addEventListener("keyup", onChangeSearchInput);
