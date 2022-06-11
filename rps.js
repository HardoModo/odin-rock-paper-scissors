const rock = document.getElementById("Rock")
const paper = document.getElementById("Paper")
const scissors = document.getElementById("Scissors")

function computerPlay() {
    const outcomes = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * outcomes.length);
    return outcomes[random]
}

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
    let playerScore = 0
    let compScore = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = "Rock" /*prompt("Please choose your weapon.")*/
        computerSelection = "Paper" /*computerPlay()*/
        console.log(playRound(playerSelection, computerSelection))
        if (playRound(playerSelection, computerSelection).includes("win")) {
            playerScore++
        } else if (playRound(playerSelection, computerSelection).includes("lose")) {
            compScore++
        }
    }
    console.log(compScore, playerScore)
}

/*game()*/

function fun1() {
    console.log("Rock")
}

function fun2() {
    console.log("Paper")
}

function fun3() {
    console.log("Scissors")
}

rock.addEventListener("click", fun1)
paper.addEventListener("click", fun2)
scissors.addEventListener("click", fun3)