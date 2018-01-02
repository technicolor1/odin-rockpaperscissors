var resultDisplay = document.querySelector("#result");
var scoreDisplay = document.querySelector("#score");
var buttons = document.querySelectorAll("#stripe");
var rndsNum = document.querySelector("h3");
var chevronUp = document.querySelector("#chevronUp");
// var roundsCntr = document.getElementById("roundsCounter");
// var setTheRnds = document.getElementById("setRnds");
// var clearTheRnds = document.getElementById("clearRnds");
// var actualTheRnds = document.querySelector("span");
let playerScore = 0;
let computerScore = 0;
let resetBtnCount = 0;
let Rnds = rndsNum.textContent;

function checkPositive() {
   while (rndsNum.textContent <= 0) {
      rndsNum.textContent = 0;
   }
}

chevronUp.addEventListener("click", function(){
   Rnds = rndsNum.textContent++;
})

chevronDown.addEventListener("click", function(){
   checkPositive();
   Rnds = rndsNum.textContent--;
})

buttons.forEach((button) => {
   button.addEventListener('click', (e) => {
      let choice = button.textContent;
      compare(choice, computersChoice());
      game();

   });
});

function compare(playerGuess, computerGuess) {
   playerGuess = playerGuess.toLowerCase();

   if (computerGuess == playerGuess) {
      console.log("It is a tie!");
      result = "tie";

   } else if (computerGuess == "rock") {
      if (playerGuess == "paper") {
         console.log("Paper beats rock! You win!");
         result = "win";
      } else {
         console.log("Rock beats scissors! You lose!");
         result = "lose";
      }
   } else if (computerGuess == "paper") {
      if (playerGuess == "rock") {
         console.log("Paper beats rock! You lose!");
         result = "lose";
      } else {
         console.log("Scissors beat paper! You win!");
         result = 'win';
      }
   } else if (computerGuess == "scissors") {
      if (playerGuess == "rock") {
         console.log("Rock beats paper! You win!");
         result = 'win';
      } else {
         console.log("Scissors beat paper! You lose!");
         result = "lose";
      }
   }
   return result;
}

function game() {

   if (result === "win") {
      resultDisplay.textContent = "Congratulations! You won this round!";
      playerScore++;
   } else if (result === "lose") {
      resultDisplay.textContent = "Sorry, the computer won this round!";
      computerScore++;
   } else if (result === "tie") {
      resultDisplay.textContent = "Wow, it's a tie!";
   }

   if (playerScore >= (Rnds) || computerScore >= (Rnds)) {
      document.getElementById("rock").setAttribute("disabled", "true");
      document.getElementById("paper").setAttribute("disabled", "true");
      document.getElementById("scissors").setAttribute("disabled", "true");
   }
   Rnds = rndsNum.textContent;
   scoreDisplay.textContent = "Your Score: " + playerScore + "  Computer Score: " + computerScore;
}

function resetGame() {
   playerScore = 0;
   computerScore = 0;
   resultDisplay.innerHTML = "";
   scoreDisplay.innerHTML = "";
   document.getElementById("rock").removeAttribute("disabled");
   document.getElementById("paper").removeAttribute("disabled");
   document.getElementById("scissors").removeAttribute("disabled");
}

function computersChoice() {
   let computersChoice = Math.random();

   if (computersChoice <= 0.34) {
      return "rock";
   } else if (computersChoice <= 0.67) {
      return "paper";
   } else {
      return "scissors";
   }
}
