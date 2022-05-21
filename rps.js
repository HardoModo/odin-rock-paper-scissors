let playerSelection = prompt("Please choose your weapon.")

function computerSelection() {
    const outcomes = [/*"Rock", "Paper",*/ "Scissors"];

    const random = Math.floor(Math.random() * outcomes.length);
    return outcomes[random]
}

function gameTime(playerSelection, computerSelection) {
    if (playerSelection = computerSelection) {
        console.log("Tie")
    }
        
}

console.log()