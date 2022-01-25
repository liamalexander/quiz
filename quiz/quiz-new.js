'use strict';

const startBtn = document.getElementById("start");
const quizContainer = document.getElementById("quiz-container");
const optionBtns = Array.from(document.getElementsByClassName("btn"));
const questionContainer = document.getElementById("question-current");
const nextBtn = document.getElementById("next-btn");
const hiddenNextContainer = document.getElementById("next-question");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");
const playAgainBtn = document.getElementById("again-btn");

const questions = [
    {
        question: "Which player has won the most Grand Slam singles Titles?",
        options: 
            [
                "Roger Federer",
                "Rafael Nadal",
                "Serena Williams",
                "Steffi Graf"
            ],
        correctAnswer: "c",
        correctIndex: 2
    },
    {
        question: "Which player has won the most Australian Open singles titles?",
        options: 
            [
                "Pete Sampras",
                "Novak Djokovic",
                "Monica Seles",
                "Martina Hingis"
            ],
        correctAnswer: "b",
        correctIndex: 1
    },
    {
        question: "Which player has won the most Wimbledon Singles Titles?",
        options: 
            [
                "Roger Federer",
                "Steffi Graf",
                "Martina Navratilova",
                "Pete Sampras"
            ],
        correctAnswer: "c",
        correctIndex: 2
    },
    {
        question: "Which player has won the most French Open Singles Titles?",
        options: 
            [
                "Rafael Nadal",
                "Steffi Graf",
                "Chris Evert",
                "Novak Djokovic"
            ],
        correctAnswer: "a",
        correctIndex: 0
    },
    {
        question: "Who is the only player to complete a Calender Year Golden Slam?",
        options: 
            [
                "Rafael Nadal",
                "Steffi Graf",
                "Serena Williams",
                "Roger Federer"
            ],
        correctAnswer: "b",
        correctIndex: 1
    },
    {
        question: "Which player has NOT won all four Grand Slam tournaments?",
        options: 
            [
                "Andre Agassi",
                "Maria Sharapova",
                "Martina Navratilova",
                "Pete Sampras"
            ],
        correctAnswer: "d",
        correctIndex: 3
    },
    {
        question: "Which is the only Grand Slam tournament currently played on clay courts?",
        options: 
            [
                "Australian Open",
                "French Open",
                "Wimbledon",
                "US Open"
            ],
        correctAnswer: "b",
        correctIndex: 1
    },
    {
        question: "Chris Evert and Serena Williams share the record for US Open titles, how many did they win?",
        options: 
            [
                "4",
                "5",
                "6",
                "7"
            ],
        correctAnswer: "c",
        correctIndex: 2
    },
    {
        question: "Which Grand Slam tournament is the oldest?",
        options: 
            [
                "Wimbledon",
                "Australian Open",
                "US Open",
                "French Open"
            ],
        correctAnswer: "a",
        correctIndex: 0
    },
    {
        question: "Which player has won the most Olympic medals in tennis (4 Gold and 1 Silver)?",
        options: 
            [
                "Serena Williams",
                "Andy Murray",
                "Rafael Nadal",
                "Venus Williams"
            ],
        correctAnswer: "d",
        correctIndex: 3
    },
];

let questionNumber;
let score = 0;

// const startQuiz = function() {
//     quizContainer.style.display = "grid";
//     startBtn.classList.add("hide");
//     questionNumber = 0;
//     questionContainer.textContent += questions[0].question;
//     for (let i = 0; i < questions[0].options.length; i++) {
//         optionBtns[i].textContent = questions[0].options[i];
//     };
// };

//BELOW IS THE NEW START QUIZ WITH A TIMER, IF NOT WORKING DELETE AND USE ABOVE CODE

const startQuiz = function() {
    let time = 1;
    startBtn.classList.add("hide");
    const timer = setInterval(function () {
        console.log(time);
        time--;
        if (time === 0) {
        clearInterval(timer);
        quizContainer.style.display = "grid";
        questionNumber = 0;
        questionContainer.textContent += questions[0].question;
        for (let i = 0; i < questions[0].options.length; i++) {
            optionBtns[i].textContent = questions[0].options[i];
        }
        };
    }, 1000);
};

const playAgain = function() {
    scoreContainer.style.display = "none";
    questionNumber = 0;
    score = 0;
    clearBorders();
    enableBtns();
    questionContainer.textContent = `Q1) ${questions[0].question}`;
    for (let i = 0; i < questions[0].options.length; i++) {
        optionBtns[i].textContent = questions[0].options[i];
    };
};

const enableBtns = function() {
    optionBtns.forEach(btn => {
        btn.disabled = false;
    });
};

const showCorrectAnswer = function() {
    optionBtns.forEach(btn => {
        btn.disabled = true;
        if (btn.id === questions[questionNumber].correctAnswer) {
            btn.style.border = "4px solid green";
        };
    });
}

for (let i = 0; i < optionBtns.length; i++) {
    optionBtns[i].addEventListener("click", function (e) {
        if (questionNumber === questions.length -1 && e.target.id === questions[questionNumber].correctAnswer) {
            hiddenNextContainer.style.display = "none";
            e.target.style.border = "4px solid green";
            score = score + 1;
            scoreContainer.style.display = "block";
            scoreDisplay.textContent = `Your score: ${score} / ${questions.length}`;
        } else if (questionNumber === questions.length -1 && e.target.id !== questions[questionNumber].correctAnswer) {
            hiddenNextContainer.style.display = "none";
            e.target.style.border = "4px solid crimson";
            scoreContainer.style.display = "block";
            scoreDisplay.textContent = `Your score : ${score} / ${questions.length}`;
        } else if (e.target.id === questions[questionNumber].correctAnswer) {
            e.target.style.border = "4px solid green";
            hiddenNextContainer.style.display = "block";
            score = score + 1;
        } else {
            e.target.style.border = "4px solid crimson";
            hiddenNextContainer.style.display = "block";
        }
        showCorrectAnswer();
})};

startBtn.addEventListener("click", startQuiz);

const clearBorders = function () {
    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].style.border = "none";
    };
};

//ADD TIMER HERE TO DELAY THE QUESTIONS A BIT SO IT LOOKS BETTER
const nextQuestion = function() {
    hiddenNextContainer.style.display = "none";
    questionNumber = questionNumber +1;
    enableBtns();
    clearBorders();
    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].textContent = questions[questionNumber].options[i];
    };
    questionContainer.textContent = `Q${questionNumber +1}) ${questions[questionNumber].question}`;
};

nextBtn.addEventListener("click", nextQuestion);

playAgainBtn.addEventListener("click", playAgain);

// Add more questions
// MAKE RESPONSIVE AND TENNIS BALLS GAME TOO RESPONSIVE
// Try to make the code cleaner, especially in the options if / if else statements
// Add a Spanish language button to change it to Spanish?
// ADD A TIMER OF 1 MINUTE TO DO THE QUIZ?