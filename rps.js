const rock = document.getElementById("Rock")
const paper = document.getElementById("Paper")
const scissors = document.getElementById("Scissors")
const buttons = document.querySelectorAll("button")

var myScore = document.getElementById("myScore")
var theirScore = document.getElementById("theirScore")
var playerScore = 0
var compScore = 0

function computerPlay() {
    const outcomes = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * outcomes.length);
    return outcomes[random]
}

function playRound(playerSelection, computerSelection) {
    let input = playerSelection.toLowerCase();
    if (input == "rock") {
        if (computerSelection == "Rock") {
            return "Tie. Rocks."
        } else if (computerSelection == "Paper") {
            compScore++
            return "You lose. Paper beats rock."
        } else if (computerSelection == "Scissors") {
            playerScore++
            return "You win! Rock beats Scissors!"
        }
    }
    else if (input == "paper") {
        if (computerSelection == "Paper") {
            return "Tie. Paper."
        } else if (computerSelection == "Scissors") {
            compScore++
            return "You lose. Scissors beats paper."
        } else if (computerSelection == "Rock") {
            playerScore++
            return "You win! Paper beats rock!"
        }
    }
    else if (input == "scissors") {
        if (computerSelection == "Scissors") {
            return "Tie. Scissors."
        } else if (computerSelection == "Rock") {
            compScore++
            return "You lose. Rock beats Scissors."
        } else if (computerSelection == "Paper") {
            playerScore++
            return "You win! Scissors beats paper!"
        }
    }
    else {
        return "Oops!"
    }
}

function playRock() {
    console.log("You have chosen rock.")
    computerSelection = computerPlay()
    console.log(playRound("Rock", computerPlay()))
    console.log(playerScore, compScore)
}

function playPaper() {
    console.log("You have chosen paper.")
    console.log(playRound("Paper", computerPlay()))
    console.log(playerScore, compScore)
}

function playScissors() {
    console.log("You have chosen scissors.")
    console.log(playRound("Scissors", computerPlay()))
    console.log(playerScore, compScore)
}

function update() {
    myScore.innerHTML = playerScore
    theirScore.innerHTML = compScore
    if (playerScore == 5) {
        console.log("You are a winner!")
    } else if (compScore == 5) {
        console.log("You have lost.")
    }
}

rock.addEventListener("click", playRock)
paper.addEventListener("click", playPaper)
scissors.addEventListener("click", playScissors)
buttons.forEach((button) => {
    button.addEventListener("click", update)
})
