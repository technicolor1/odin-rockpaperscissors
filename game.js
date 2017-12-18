// TODO: User can select custom amount of rounds

function game() {
      let userScore = 0;
      let computerScore = 0;
      for (i = 0; i < 6; i++) {
          let userChoice = prompt("Rock paper or scissors?");
          if (userChoice == null) {
            console.error("Quitting game...");
            return;
          }
          else if (
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



              if (i == 5 && (userScore > computerScore)) {
                console.log("Your score: " +userScore);
                console.log("Computer's score: " +computerScore);
                console.log("You're winner!");
                alert("You're winner!");
              }
              else if (i == 5 && (computerScore > userScore)) {
                console.log("Your score: " +userScore);
                console.log("Computer's score: " +computerScore);
                console.log("You're loser! Better luck next time!");
                alert("You're loser! Better luck next time!");
              }
              else if (i == 5 && (computerScore == userScore)){
                console.log("Your score: " +userScore);
                console.log("Computer's score: " +computerScore);
                console.log("Wow, a tie!");
                alert("Wow, a tie!");
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
