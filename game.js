function game() {
      let userScore = 0;
      let computerScore = 0;
      // TODO: User select custom rounds
      for (i = 0; i < 10; i++) {
          let userChoice = prompt("Rock paper or scissors?");
          // Invalid statements for prompt.
          // if (userChoice == null) {
          //   return console.log("Game Cancelled! Quitting game...");
          // } else if (isNaN(userChoice) == false) {
          //   return console.log("Invalid input! Quitting game...");
          // }
          // TODO: Check if user selected either of three, otherwise return 1.

          compare(userChoice);

          function compare(str) {
          let compChoice = computersChoice();
          let yourChoice = str.toLowerCase();

              if (compChoice == yourChoice) {
                console.log("It is a tie!");
              }

              else if (compChoice == "rock") {
                if (yourChoice == "paper") {
                  console.log("Paper beats rock! You win!");
                  userScore++;
                }
                else {
                  console.log("Rock beats scissors! You lose!");
                  computerScore++;
                }
              }

              else if (compChoice == "paper") {
                if (yourChoice == "rock") {
                  console.log("Paper beats rock! You lose!");
                  computerScore++;
                }
                else {
                  console.log("Scissors beat paper! You win!");
                  userScore++;
                }
              }

              else if (compChoice == "scissors") {
                if (yourChoice == "rock") {
                  console.log("Rock beats paper! You win!");
                  userScore++;
                }
                else {
                  console.log("Scissors beat paper! You lose!");
                  computerScore++;
                }
              }



              if (i == 9 && (userScore > computerScore)) {
                console.log("Your score: " +userScore);
                console.log("Computer's score: " +computerScore);
                console.log("You're winner!");
              }
              else if (i == 9 && (computerScore > userScore)) {
                console.log("Your score: " +userScore);
                console.log("Computer's score: " +computerScore);
                console.log("You're loser! Better luck next time!");
              }
              else if (i == 9 && (computerScore == userScore)){
                console.log("Your score: " +userScore);
                console.log("Computer's score: " +computerScore);
                console.log("Wow, a tie!");
              }

            }
        }
    }

function computersChoice() {
  let computersChoice = Math.random();

  if (computersChoice <= 0.34) {
    return "rock";
  }
  else if (computersChoice <= 0.67) {
    return "paper";
  }
  else {
    return "scissors";
  }
}
