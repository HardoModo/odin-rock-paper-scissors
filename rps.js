function computerPlay() {
    const outcomes = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * outcomes.length);
    return outcomes[random]
}

/*const computerSelection = "Rock" computerPlay()*/;

function playRound(playerSelection, computerSelection) {
    let test = playerSelection.toLowerCase();
    if (test == "rock") {
        if (computerSelection == "Rock") {
            return "Tie. Rocks."
        } else if (computerSelection == "Paper") {
            return "You lose. Paper beats rock."
        } else if (computerSelection == "Scissors") {
            return "You win! Rock beats Scissors!"
        }
    }
    else if (test == "paper") {
        if (computerSelection == "Paper") {
            return "Tie. Paper."
        } else if (computerSelection == "Scissors") {
            return "You lose. Scissors beats paper."
        } else if (computerSelection == "Rock") {
            return "You win! Paper beats rock!"
        }
    }
    else if (test == "scissors") {
        if (computerSelection == "Scissors") {
            return "Tie. Scissors."
        } else if (computerSelection == "Rock") {
            return "You lose. Rock beats Scissors."
        } else if (computerSelection == "Paper") {
            return "You win! Scissors beats paper!"
        }
    }
    else {
        return "Oops!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please choose your weapon.")
        computerSelection = "Rock"
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()