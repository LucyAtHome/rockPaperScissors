let computerChoice
let humanChoice
function getComputerChoice(){
  computerChoice = math.Random();
return computerChoice;
}

function getHumanChoice(){
  humanChoice = prompt("Type 'rock', 'paper', or 'scissors'")
return humanChoice
}


getHumanChoice()
getComputerChoice()

if (computerChoice == humanChoice) {
  console.log("DRAW!")
} else if (computerChoice =="rock" && humanChoice == "paper") {
  console.log("WIN!")
} else if (computerChoice == "paper" && humanChoice == "scissors") {
  console.log("WIN!")
} else if (computerChoice == "scissors" && humanChoice == "rock") {
  console.log("WIN!")
} else {
  console.log("LOSE!")
}
