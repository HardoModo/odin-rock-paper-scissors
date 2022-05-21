let playerSelection = "Paper" /*prompt("Please choose your weapon.")*/

function computerPlay() {
    const outcomes = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * outcomes.length);
    return outcomes[random]
}

const computerSelection = "Scissors" /*computerPlay()*/;

function gameTime(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            return "Tie. Rocks."
        } else if (computerSelection == "Paper") {
            return "You lose. Paper beats rock."
        } else if (computerSelection == "Scissors") {
            return "You win! Rock beats Scissors!"
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Paper") {
            return "Tie. Paper."
        } else if (computerSelection == "Scissors") {
            return "You lose. Scissors beats paper."
        } else if (computerSelection == "Rock") {
            return "You win! Paper beats rock!"
        }
    }

}

console.log(playerSelection, computerSelection, gameTime(playerSelection, computerSelection))