var compSelection = ['rock', 'paper', 'scissors'];
var userWin = 0;
var compWin = 0;

// calls buttons from html 
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// event listeners for button presses
rock.addEventListener('click', () => winDecision(getComputerChoice(compSelection), 'rock'));
paper.addEventListener('click', () => winDecision(getComputerChoice(compSelection), 'paper'));
scissors.addEventListener('click', () => winDecision(getComputerChoice(compSelection), 'scissors'));

// random select for computer choice
function getComputerChoice(compSelection) {
    return compSelection[Math.floor(Math.random() * compSelection.length)];
}

// decides who won/ties
function winDecision(compSelection, userSelection) {
    if (userSelection == 'rock' && compSelection == 'paper') {
        alert('You lose! Computer chose paper!');
        compWin++;
    } else if (userSelection == 'rock' && compSelection == 'scissors') {
        alert('You win! Computer chose scissors!');
        userWin++;
    } else if (userSelection == 'paper' && compSelection == 'rock') {
        alert('You win! Computer chose rock!');
        userWin++;
    } else if (userSelection == 'paper' && compSelection == 'scissors') {
        alert('You lose! Computer chose scissors!');
        compWin++;
    } else if (userSelection == 'scissors' && compSelection == 'rock') {
        alert('You lose! Computer chose rock!');
        compWin++;
    } else if (userSelection == 'scissors' && compSelection == 'paper') {
        alert('You win! Computer chose paper!');
        userWin++;
    } else {
        alert('It\'s a tie!');
    }
}

