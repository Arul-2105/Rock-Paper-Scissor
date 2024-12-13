let userScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", function() {
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");

    rockButton.addEventListener("click", function() {
        playRound("rock");
    });

    paperButton.addEventListener("click", function() {
        playRound("paper");
    });

    scissorsButton.addEventListener("click", function() {
        playRound("scissors");
    });
});

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    updateScore(result);
    displayResult(userChoice, computerChoice, result);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "tie";
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||
               (userChoice === "paper" && computerChoice === "rock") ||
               (userChoice === "scissors" && computerChoice === "paper")) {
        return "win";
    } else {
        return "lose";
    }
}

function updateScore(result) {
    if (result === "win") {
        userScore++;
    } else if (result === "lose") {
        computerScore++;
    }
    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function displayResult(userChoice, computerChoice, result) {
    let resultText;
    if (result === "win") {
        resultText = "You win! " + userChoice.charAt(0).toUpperCase() + userChoice.slice(1) + " beats " + computerChoice;
    } else if (result === "lose") {
        resultText = "You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + userChoice;
    } else {
        resultText = "It's a tie!";
    }
    document.getElementById("playerChoice").textContent = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    document.getElementById("botChoice").textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    document.getElementById("result").textContent = resultText;
}