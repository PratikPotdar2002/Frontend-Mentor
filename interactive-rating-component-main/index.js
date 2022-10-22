let submit = document.querySelector("#button");
let rateAgain = document.querySelector("#rate-again");
let ratings = document.querySelectorAll(".btn"); //btn
let actualRating = document.getElementById("rating");
let idObtained;

rateAgain.addEventListener("click", function () {
    document.getElementById("firstCard").style.display = "block"
    document.getElementById("thanksCard").style.display = "none"
    location.reload("index.html");
})

ratings.forEach((element) => {
    element.addEventListener("click", () => {
        actualRating.innerText = element.innerText;
        submit.addEventListener("click", function () {
            document.getElementById("thanksCard").style.display = "block"
            document.getElementById("firstCard").style.display = "none"
        })
    })
})

function changeColor(idObtained) {
    switch (idObtained) {
        case "one":
            document.getElementById("one").style.backgroundColor = "hsl(25, 97%, 53%)";
            break;
        case "two":
            document.getElementById("two").style.backgroundColor = "hsl(25, 97%, 53%)";
            break;
        case "three":
            document.getElementById("three").style.backgroundColor = "hsl(25, 97%, 53%)";
            break;
        case "four":
            document.getElementById("four").style.backgroundColor = "hsl(25, 97%, 53%)";
            break;
        case "five":
            document.getElementById("five").style.backgroundColor = "hsl(25, 97%, 53%)";
            break;
        default:
            break;
    }
}















