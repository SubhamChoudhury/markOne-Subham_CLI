var readLineSync = require("readline-sync");

var userName = readLineSync.question("May I know your name? ");
console.log("Hey there!! Welcome", userName , "to 'DO U KNOW' Subham");
console.log("---------------");
console.log("Lets begin! "); 

var score = 0 ;
//main function where processing takes place 
function game(question,answer){
  var userAnswer = readLineSync.question(question);

  if (userAnswer === answer || userAnswer===answer.toLowerCase()){
    console.log("You are right ! ");
    score+=2;
  } else {
    console.log("Oops!!You are wrong.");
    console.log("The correct ans is : " , answer);
  }
  console.log("Your current score is : " ,score);
}
//array of objects
var questionOne = {
 question : "Where does Subham live ? ",
 answer : "Bhubaneswar",  }

var questionTwo = {
 question : "Can you guess his age ? ",
answer :"20" ,
}

var questionThree = {
  question : "Who's his favorite singer ? ",
  answer: "Arijit Singh",
}

var questionFour = {
  question : "What's his Favorite? Tea or Coffee: ",
  answer : "Tea",
}
var questionFive = {
  question : "Well,can you guess his favorite movie franchise? ",
  answer : "Marvel",
}
var questionSix = {
  question : "Last one, what's his favorite food? ",
  answer : "Butter Chicken",
}
var questions = [questionOne,questionTwo, questionThree,questionFour,questionFive,questionSix];

//loop

for (var i=0 ; i<questions.length ; i++)
{  var currentQuestion = questions[i];
  game(questions[i].question, questions[i].answer);
  console.log(" ");
  //console.log("your score is : ", score );
    console.log("----------------------");
}
if(score> 8){
  console.log("Wow! You know him well");
}
console.log("------THANKS FOR PLAYING!!!!!!!!----");
