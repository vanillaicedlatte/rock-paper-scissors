function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getComputerChoice() {
    if (getRandomInt(3) === 0) {
        return "Rock";
    } else if (getRandomInt(3) === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
    }

  function playRound(playerSelection, computerSelection) {
    if (computerSelection == undefined) {
        console.error("Undefined again");
    } else if (playerSelection == computerSelection) {
        console.log(`Tie! ${playerSelection} and ${computerSelection} are the same.`);
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("You win! Rock beats scissors.");
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("You win! Paper beats rock.");
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("You win! Scissors beats paper.");
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("You lose! Paper beats rock.")
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("You lose! Scissors beats paper.")
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("You lose! Rock beats paper.")
    }
      else {
            console.log(`Your weapon: ${playerSelection} and Computer weapon: ${computerSelection}`)
      }
    }

const playerSelection = window.prompt("Choose your weapon");
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);