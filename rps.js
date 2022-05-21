let playerSelection = "Rock" /*prompt("Please choose your weapon.")*/

function computerPlay() {
    const outcomes = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * outcomes.length);
    return outcomes[random]
}

const computerSelection = "Rock" /*computerPlay()*/;

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

}

console.log(playerSelection, computerSelection, gameTime(playerSelection, computerSelection))
/*console.log(playerSelection == computerSelection)*/