/////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
/////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
} 

function getWinner(playerMove,computerMove) {
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    var winner;
    
    if ((playerMove === "rock" && computerMove === "rock")
       || (playerMove === "paper" && computerMove === "paper")
       || (playerMove === "scissors" && computerMove === "scissors")) {
            winner = "tie";
    } else if ((playerMove === "rock" && computerMove === "scissors")
            || (playerMove === "paper" && computerMove ==="rock")
            || (playerMove === "scissors" && computerMove === "paper")) {
            winner = "player";
    } else if ((playerMove === "rock" && computerMove === "paper")
            || (playerMove === "paper" && computerMove === "scissors")
            || (playerMove === "scissors" && computerMove === "rock")) {
            winner = "computer";
    } 
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    
    var playerWins = 0;
    var computerWins = 0;
    var result;
    
    while (playerWins < 5 && computerWins < 5) {
     result = getWinner(getPlayerMove(), getComputerMove());

    if (result === "player"){
        playerWins++;
        }
    else if (result === "computer") {
        computerWins++;
    }
    else if (result === "tie") {
        console.log("TIE!");
    }
        console.log("The score is currently " + playerWins + " to " + computerWins + ".");
    }
}