var score = 0;
var questionCounter = 0;
var container = document.querySelector("#container");
var timer = document.querySelector("#timer");
var start = document.querySelector("#start");
var home = document.querySelector("#home");

// Timer setup
var timeLeft = 70;
var penalty = 10;
var holdInterval = 0;
var newEl = document.createElement("ul");

var questions = [
    {
        question: "What is 2 + 2?",
        choices: ["A. 2", "B. 4", "C. 21", "D. 17"],
        answer: "B. 4"
    },
    {
        question: "What is 3 + 3?",
        choices: ["A. 6", "B. 3", "C. 9", "D. 12"],
        answer: "A. 6"
    },
    {
        question: "What is 4 + 4?",
        choices: ["A. 10", "B. 12", "C. 9", "D. 8"],
        answer: "D. 8"
    },
    {
        question: "What is 5 + 5?",
        choices: ["A. 11", "B. 13", "C. 10", "D. 12"],
        answer: "C. 10"
    }
]

start.addEventListener("click", function() {
    if(holdInterval === 0) {
        holdInterval = setInterval(function() {
            timeLeft--;
            timer.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(holdInterval);
                done();
                timer.textContent = "Time's Up!";
            }
        }, 1000);
    }
    render(questionCounter);
})

function render(questionOptions) {
    //loop through questions array
    for(var i=0; i < questions.length; i++) {
        var userQuestion = questions[questionCounter].question;
        var userChoices = questions[questionCounter].choices;
        home.textContent = userQuestion;
    }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        home.appendChild(newEl);
        newEl.appendChild(listItem);
        listItem.addEventListener("cick", (compare));
    })
}

//compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches(li)) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
       
        //Correct
        if (element.textContent == questions[questionCounter].answer) {
            score++;
            createDiv.textContent = "Correct!";
        } 
        //Incorrect
        else {
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Wrong!"
        }
    }

    //What quesiton user is one
    questionCounter++;

    if (questionCounter >= questions.length) {
        done();
        createDiv.textContent = "All done"
    }
    else {
        render(questionCounter);
    }
    home.appendChild(createDiv);
}


function done() {
    home.innerHTML = "";
    timer.innerHTML = "";

    var newH1 = document.createElement("h1");
    newH1.setAttribute("id", "newH1");
    newH1.textContent = "All Done!"
    home.appendChild(newH1);

    var newP = document.createElement("p");
    newP.setAttribute("id", "newP");
    home.appendChild(newP);

    //Time remaining and score
    if (timeLeft >= 0){
        var remainingTime = timeLeft;
        var newP2 = document.createElement("p");
        clearInterval(holdInterval);
        newP2.textContent = "Your final score is: " + remainingTime;
        home.appendChild(newP2);
    }

    var newLabel = document.createElement("label");
    newLabel.setAttribute("id", "newLabel");
    newLabel.textContent = "Enter initials: ";
    home.appendChild(newLabel);

    var newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "initials");
    newInput.textContent = "";
    home.appendChild(newInput);

    var newSubmit = document.createElement("button");
    newSubmit.setAttribute("type", "submit");
    newSubmit.setAttribute("class", "btn");
    newSubmit.textContent = "Submit";
    home.appendChild(newSubmit);

    newSubmit.addEventListener("click", function() {
        var initials = newInput.value;

        if (initials === null) {
            console.log("No initials provided");
        }
        else {
            var finalScore = {
                initials: initials,
                score: remainingTime
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores:")
            if(allScores === null) {
                allScores = [];
            }
            else {
                allScores = JSON.parse(allScores);
            }

        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
       
        window.location.replace("./highscore.html");
        }
    })
}