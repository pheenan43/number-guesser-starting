let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    target = Math.floor(Math.random() * 10);
    return target;
}

function compareGuesses(human, computer, target){
    if (human !== computer){
        answer = Math.abs(human - target) < Math.abs(computer - target) ? true : false;
        return answer;
    }
    else{
        return true;
    }    
}

function updateScore(winner){
    if (winner === 'human'){
        humanScore++;
    }else{
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}
