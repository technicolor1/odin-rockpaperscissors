var resultDisplay = document.querySelector("#result");
var scoreDisplay = document.querySelector("#score");
var buttons = document.getElementsByClassName("rPS");
var rndsNum = document.querySelector("h3");
var chevronUpBtn = document.getElementById("chevronUpBtn");
var chevronDownBtn = document.getElementById("chevronDownBtn");
let playerScore = 0;
let computerScore = 0;
let resetBtnCount = 0;
let Rnds = 3;


chevronUpBtn.addEventListener("click", function() {
   resultDisplay.textContent = "";
   Rnds++;
   rndsNum.innerHTML = Rnds;
})

chevronDownBtn.addEventListener("click", function() {
   if (Rnds <= 3) {
      Rnds = 3;
      rndsNum.innerHTML = Rnds;
      resultDisplay.textContent = "3 rounds or more, please!";
   } else {
      Rnds--;
      rndsNum.innerHTML = Rnds;
   }
})

for (var i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", function() {
      let choice = this.id;
      compare(choice, computersChoice());
      resultDisplay.textContent = "";
      game();
   })
}

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
   var options = ['rock', 'paper', 'scissors'];
   var randomNum = Math.floor(Math.random() * 3);
   console.log(options[randomNum] + " *** " + randomNum);
   return options[randomNum];
}
