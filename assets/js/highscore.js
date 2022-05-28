var highScore = document.querySelector("#highScore");
var clearBtn = document.querySelector("#clearBtn");
var backBtn = document.querySelector("backBtn");

clearBtn.addEventListener("click", function () {
    localStorage.clearBtn();
    location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !=null) {
    for (var i = 0; i < allScores.length; i++) {
        var newLi = document.createElement("li");
        newLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(newLi);
    }
}

backBtn.addEventListener("click", function() {
    window.location.replace("./index.html");
})