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
        } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
            console.log(winMessage);
            playerScore += 1;
        } else if (playerSelection == "Paper" && computerSelection == "Rock") {
            console.log(winMessage);
            playerScore += 1;
        } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            console.log(winMessage);
            playerScore += 1;
        } else if (playerSelection == "Rock" && computerSelection == "Paper") {
            console.log(loseMessage)
            computerScore += 1;
        } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
            console.log(loseMessage)
            computerScore += 1;
        } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
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
            const playerSelection = window.prompt("Choose your weapon");
            const computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        }

        winnerIs(playerScore, computerScore);
    }

    game()