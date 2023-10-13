function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    if (getRandomInt(3) === 0) {
        return "rock";
    } else if (getRandomInt(3) === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let winMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
    let loseMessage = `You lose! ${computerSelection} beats ${playerSelection}.`;
    let tieMessage = `It's a tie! ${playerSelection} is the same as ${computerSelection}.`;

    if (computerSelection == undefined) {
        console.error("Undefined weapon");
    } else if (playerSelection == computerSelection) {
        console.log(tieMessage);
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log(winMessage);
        playerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log(winMessage);
        playerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log(winMessage);
        playerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log(loseMessage)
        computerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log(loseMessage)
        computerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log(loseMessage)
        computerScore += 1;
    }
    else {
        console.log(`Your weapon: ${playerSelection} and Computer weapon: ${computerSelection}`)
    }
}

function winnerIs() {
    if (playerScore > computerScore) {
        console.log("You won overall");
    } else if (playerScore < computerScore) {
        console.log("You lost overall!");
    } else {
        console.log("Maybe it was a tie or draw");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection;
        let validInput = false;

        while (!validInput) {
            playerSelection = window.prompt("Choose your weapon").toLowerCase();
            if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
                validInput = true;
            } else {
                alert("That is not a valid weapon");
            }
        }
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    winnerIs(playerScore, computerScore);
}

game();