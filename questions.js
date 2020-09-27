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
