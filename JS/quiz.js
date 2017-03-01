var questions = [
     ['What month (number) was Lily born?',12],
     ['What day was Lily born?',6],
     ['What year was Lily born?',2015],
     ['How old is Lily in months?',14],
     ['How old (months) was Lily when she first rolled over?',2],
     ['How old (months) was Lily when she got her first tooth?',4],
     ['When did she start crawling?',7],
     ['When did she start pulling herself up using furniture',8],
     ['When did she start taking steps (months)',10],
     ['How many fingers does lily have?',10]
];

var correctAnswers = 0; //tracks how may questions are right
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

//function to manipulate DOM
function print(message) {
  //document.write(message);
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

//function to create wrong_correct lists
function buildList (arr){
     var listHTML = '<ol>'; //numbered or ordered list tag
     for (var i = 0; i < arr.length; i++) {
           listHTML += '<li>'+ arr[i] + '</li>';
     }
     listHTML += '</ol>';
     return listHTML;
}


for (var i = 0; i < questions.length; i+=1) {
     question = questions[i][0];
     answer   = questions[i][1];
     response = parseInt(prompt(question));// converts to string
     if( response=== answer){
          correctAnswers+=1;
          correct.push(question); //pushes question to correct array
     } else {
          wrong.push(question); // pushes question to wrong array
     }
}
//whenever player finishes the quiz we will hava two arrays
// one that lists all the questions correctly
// the other that lists all the questions wrong

html = "You got " + correctAnswers + " questions (s) right.";
html += "<h2> Horray, you got these questions correct: </h2>";
html += buildList(correct);
html += "<h2> Waaa..waaa.. you got these questions wrong: </h2>";
html += buildList(wrong);
print(html);
