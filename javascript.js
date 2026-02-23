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

function getHumanChoice() {
    let humanInput = prompt("Type in Rock, Paper or Scissor", "")
    if (humanInput == null || humanInput == undefined){
        getHumanChoice()
    }
    let humanChoice = humanInput.slice(0, 1).toUpperCase() + humanInput.slice(1).toLowerCase();
    if (!(humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissor")) {
        getHumanChoice();
    } else {
        return humanChoice;
    }
}


function playGame(i){

    let humanScore = 0;
    let computerScore = 0;

    

    function playRound(computerChoice, humanChoice){
        
        if (computerChoice === humanChoice){
            console.log("You both chose the same, noone gets a point")
            return;
        } else if (computerChoice === "Rock" && humanChoice === "Scissor"){
            console.log("You lose! Rock beats Scissor")
            computerScore++;
            return;
        } else if (computerChoice === "Paper" && humanChoice === "Rock"){
            console.log("You lose! Paper wrap Rocks")
            computerScore++;
            return;
        } else if (computerChoice === "Scissor" && humanChoice === "Paper"){
            console.log("You lose! Scissors cuts Paper")
            computerScore++;
            return;
        } else {
            console.log(`You win! ${humanChoice} wins against ${computerChoice}`)
            humanScore++;
            return;
        }
    }
for (let j = 0; j <= i; j++){
    if (i == j){
        if (humanScore === computerScore){
            console.log(`Its a tie! You both have a score of ${humanScore}`);
            return;
        } else if(humanScore > computerScore){
            console.log(`You won the whole game! Score is ${humanScore}: ${computerScore}`);
            return;
        } else {
            console.log(`You lost the whole game! Score is ${humanScore}:${computerScore}`);
            return;
        }
                    
    } else {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection)
        }
    }
}
