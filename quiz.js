var questionEl = document.querySelector('#question')
var choicesEl = document.querySelector('#choices-quiz')
var StartEl = document.getElementById("Start")
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var captionEl = document.getElementById("caption");
var highscoreEl = document.getElementById('highscore');
// var quiz = document.querySelector('#quiz');
var endTextEl = document.getElementById('endText');
var runningQuestion = 0;
var correctAnswer = 0;
var wrongAnswer = 0;
var timerobject = '';

var savedata = JSON.parse(localStorage.getItem('data')) || []
var timeEl = document.getElementById('time');
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
var time = lastQuestion * 5;

function countdown(){
    timeEl.textContent='Time:' + time;
    if(time > 0){
       time-- 
    }else{
        endofgame()
    }
    
}
//getting questions to show up and hidding initial display
choicesEl.style.display = 'none';
endTextEl.style.display = 'none';
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
    
timerobject = setInterval(countdown, 1000)
renderQuestions();

};
// validates answers and keeps questions on going
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
        console.log('correct asnwer:', correctAnswer);
        endofgame();
    }
}

//what occrus end of game// hides content and clears timer
function endofgame(){
    choicesEl.style.display = "none";
    questionEl.style.display = "none";
endTextEl.style.display = 'block';
captionEl.style.display = 'none';
clearInterval(timerobject)
}


function user(){
    var userInitials = document.getElementById('userInitials').value
    console.log(userInitials);
savedata.push({
    user: userInitials,
    score: correctAnswer,
    time: 10 - timerobject,

})

localStorage.setItem('data',JSON.stringify(savedata))
endTextEl.innerHTML = '<h1> Thank you for playing </h1>'
highscoreEl.innerHTML = ('View Highscore:' + ' ' + (localStorage.getItem(savedata.score)));
}


//display none css visability to hidden
//change opacity css





