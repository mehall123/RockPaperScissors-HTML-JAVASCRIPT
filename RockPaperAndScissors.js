    playerScore = 0;
    compScore = 0;
    playerGameScore = 0;
    compGameScore = 0;
function gameFunction(num) { 

randChoice = Math.floor(Math.random() * (4 - 1) + 1);
if (num == 1) {
  document.getElementById("choice").innerHTML = "You have chosen ROCK";
  }
 else if (num == 2){
 document.getElementById("choice").innerHTML = "You have chosen PAPER";
 }
 else{
 document.getElementById("choice").innerHTML = "You have chosen SCISSORS";
 }
 if (randChoice == 1) {
  document.getElementById("compChoice").innerHTML = "Computer chose ROCK";
  document.getElementById("compBtnImage").src = "images/rock.jpg";
  }
 else if (randChoice == 2){
 document.getElementById("compChoice").innerHTML = "Computer chose PAPER";
 document.getElementById("compBtnImage").src = "images/paper.jpg";
 }
 else{
 document.getElementById("compChoice").innerHTML = "Computer chose SCISSORS";
 document.getElementById("compBtnImage").src = "images/scissors.jpg";
 }
 if (randChoice == num){
 document.getElementById("result").innerHTML = "Result: Draw";
 } else{
 if (num == 1 && randChoice == 2){
 document.getElementById("result").innerHTML = "Result: Lose";
 compScore = compScore + 1;
 document.getElementById("score").innerHTML = "Player " + playerScore + " - " + compScore + " Computer";
 }
 if (num == 1 && randChoice == 3){
 document.getElementById("result").innerHTML = "Result: Win";
 playerScore = playerScore + 1;
 document.getElementById("score").innerHTML = "Player " + playerScore + " - " + compScore + " Computer";
 }
 if (num == 2 && randChoice == 1){
 document.getElementById("result").innerHTML = "Result: Win";
 playerScore = playerScore + 1;
 document.getElementById("score").innerHTML = "Player " + playerScore + " - " + compScore + " Computer";
 }
 if (num == 2 && randChoice == 3){
 document.getElementById("result").innerHTML = "Result: Lose";
 compScore = compScore + 1;
 document.getElementById("score").innerHTML = "Player " + playerScore + " - " + compScore + " Computer";
 }
 if (num == 3 && randChoice == 1){
 document.getElementById("result").innerHTML = "Result: Lose";
 compScore = compScore + 1;
 document.getElementById("score").innerHTML = "Player " + playerScore + " - " + compScore + " Computer";
 }
 if (num == 3 && randChoice == 2){
 document.getElementById("result").innerHTML = "Result: Win";
 playerScore = playerScore + 1;
 document.getElementById("score").innerHTML = "Player " + playerScore + " - " + compScore + " Computer";
 }
 }
 if (playerScore == 10){
 playerScore = 0;
 compScore = 0;
 playerGameScore = playerGameScore + 1;
 document.getElementById("score").innerHTML = "Player " + playerScore + " - " + compScore + " Computer";
 document.getElementById("gameScore").innerHTML = "Player " + playerGameScore + " - " + compGameScore + " Computer";
 }
 if (compScore == 10){
 playerScore = 0;
 compScore = 0;
 compGameScore = compGameScore + 1;
 document.getElementById("score").innerHTML = "Player " + playerScore + " - " + compScore + " Computer";
 document.getElementById("gameScore").innerHTML = "Player " + playerGameScore + " - " + compGameScore + " Computer";
 }
}