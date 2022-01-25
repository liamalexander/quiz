'use strict';

const questions = [
    {
    question: "Who has won the most Grand Slams?",
    options: {
        a: "Serena",
        b: "Federer",
        c: "Nadal",
        d: "Graf"    
    },
    correctAnswer: "a",
    correctAns: 0
    },
    {
    question: "Which is the only Grand Slam played on Grass courts?",
    options: {
        a: "Australian Open",
        b: "French Open",
        c: "Wimbledon",
        d: "US Open"    
    },
        correctAnswer: "c",
        correctAns: 2
    },
    {
        question: "Which is the only Grand Slam played on Clay courts?",
        options: {
            a: "Australian Open",
            b: "French Open",
            c: "Wimbledon",
            d: "US Open"    
        },
            correctAnswer: "b",
            correctAns: 1
        }
];

//Elements
const questionContainer = document.getElementById("question-current");
const startBtn = document.getElementById("start");
const quizContainer = document.getElementById("quiz-container");
const optionA = document.getElementById("a");
const optionB = document.getElementById("b");
const optionC = document.getElementById("c");
const optionD = document.getElementById("d");
const optionBtns = document.getElementsByClassName("btn");
const nextBtn = document.getElementById("next-btn");
const nextQ = document.getElementById("next-question");

//Variables
let score = 0;
let currentQuestion = questions[0];


const startQuiz = function(questions) {
    for (let i = 0; i < questions.length; i++) {
        if (currentQuestion === questions[i]) {
            questionContainer.innerHTML += questions[i].question;
            optionA.innerHTML += questions[i].options.a;
            optionB.innerHTML += questions[i].options.b;
            optionC.innerHTML += questions[i].options.c;
            optionD.innerHTML += questions[i].options.d;
            quizContainer.style.display = "grid";
            startBtn.classList.add("hide");
        }
        }
    };
;

startBtn.addEventListener("click", function(){startQuiz(questions)}, false);


for(let i = 0; i < optionBtns.length; i++) {
    optionBtns[i].addEventListener("click", function(e) {
        if(e.target.id === currentQuestion.correctAnswer) {
            score++;
            e.target.style.border = "solid 5px green";
            nextQ.style.display = "block";
            currentQuestion = questions[i+1];
        } else {
            e.target.style.border = "solid 5px red";
            optionBtns[`${currentQuestion.correctAns}`].style.border = "solid 5px green";
            nextQ.style.display = "block";
            currentQuestion = questions[i+1];
        };
        // Array.from(optionBtns).forEach(function (btn) {
        //     btn.disabled = true;
        // });
    });
};

const nextQuestion = function(questions) {
    for (let i = 0; i < questions.length; i++) {
    if (currentQuestion === questions[i]) {
        questionContainer.innerHTML = `Q${i+1}) ${questions[i].question}`;
        optionA.innerHTML = `A) ${questions[i].options.a}`;
        optionB.innerHTML = `B) ${questions[i].options.b}`;
        optionC.innerHTML = `C) ${questions[i].options.c}`;
        optionD.innerHTML = `D) ${questions[i].options.d}`;
        for (let j = 0; j < optionBtns.length; j++) {
            optionBtns[j].style.border = "none";
        }
            //code above is new and not tested
        // nextQ.style.display = "none";
    }
    }
    // console.log(currentQuestion);
};

nextBtn.addEventListener("click", function(){nextQuestion(questions)}, false);