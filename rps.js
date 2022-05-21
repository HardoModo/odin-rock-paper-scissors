let playerSelection =  prompt("Please choose your weapon.")

function computerSelection() {
    const outcomes = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * outcomes.length);
    return outcomes[random]
}

function gameTime(playerSelection, computerSelection) {
    /*if (playerSelection = computerSelection) {
        return "Tie."
    }*/
    if (playerSelection = "Rock") {
        if (computerSelection = "Scissors") {
            return "You win! Rock beats scissors!"
        } else {
                return "You lose. Paper beats rock."
            }
        }
    
    else if (playerSelection = "Paper") {
        if (computerSelection = "Rock") {
            return "You win! Paper beats rock!"
        } else {
                return "You lose. Scissor beats paper."
            }
        }

    else if (playerSelection = "Scissors") {
        if (computerSelection = "Paper") {
            return "You win! Scissors beats paper!"
        } else {
                return "You lose. Rock beats paper."
            }
        }
    }

console.log(gameTime())