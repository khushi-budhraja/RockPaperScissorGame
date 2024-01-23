// alert(`
// Rock defeats Scissor
// Scissor defeats Paper
// Paper defeats Rock`);

let scoreStr = localStorage.getItem('RockPaperScissorScore');
let score;
resetScore(scoreStr);

function resetScore(scoreStr){
    score = scoreStr ? JSON.parse(scoreStr) : { win:0, lost:0, tie:0,};
    score.displayScore = function(){
        return `Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}.`
    };
    displayResult();
}

function generateCompChoice(){
    let randomNumber = Math.random() * 3;
    if(randomNumber >=0 && randomNumber < 1){
       return 'Rock';
    }
    else if(randomNumber >= 1 && randomNumber < 2){
        return 'Paper';
    }
    else{
        return 'Scissor';
    }
}

function getResult(userChoice, compChoice){
    if(userChoice === 'Rock'){
        if(compChoice === 'Rock'){
            score.tie += 1;
            return `IT'S A TIE :|`;
        }
        else if(compChoice === 'Paper'){
            score.lost += 1;
            return 'COMPUTER WON!'
        }
        else if(compChoice === 'Scissor'){
            score.win += 1;
            return 'YOU WON!'
        }
    }
    else if(userChoice === 'Paper'){
        if(compChoice === 'Rock'){
            score.win += 1;
            return 'YOU WON!'
        }
        else if(compChoice === 'Paper'){
            score.tie += 1;
            return `IT'S A TIE :|`;
        }
        else if(compChoice === 'Scissor'){
            score.lost += 1;
            return 'COMPUTER WON!'
        }
    }
    else if(userChoice === 'Scissor'){
        if(compChoice === 'Rock'){
            score.lost += 1;
            return 'COMPUTER WON!'
        }
        else if(compChoice === 'Paper'){
            score.win += 1;
            return 'YOU WON!'
        }
        else if(compChoice === 'Scissor'){
            score.tie += 1;
            return `IT'S A TIE :|`;
        }
    }
}

function displayResult(userChoice, compChoice, res){
    localStorage.setItem('RockPaperScissorScore',JSON.stringify(score))

    document.querySelector('#user-move').innerText = userChoice ? `Your choice: ${userChoice}` : '';

    document.querySelector('#comp-move').innerText = compChoice ? `Computer choice: ${compChoice}` : '';

    document.querySelector('#result').innerText = res || '';

    document.querySelector('#score').innerText = `${score.displayScore()}`;
}