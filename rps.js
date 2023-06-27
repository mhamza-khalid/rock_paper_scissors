let comp_count = 0;
let player_count = 0;

const result1 = document.querySelector('.result');
const declare1 = document.querySelector('.declare');
const urScore = document.querySelector('.you');
const compScore = document.querySelector('.computer');

const rock1 = document.querySelector('.rock');
const paper1 = document.querySelector('.paper');
const scissors1 = document.querySelector('.scissors');

rock1.addEventListener('click', function (event) {
    result1.textContent = '';
    let computerChoice = getComputerChoice();
    playGame(computerChoice, "rock");
});

paper1.addEventListener('click', function (event) {
    result1.textContent = '';
    let computerChoice = getComputerChoice();
    playGame(computerChoice, "paper");
});

scissors1.addEventListener('click', function (event) {
    result1.textContent = '';
    let computerChoice = getComputerChoice();
    playGame(computerChoice, "scissors");
});

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(computer, human) {
    if (computer === "Paper" && human === "rock") {
        comp_count += 1;
        declare1.textContent = "You lose! Paper beats Rock!";
    } else if (computer === "Scissors" && human === "rock") {
        player_count += 1;
        declare1.textContent = "You win! Rock beats Scissors!";
    } else if (computer === "Scissors" && human === "paper") {
        comp_count += 1;
        declare1.textContent = "You lose! Scissors beats Paper!";
    } else if (computer === "Rock" && human === "paper") {
        player_count += 1;
        declare1.textContent = "You win! Paper beats Rock!";
    } else {
        declare1.textContent = "Game Tie!";
    }

    urScore.textContent = `You: ${player_count}`;
    compScore.textContent = `Computer: ${comp_count}`;

    checkWinningCondition();
}

function checkWinningCondition() {
    if (comp_count === 3 || player_count === 3) {
        if (comp_count > player_count) {
            result1.textContent = "Computer wins the best of 5 game!";
        } else if (player_count > comp_count) {
            result1.textContent = "You win the best of 5 game!";
        }

        // Reset the scores
        comp_count = 0;
        player_count = 0;
    }
}
