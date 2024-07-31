let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let playerScoreBoard = document.querySelector("#playerScore");
let computerScoreBoard = document.querySelector("#computerScore");

let display = document.querySelector(".display");

let playerSelected = 0;
let computerSelected = 0;

let playerScore = 0;
let computerScore = 0;

playerScoreBoard.innerText = playerScore;
computerScoreBoard.innerText = computerScore;

let Stone = 1;
let Paper = 2;
let Scissors = 3;

stone.addEventListener("click", () => {
    playerSelected = Stone;
    computerSelected = Math.floor(Math.random() * 3) + 1;
    checkResult(playerSelected, computerSelected);
})
paper.addEventListener("click", () => {
    playerSelected = Paper;
    computerSelected = Math.floor(Math.random() * 3) + 1;
    checkResult(playerSelected, computerSelected);
})
scissors.addEventListener("click", () => {
    playerSelected = Scissors;
    computerSelected = Math.floor(Math.random() * 3) + 1;
    checkResult(playerSelected, computerSelected);
})


function checkResult(playerSelected, computerSelected) {
    if (playerSelected === Stone && computerSelected === Stone) {
        display.innerHTML = "Draw! Computer Selected Stone.";
        display.style.backgroundColor = "yellow";
        updateScoreBoard();
    }
    if (playerSelected === Stone && computerSelected === Paper) {
        display.innerHTML = "You lose! Computer Selected Paper.";
        display.style.backgroundColor = "red";
        computerScore++;
        updateScoreBoard();
    }
    if (playerSelected === Stone && computerSelected === Scissors) {
        display.innerHTML = "You Win! Computer Selected Scissors.";
        display.style.backgroundColor = "green";
        playerScore++;
        updateScoreBoard();
    }
    if (playerSelected === Paper && computerSelected === Stone) {
        display.innerHTML = "You Win! Computer Selected Stone.";
        display.style.backgroundColor = "green";
        playerScore++;
        updateScoreBoard();
    }
    if (playerSelected === Paper && computerSelected === Paper) {
        display.innerHTML = "Draw! Computer Selected Paper.";
        display.style.backgroundColor = "yellow";
        updateScoreBoard();
    }
    if (playerSelected === Paper && computerSelected === Scissors) {
        display.innerHTML = "You lose! Computer Selected Scissors.";
        display.style.backgroundColor = "red";
        computerScore++;
        updateScoreBoard();
    }
    if (playerSelected === Scissors && computerSelected === Stone) {
        display.innerHTML = "You lose! Computer Selected Stone.";
        display.style.backgroundColor = "red";
        computerScore++;
        updateScoreBoard();
    }
    if (playerSelected === Scissors && computerSelected === Paper) {
        display.innerHTML = "You Win! Computer Selected Paper.";
        display.style.backgroundColor = "green";
        playerScore++;
        updateScoreBoard();
    }
    if (playerSelected === Scissors && computerSelected === Scissors) {
        display.innerHTML = "Draw! Computer Selected Scissors.";
        display.style.backgroundColor = "yellow";
        updateScoreBoard();
    }
}

function updateScoreBoard() {
    playerScoreBoard.innerText = playerScore;
    computerScoreBoard.innerText = computerScore;
}

let resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {
    playerSelected = 0;
    computerSelected = 0;
    playerScore = 0;
    computerScore = 0;
    updateScoreBoard();
    display.innerHTML = "select a option";
    display.style.backgroundColor = "whitesmoke";
})