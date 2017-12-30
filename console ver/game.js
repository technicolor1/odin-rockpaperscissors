var gameBtn = document.querySelector("#button");

gameBtn.addEventListener("click", function game() {
   let userScore = 0;
   let computerScore = 0;

   let userRounds = prompt("How many rounds?");
   if (userRounds == null) {
      console.error("Quitting game...");
      return;
   } else if (isNaN(userRounds)) {
      console.error("Must select numbers! Quitting game...");
      return;
   } else if (userRounds < 1) {
      console.error("Number too low!");
      return;
   }

   for (i = 0; i < userRounds; i++) {
      let userChoice = prompt("Rock paper or scissors?");
      if (userChoice == null) {
         console.error("Quitting game...");
         return;
      } else if (
         userChoice.toLowerCase() !== "rock" &&
         userChoice.toLowerCase() !== "paper" &&
         userChoice.toLowerCase() !== "scissors"
      ) {
         console.error("Invalid input! Quitting game...");
         return;
      }

      compare(userChoice);

      function compare(str) {
         let compChoice = computersChoice();
         let yourChoice = str.toLowerCase();

         if (compChoice == yourChoice) {
            console.log("It is a tie!");
         } else if (compChoice == "rock") {
            if (yourChoice == "paper") {
               console.log("Paper beats rock! You win!");
               userScore++;
            } else {
               console.log("Rock beats scissors! You lose!");
               computerScore++;
            }
         } else if (compChoice == "paper") {
            if (yourChoice == "rock") {
               console.log("Paper beats rock! You lose!");
               computerScore++;
            } else {
               console.log("Scissors beat paper! You win!");
               userScore++;
            }
         } else if (compChoice == "scissors") {
            if (yourChoice == "rock") {
               console.log("Rock beats paper! You win!");
               userScore++;
            } else {
               console.log("Scissors beat paper! You lose!");
               computerScore++;
            }
         }



         if (i == userRounds - 1 && (userScore > computerScore)) {
            console.log("Your score: " + userScore);
            console.log("Computer's score: " + computerScore);
            console.log("You're winner!");
            alert("You're winner!");
         } else if (i == userRounds - 1 && (computerScore > userScore)) {
            console.log("Your score: " + userScore);
            console.log("Computer's score: " + computerScore);
            console.log("You're loser! Better luck next time!");
            alert("You're loser! Better luck next time!");
         } else if (i == userRounds - 1 && (computerScore == userScore)) {
            console.log("Your score: " + userScore);
            console.log("Computer's score: " + computerScore);
            console.log("Wow, a tie!");
            alert("Wow, a tie!");
         }

      }
   }
});

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
