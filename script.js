var compSelection = ['rock', 'paper', 'scissors'];
var userSelection = prompt('Please choose rock, paper, or scissors:').toLowerCase();
var userWin = 0;
var compWin = 0;

if (userSelection !== 'rock' && userSelection !== 'paper' && userSelection !== 'scissors') {
    alert('Please try again.');
}

function getComputerChoice(compSelection) {
    return compSelection[Math.floor(Math.random() * compSelection.length)];
}

console.log(getComputerChoice(compSelection)); //- Debug, computer guess working

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

var computerChoice = getComputerChoice(compSelection);
console.log(computerChoice); // Debug, computer guess working

winDecision(computerChoice, userSelection);

console.log('User Wins: ' + userWin);
console.log('Computer Wins: ' + compWin);