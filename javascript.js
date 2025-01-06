let computerChoice
let humanChoice
function getComputerChoice(){
  num = Math.random();

  if (num <= .3334){
    computerChoice = "rock"
  } else if (num <= .6667){
    computerChoice = "scissors"
  } else {
    computerChoice = "paper"
  }

  return computerChoice;
}



function getHumanChoice(){
  humanChoice = prompt("Type 'rock', 'paper', or 'scissors'")
	if (humanChoice === "rock" || humanChoice === "paper" || humanChoice == "scissors"){
	  return;
	}else{ 
	  alert("Thats not valid input!");
	  getHumanChoice();
	}
	return humanChoice;
}


getHumanChoice()

console.log("You chose " + humanChoice)

console.log("The computer chose " + getComputerChoice())

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
