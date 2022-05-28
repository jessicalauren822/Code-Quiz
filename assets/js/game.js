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


// var question = document.querySelector("#question");
// var choices = Array.from(document.querySelectorAll(".choice-text"));
// var progressText = document.querySelector("#progressText");
// var scoreText = document.querySelector("#score");
// var score = 0;

// let currentQuestion = {}
// let acceptingAnswers = true
// let  questionCounter = 0
// let availableQuestions = []

// let questions = [
//     {
//         question: "What is 2 + 2?",
//         choice1: "2", 
//         choice2: "4", 
//         choice3: "21", 
//         choice4: "17", 
//         answer: 2,
//     },
//     {
//         question: "What is 3 + 3?",
//         choice1: "6", 
//         choice2: "3", 
//         choice3: "12", 
//         choice4: "9", 
//         answer: 1,
//     },  {
//         question: "What is 4 + 4?",
//         choice1: "10", 
//         choice2: "12", 
//         choice3: "9", 
//         choice4: "8", 
//         answer: 3,
//     },  {
//         question: "What is 5 + 5?",
//         choice1: "11", 
//         choice2: "13", 
//         choice3: "12", 
//         choice4: "10", 
//         answer: 4,
//     }
// ]

// var SCORE_POINTS = 100
// var MAX_QUESTIONS = 4

// startGame = () => {
//     var questionCounter = 0
//     score = 0
//     availableQuestions = [...questions]
//     getNewQuestion()
// }

// getNewQuestion = () => {
//     if (availableQuestions.length === 0 || questionCounter < MAX_QUESTIONS) {
//     localStorage.setItem("mostRecentScore", score)
//     createDiv.textContent = "End of quiz!" + " " + "You got " + score + "/" + questions.legth + "Correct!";
//     questionsDiv.appendChild(createDiv);
// }

//     questionCounter++
//     progressText.innerText = questions (questionCounter); (MAX_QUESTIONS)

//     var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
//     currentQuestion = availableQuestions[questionsIndex]
//     question.innerText = currentQuestion.question

//     choices.forEach(choice => {
//         var number = choice.dataset["number"]
//         choice.innerText = currentQuestion["choice" + number]
//     })

//     availableQuestions. splice(questionsIndex, 1)

//     acceptingAnswers = true
// }

// choices.forEach(choice => {
//     choice.addEventListener("click", event => {
//         if(!acceptingAnswers) return

//         acceptingAnswers = false
//         var selectedChoice = event.target
//         var selectedAnswer = selectedChoice.dataset["number"]

//         let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

//         if(classToApply === "correct") {
//             incrementscore(SCORE_POINTS)
//         }

//         selectedChoice.parentElement.classList.add(classToApply)

//         setTimeout(() => {
//             selectedChoice.parentElement.classList.remove(classToApply)
//             getNewQuestion()

//         }, 1000)
//     })
// })

// incrementScore = num => {
//     score += num
//     scoreText.innerText = score
// }

// startGame()
