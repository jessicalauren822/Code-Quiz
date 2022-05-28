var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clea");
var goBack = document.querySelector("goBack");

clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

