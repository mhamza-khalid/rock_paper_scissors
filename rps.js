let comp_count = 0;
let player_count = 0;

let count = 0;

const result1 = document.querySelector('.result');
const declare1 = document.querySelector('.declare');


const urScore = document.querySelector('.you');
const compScore = document.querySelector('.computer');

const rock1 = document.querySelector('.rock');
const paper1 = document.querySelector('.paper');
const scissors1 = document.querySelector('.scissors');






rock1.addEventListener('click', function (event) {
    if (event.button === 0) {
        count = count + 1;
        let computerChoice = getComputerChoice(); //genrates computers choice
        while (count == 5){
            if (comp_count > player_count){
                result1.textContent = "Computer wins the best of 5 game!";
                comp_count = 0;
                player_count = 0;
                count = 0 ;
            }
            else if (count <=5){
                result1.textContent = "You win the best of 5 game!";
                comp_count = 0;
                player_count = 0;
                count = 0 ;
            }
        }
        function getComputerChoice() {
            let string1 = "Rock";
            let string2 = "Paper";
            let string3 = "Scissors";

            let x = Math.floor(Math.random() * 3)

            if (x === 0) {
                return string1;
            }
            else if (x === 1) {
                return string2;
            }
            else {
                return string3;
            }
        }
        playGame(computerChoice, "rock");

        function playGame(computer, human) {

            if (computer == "Paper" && human == "rock") {
                comp_count = comp_count + 1;
                declare1.textContent = "You lose! Paper Beats Rock!";
                urScore.textContent = `You : ${player_count}`;
                compScore.textContent = `Computer : ${comp_count}`;
            }
            else if (computer == "Scissors" && human == "rock") {
                player_count = player_count + 1;
                declare1.textContent= "You win! Rock Beats Scissors!";
                urScore.textContent = `You : ${player_count}`;
                compScore.textContent = `Computer : ${comp_count}`;

            }
            else {
                declare1.textContent = "Game Tie!";
                urScore.textContent = `You : ${player_count}`;
                compScore.textContent = `Computer : ${comp_count}`;
            }

            while (compScore == 5){
                result1.textContent = "Computer wins the best of 5 game!";
                comp_count = 0;
                player_count = 0;
            }
        }
    }
});

paper1.addEventListener('click', function (event) {
    if (event.button === 0) {
        count = count + 1;
        let computerChoice = getComputerChoice(); //genrates computers choice
        while (count ==5){
            if (comp_count > player_count){
                result1.textContent = "Computer wins the best of 5 game!";
                comp_count = 0;
                player_count = 0;
                count = 0 ;
            }
            else if (count <=5){
                result1.textContent = "You win the best of 5 game!";
                comp_count = 0;
                player_count = 0;
                count = 0 ;
            }
        }
        function getComputerChoice() {
            let string1 = "Rock";
            let string2 = "Paper";
            let string3 = "Scissors";

            let x = Math.floor(Math.random() * 3)

            if (x === 0) {
                return string1;
            }
            else if (x === 1) {
                return string2;
            }
            else {
                return string3;
            }
        }
        playGame(computerChoice, "paper");

        function playGame(computer, human) {

            if (computer == "Scissors" && human == "paper") {
                comp_count = comp_count + 1;
                declare1.textContent = "You lose! Scissors Beats Paper !";
                urScore.textContent = `You : ${player_count}`;
                compScore.textContent = `Computer : ${comp_count}`;
            }
            else if (computer == "Rock" && human == "paper") {
                player_count = player_count + 1;
                declare1.textContent= "You win! Paper Beats Rock!";
                urScore.textContent = `You : ${player_count}`;
                compScore.textContent = `Computer : ${comp_count}`;

            }
            else {
                declare1.textContent = "Game Tie!";
                urScore.textContent = `You : ${player_count}`;
                compScore.textContent = `Computer : ${comp_count}`;
            }
        }
    }
});


scissors1.addEventListener('click', function (event) {
    if (event.button === 0) {
        console.log("Hello");
        count = count + 1;
        let computerChoice = getComputerChoice(); //genrates computers choice
        while (count == 5){
            if (comp_count > player_count){
                result1.textContent = "Computer wins the best of 5 game!";
                comp_count = 0;
                player_count = 0;
                count = 0 ;
            }
            else if (count <=5){
                result1.textContent = "You win the best of 5 game!";
                comp_count = 0;
                player_count = 0;
                count = 0 ;
            }
        }
        function getComputerChoice() {
            let string1 = "Rock";
            let string2 = "Paper";
            let string3 = "Scissors";

            let x = Math.floor(Math.random() * 3)

            if (x === 0) {
                return string1;
            }
            else if (x === 1) {
                return string2;
            }if (comp_count == 5){
                result1.textContent = "Computer wins the best of 5 game!"
                comp_count = 0;
                player_count = 0;
            }
            
            if (player_count == 5){
                result1.textContent = "You win the best of 5 game!"
                comp_count = 0;
                player_count = 0;
            }
            else {
                return string3;
            }
        }
        playGame(computerChoice, "scissors");

        function playGame(computer, human) {

            if (computer == "Rock" && human == "scissors") {
                comp_count = comp_count + 1;
                declare1.textContent = "You lose! Rock Beats Scissors!";
                urScore.textContent = `You : ${player_count}`;
                compScore.textContent = `Computer : ${comp_count}`;
            }
            else if (computer == "Paper" && human == "Scissors") {
                player_count = player_count + 1;
                declare1.textContent= "You win! Scissors Beats Paper!";
                urScore.textContent = `You : ${player_count}`;
                compScore.textContent = `Computer : ${comp_count}`;

            }
            else {
                declare1.textContent = "Game Tie!";
                urScore.textContent = `You : ${player_count}`;
                compScore.textContent = `Computer : ${comp_count}`;
            }
        }
    }
});

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

