var readLineSync = require("readline-sync");
var chalk = require('chalk');

var userName = readLineSync.question("May I know your name? ");
console.log(chalk.underline.yellow("Hey there!! Welcome", userName , "to 'DO U KNOW' Subham"));
console.log("---------------");
console.log("Lets begin! "); 

var score = 0 ;
//main function where processing takes place 
function game(question,answer){
  var userAnswer = readLineSync.question(chalk.blueBright(question));

  if (userAnswer === answer || userAnswer===answer.toLowerCase()){
    console.log(chalk.green("You are right ! "));
    score+=2;
  } else {
    console.log(chalk.red("Oops!!You are wrong."));
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

var scoreBoard= [
{
  name:"Priyanshu",
  score: 8,
},
{
  name:"Supriy",
  score: 6,
},
{
  name:"Shreya",
  score: 12,
},
{
  name:"Sam",
  score: 10,
},
];
function compare_score(a, b){
        if(a.score < b.score){
                return -1;
        }else if(a.score > b.score){
                return 1;
        
        }else{
                return 0;
        }
}
//loop

for (var i=0 ; i<questions.length ; i++)
{  var currentQuestion = questions[i];
  game(questions[i].question, questions[i].answer);
  console.log(" ");
  //console.log("your score is : ", score );
    console.log("----------------------");
}
if(score> 8){
  console.log(chalk.bold.yellowBright.bgMagenta("Wow! You know him well"));
scoreBoard.push({name: userName, score: score});
}
scoreBoard.sort(compare_score);
console.log(chalk.italic.bold.cyan("Did you make it to the LeaderBoard?"))
for(var i = 0;i < scoreBoard.length;i++){
  console.log(scoreBoard[i].name + ": " + scoreBoard[i].score);
}
console.log(chalk.bold.underline.yellow("------THANKS FOR PLAYING!!!!!!!!----"));
