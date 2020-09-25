var questionEl = document.querySelector('#question')
var questionAnswerEl = document.querySelector('#questionAnswers')
var StartEl = document.getElementById("Start")

function startQuiz(){
    // questionAnswerEl = document.textContent(questionList[0])
     questionEl = document.querySelector('#question')
questionEl.textContent = questionList[0].question;
for (var q = 0; q < questionList.length; q++) {
    var questionAnswerP = document.createElement('li');
    questionAnswerEl.textContent = questionList[q];
    questionAnswerEl.appendChild(questionAnswerP);

}



};

StartEl.addEventListener("click", startQuiz);

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


//display none css visability to hidden
//change opacity css





