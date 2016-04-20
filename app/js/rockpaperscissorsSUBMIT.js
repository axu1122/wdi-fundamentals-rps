////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
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
var getPlayermove = function() {
	var playMove = ((Math.random()*10)%3);
	if(0 <= playMove && playMove <= 1) {
		return 'rock';
	} else if(1 < playMove && playMove <= 2) {
		return 'paper';
	} else if(2 < playMove && playMove <= 3) {
		return 'scissors';
	} else if(playMove === null) {
		return 'rock';
	}
}
 
var getComputermove = function() {
	var compMove = ((Math.random()*10)%3);
	if(0 <= compMove && compMove <= 1) {
		return 'rock';
	} else if(1 < compMove && compMove <= 2) {
		return 'paper';
	} else if(2 < compMove && compMove <= 3) {
		return 'scissors';
	} else if(compMove === null) {
		return 'rock';
	}
}
 
var getWinner = function(playerMove, computerMove) {
	console.log(playerMove, computerMove);
	if (playerMove == computerMove) {
	console.log('TIE');
		return 'tie';
	}
	switch (playerMove) {
	case 'rock' :
		if (computerMove == 'paper') {
		console.log ("Computer wins this round.");
			return 'computer';
		}
		if (computerMove == 'scissors') {
		console.log ("Player wins this round.");
			return 'player';
		}
		break;
	case 'paper' :
		if (computerMove == 'scissors') {
		console.log ("Computer wins this round.");
			return 'computer';
		}
		if (computerMove == 'rock') {
		console.log ("Player wins this round.");
			return 'player';
		}
		break;
	case 'scissors' :
		if (computerMove == 'rock') {
		console.log ("Computer wins this round.");
			return 'computer';
		}
		if (computerMove == 'paper') {
		console.log ("Player wins this round.");
			return 'player';
		}
		break;
	default:
	console.log('Weird.. this number should\'t even exist');
	}
};
 
var playToFive = function() {
var playerWins = 0;
var computerWins = 0;
	while(playerWins < 5 && computerWins < 5) {
	var playerMove = getPlayermove(); 
	var computerMove = getComputermove(); 
		console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
	
	var winner = getWinner(playerMove, computerMove); 
		if(winner == 'player') { 
		playerWins += 1;
		}
		if(winner == 'computer') { 
		computerWins += 1;
		}
		if(winner == 'tie') {
		} console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
	} console.log('RESULTS - ' + 'Player: ' + playerWins + ' Computer: ' + computerWins);
}
 
playToFive()

