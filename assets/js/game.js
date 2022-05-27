var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");

let currentQuestion = {}
let acceptingAnswers = true
let  questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What is 2 + 2?",
        choice1: "2", 
        choice2: "4", 
        choice3: "21", 
        choice4: "17", 
        answer: 2,
    },
    {
        question: "What is 3 + 3?",
        choice1: "6", 
        choice2: "3", 
        choice3: "12", 
        choice4: "9", 
        answer: 1,
    },  {
        question: "What is 4 + 4?",
        choice1: "10", 
        choice2: "12", 
        choice3: "9", 
        choice4: "8", 
        answer: 3,
    },  {
        question: "What is 5 + 5?",
        choice1: "11", 
        choice2: "13", 
        choice3: "12", 
        choice4: "10", 
        answer: 4,
    }
]