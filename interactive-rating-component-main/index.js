let submit = document.querySelector("#button");
let rateAgain = document.querySelector("#rate-again");
let ratings = document.querySelectorAll(".btn"); //btn
let actualRating = document.getElementById("rating");

submit.onclick = function reply_click() {
    location.href = "thanks.html";
};

rateAgain.onclick = function reply_click() {
    location.href = "index.html";
};


ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        actualRating.innerHTML = rating.innerHTML;
    })
});














