const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let answers = [];


let questions = [{
        question: "What is the famous Botanical Garden in Kandy?",
        choice1: "Haggala",
        choice2: "Diyathalawa",
        choice3: "Kandy",
        choice4: "Yakkala",
        answer: 1
    },

    {
        question: "The famous 'Star Fort' situated in which city?",
        choice1: "Galle",
        choice2: "Hikkaduwa",
        choice3: "Mathara",
        choice4: "Ambalangoda",
        answer: 3
    },

    {
        question: "What is the best place to see Elephants actiritees in Sri Lanka?",
        choice1: "Panamure",
        choice2: "Pinnawada",
        choice3: "Kumana",
        choice4: "Yakkala",
        answer: 1
    }
];

function getRadioValue() {
    if (document.getElementById('a').checked && answers == ) {







    } else if (document.getElementById('b').checked) {
        document.getElementById("disp").innerHTML = document.getElementById("b").value +
            " radio button is checked";
    } else if (document.getElementById('c').checked) {
        document.getElementById("disp").innerHTML = document.getElementById("c").value +
            " radio button is checked";
    } else if (document.getElementById('d').checked) {
        document.getElementById("disp").innerHTML = document.getElementById("d").value +
            " radio button is checked";
    } else {

    }
}


startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);

    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1); //remove already asked questions

    acceptingAnswers = true;

    getRadioValue();
};








startQuiz();