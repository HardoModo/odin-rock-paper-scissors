let input = prompt("Please choose your weapon")

function computerPlay() {
    const outcomes = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * outcomes.length);
    return outcomes[random]
}

console.log(computerPlay())