var questionEl = document.querySelector('#question')
var choicesEl = document.querySelector('#choices-quiz')
var StartEl = document.getElementById("Start")
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var captionEl = document.getElementById("caption");
// var quiz = document.querySelector('#quiz');
var runningQuestion = 0;
var correctAnswer = 0;
var wrongAnswer = 0;
// var timeEl = getElementbyclass('time');
// var highscoreEl = getElementbyclass('highscore');



var questionList = [{//0
    question: 'what does HTML stand for?',//.question
    choiceA: 'hyper text markup language',//.ChoiceA
    choiceB: 'hyperlinks and text markup languages',
    choiceC: 'home tool',
    correct: "A"
},
{//1
    question: 'question number 2?',
    choiceA: 'choice A',
    choiceB: 'choice B',
    choiceC: 'choice C',
    correct: "B"

},
{//2
    question: 'question number 3?',
    choiceA: 'choice A',
    choiceB: 'choice B',
    choiceC: 'choice C',
    correct: "C"
}];

var lastQuestion = questionList.length - 1;
//getting questions to show up
choicesEl.style.display = 'none';

function renderQuestions() {
    var c = questionList[runningQuestion];
    questionEl.textContent = questionList[runningQuestion].question;
    choiceA.innerHTML = c.choiceA;
    choiceB.innerHTML = c.choiceB;
    choiceC.innerHTML = c.choiceC;
    // var choiceA = document.getElementById("A");
    // choiceA.textContent = questionList[0].choiceA

}


// event listener which begins the quiz
StartEl.addEventListener("click", startQuiz);

//function of the event listener
function startQuiz() {
    Start.style.display = "none";

    choicesEl.style.display = 'block';
    renderQuestions();



};

function checkAnswer(userChoice) {
    console.log(userChoice)
    if (userChoice == questionList[runningQuestion].correct) {
        captionEl.innerText = 'Correct Answer'
        correctAnswer++
    } else {
        captionEl.innerText = 'Wrong Answer'
        wrongAnswer++
    }
    if (runningQuestion < lastQuestion) {
        runningQuestion++
        renderQuestions();
    } else {
        console.log('correct asnwer', correctAnswer);
    }
}




//display none css visability to hidden
//change opacity css





