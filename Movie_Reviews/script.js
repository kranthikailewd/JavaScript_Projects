let movieTitle = document.getElementById("titleInput");
let yourReview = document.getElementById("reviewTextarea");
let addButton = document.getElementById("addBtn");
let givenTitleReview = document.getElementById("textReviewTitle");
let givenReview = document.getElementById("textReviewDetail");

function addingReview() {
    if (movieTitle.value === null) {
        alert("Please Enter Movie Title.");
    } else {
        givenTitleReview.textContent = "Movie Title: " + movieTitle.value;
        givenReview.textContent = "Review: " + yourReview.value;
    }
}
