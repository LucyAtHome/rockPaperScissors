
//Buttons should never be changing, but over the rounds playerChoice, computerChoice, and resultDisplay will change.
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
let playerChoice = document.getElementById('playerChoice');
let computerChoice = document.getElementById('computerChoice');
let resultDisplay = document.getElementById('result');

// Add event listeners to each button
rockButton.addEventListener('click', () => {
  fetchPlayerChoice('rock');
});
paperButton.addEventListener('click', () => {
  fetchPlayerChoice('paper');
});
scissorsButton.addEventListener('click', () => {
  fetchPlayerChoice('scissors');
});

//get the player choice and computer choice. display the results of the round.
function fetchPlayerChoice(choice){
  playerChoice.textContent = `Your choice: ${choice}`;
  computerChoice = getComputerChoice();
  computerChoice.textContent = `Computer's choice: ${computerChoice}`;Choice = choice
  const result = determineWinner(choice, computerChoice);
  resultDisplay.textContent = `Result: ${result}`;
}
//some adjustments made, inspired by Reds implementation
function getComputerChoice(){
  num = Math.floor(Math.random()*3);

  if (num <= 0){
    computerChoice = "rock"
  } else if (num <= 1){
    computerChoice = "scissors"
  } else {
    computerChoice = "paper"
  }

  return computerChoice;
}


// Function to determine the winner
function determineWinner(player, computer) {
  if (player === computer) {
    return 'It\'s a tie!';
  }

  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'You win!';
  }

  return 'You lose!';
}
