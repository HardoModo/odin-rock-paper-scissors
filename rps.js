const rock = document.getElementById("Rock")
const paper = document.getElementById("Paper")
const scissors = document.getElementById("Scissors")
const buttons = document.querySelectorAll("button")

var myScore = document.getElementById("myScore")
var theirScore = document.getElementById("theirScore")
var chose = document.getElementById("text1")
var shout = document.getElementById("text2")
var winner = document.getElementById("declareWinner")
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
    chose.innerHTML = "You have chosen rock."
    newStatus = playRound("Rock", computerPlay())
}

function playPaper() {
    chose.innerHTML = "You have chosen paper."
    newStatus = playRound("Paper", computerPlay())
}

function playScissors() {
    chose.innerHTML = "You have chosen scissors."
    newStatus = playRound("Scissors", computerPlay())
}

function newGame() {
    console.log("Start new game")
}

function update() {
    myScore.innerHTML = playerScore
    theirScore.innerHTML = compScore
    shout.innerHTML = newStatus
    if (playerScore == 5) {
        winner.innerHTML = "You are a winner!"
        newGame()
    } else if (compScore == 5) {
        winner.innerHTML = "You have lost."
        newGame()
    }
}

rock.addEventListener("click", playRock)
paper.addEventListener("click", playPaper)
scissors.addEventListener("click", playScissors)
buttons.forEach((button) => {
    button.addEventListener("click", update)
})