var ele = document.body.querySelector(".box");
var eleAnswer = document.body.querySelector(".answer");

var question =Number(prompt("Enter your first number"));
//Checking to see if input is a number
if(isNaN(question)){
    ele.innerHTML = "Sorry the input was wrong, please only enter numbers";

}else{
    ele.innerHTML="";
}
var operator=prompt("What is your operator");

var question2 = Number(prompt("Enter your second number"));
//Checking to see if the input is a number
if(isNaN(question2)){
    eleAnswer.innerHTML = "Sorry the input was wrong, please only enter numbers";
}else{
    eleAnswer.innerHTML="";
}
if(operator==="+"){
    var result =question+question2;
}
if(operator==="-"){
    var result =question-question2;
}
if(operator==="*"){
    var result =question*question2;
}
if(operator==="/"){
    var result =question/question2;
}
eleAnswer.innerHTML="Result is "+result;
