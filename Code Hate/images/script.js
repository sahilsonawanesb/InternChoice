const questions = [
    {
        questions: "What is the correct way to declare a JavaScript variable?",
        answers: [
           { text: "var x = 5;", correct: true},
           { text: "variable x = 5;", correct: false},
           { text: "let x = 5", correct:false},
           { text: "int x = 5", correct:false},
        ]
    },

    {
        questions: "What is the purpose of the 'typeof' operator in JavaScript?",
        answers: [
           { text: "It performs mathematical operations.", correct: false},
           { text: " It checks if a variable is defined", correct: false},
           { text: "t determines the data type of a value or variable", correct:true},
           { text: "It declares a function in JavaScript", correct:false},
        ]
    },

    {
        questions: "Which of the following is not a JavaScript data type?",
        answers: [
           { text: "string", correct: false},
           { text: "boolean", correct: false},
           { text: "number", correct:false},
           { text: "character", correct:true},
        ]
    },

    {
        questions: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
           { text: "It refers to the current HTML element.", correct: false},
           { text: "It refers to the current JavaScript file.", correct: false},
           { text: "It refers to the parent function.", correct:false},
           { text: "It refers to the current object on which the method or property is being", correct:true},
        ]
    },

    {
        questions: "Which keyword is used to declare a constant variable in JavaScript?",

       
        answers: [
           { text: "var", correct: false},
           { text: "const", correct: true},
           { text: "let", correct:false},
           { text: "final", correct:false},
        ]
    }
];


const questionsEle = document.getElementById("questions");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionsInd = 0;
let score = 0;

function startQuiz(){
    currentQuestionsInd = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionsInd];
    let questionNo = currentQuestionsInd + 1;
    questionsEle.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn1");
        answerBtn.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionsEle.innerHTML = `Your Score is: <hr> ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNextbtn(){
    currentQuestionsInd++;
    if(currentQuestionsInd <questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if(currentQuestionsInd < questions.length){
        handleNextbtn();
    }else{
        startQuiz();
    }
});
startQuiz();