var questionList = [{
    question: 'what does HTML stand for?',
    choiceA: 'hyper text markup language',
    choiceB: 'hyperlinks and text markup languages',
    choiceC: 'home tool',
    correct: "A"
},
{
    question: 'question number 2?',
    choiceA: 'choice A',
    choiceB: 'choice B',
    choiceC: 'choice C',
    correct: "B"

},
{
question: 'question number 3?',
choiceA: 'choice A',
choiceB: 'choice B',
choiceC: 'choice C',
correct: "C"


}];

// how to show questions on innerhtml

var runningQuestion = 0;

function renderQuestion(){
    let q = questionsList[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}


function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}
function answerIsCorrect();
