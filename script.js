
const items = ["rock", "paper", "scissors"];
var computerScore = 0;
var playerScore = 0;


function requestInput() {
    let request =  prompt("Please type in 'Rock', 'Paper' or 'Scissors'");
    playerSelection = request.toLowerCase(); 
    console.log("You picked " + playerSelection);
    return playerSelection;
}
var playerRequest = requestInput();


function randomItem(items) {
    return items[Math.floor(Math.random()*items.length)];
}
var computerSelection = randomItem(items);
console.log("Computer picked " + computerSelection);


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats Scissors!"; 
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beat Paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        computerScore++;
        return "You win! Scissors beat Paper!"; 
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors!";
    }
}

roundResult = playRound(playerSelection, computerSelection);
console.log (roundResult);

function game() {
    requestInput();
    randomItem(items);
    playRound(playerSelection, computerSelection);
}
 game()
