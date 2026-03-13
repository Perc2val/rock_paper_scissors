/*
Rock Paper Scissor Game
get computer choice
get Human Choice
build human score
build computer score
play round
compare computer choice with human choice
rock wins against scissor
paper against rock
scissor against paper
increment human or computer score
play game with calling play round 5 times
*/

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const resultScore = document.querySelector(".resultScore");
const resultMessage = document.querySelector(".resultMessage");


let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let computerChoice = "";
    let randomNumber = Math.random() * 3;
    if (randomNumber < 1){
        return computerChoice = "Rock"
    } else if (randomNumber < 2){
        return computerChoice = "Paper"
    } else {
        return computerChoice = "Scissor"
    }
}

function playRound(computerChoice, humanChoice){
        if (computerChoice === humanChoice){
            displayWinner.textContent = "You both chose the same, noone gets a point";
            return;
        } else if (computerChoice === "Rock" && humanChoice === "Scissor"){
            computerScore++;
            return;
        } else if (computerChoice === "Paper" && humanChoice === "Rock"){
            computerScore++;
            return;
        } else if (computerChoice === "Scissor" && humanChoice === "Paper"){
            computerScore++;
            return;
        } else {
            humanScore++;
            return;
        }
}
let displayHumanScore = document.createElement("p");
let displayComputerScore = document.createElement("p");
let displayWinner = document.createElement("p");

function checkWinner(){
    
    resultMessage.appendChild(displayWinner);
    if (humanScore === 5){
        displayWinner.textContent = "You won this first to five";
    } else if (computerScore === 5){
        displayWinner.textContent = "You lost this first to five";
    } return
}

function displayScore(){
    displayHumanScore.textContent = `Human Score ${humanScore}`;
    resultScore.appendChild(displayHumanScore);
    displayComputerScore.textContent = `Computer Score ${computerScore}`;
    resultScore.appendChild(displayComputerScore);
    checkWinner();
}

rock.addEventListener("click", ()=>  {
    const computerSelection = getComputerChoice()
    if (displayWinner.textContent == "" || displayWinner.textContent == "You both chose the same, noone gets a point"){
        displayWinner = "";
        playRound(computerSelection, "Rock");
        displayScore();
    } else {
        humanScore = 0;
        computerScore = 0;
        displayWinner.textContent = "";
        playRound(computerSelection, "Rock");
        displayScore();
    }
    
});

paper.addEventListener("click", ()=>  {
    const computerSelection = getComputerChoice()
    if (displayWinner.textContent == "" || displayWinner.textContent == "You both chose the same, noone gets a point"){
        displayWinner.textContent = "";
        playRound(computerSelection, "Paper");
        displayScore();
    } else {
        humanScore = 0;
        computerScore = 0;
        displayWinner.textContent = "";
        playRound(computerSelection, "Paper");
        displayScore();
    }
});

scissor.addEventListener("click", ()=>  {
    const computerSelection = getComputerChoice()
    if (displayWinner.textContent == "" || displayWinner.textContent == "You both chose the same, noone gets a point"){
        displayWinner.textContent = "";
        playRound(computerSelection, "Scissor");
        displayScore();
    } else {
        humanScore = 0;
        computerScore = 0;
        displayWinner.textContent = "";
        playRound(computerSelection, "Scissor");
        displayScore();
    }
});
