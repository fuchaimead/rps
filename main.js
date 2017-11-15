var rps = ["rock", "paper", "scissors"]
var tally = {wins: 0, tie: 0, losses: 0, plays: 0}

var rockButton = document.getElementById("rock")
var paperButton = document.getElementById("paper")
var scissorsButton = document.getElementById("scissors")

rockButton.addEventListener("click", function() {
   pickWinner("rock");
});


paperButton.addEventListener("click", function() {
  pickWinner("paper")
});

scissorsButton.addEventListener("click", function() {
   pickWinner("scissors")
});

function pickWinner(playerChoice) {
var computerChoice = rps[Math.floor(Math.random()*rps.length)];

  switch(playerChoice) {
    case "rock":
      switch(computerChoice) {
        case "rock":
        tally.tie++
        document.getElementById("winner").innerHTML = "IT WAS A TIE!"
        break;
        case "paper":
        tally.losses++ 
        document.getElementById("winner").innerHTML = "YOU LOSE!"
        break;
        case "scissors":
        tally.wins++ 
  
        document.getElementById("winner").innerHTML = "YOU WIN!"
        break;
      }
      break;
    case "paper":
      switch(computerChoice) {
        case "rock":
        tally.win++
        document.getElementById("winner").innerHTML = "YOU WIN!"
        break;
        case "paper":
        tally.tie++ 
        document.getElementById("winner").innerHTML = "IT WAS A TIE!"
        break;
        case "scissors":
        tally.losses++
        document.getElementById("winner").innerHTML = "YOU LOSE!"
        break;
      }
      break;
    case "scissors":
      switch(computerChoice) {
        case "rock":
        tally.losses++
        document.getElementById("winner").innerHTML = "YOU LOSE!"
        break;
        case "paper":
        tally.wins++ 
        document.getElementById("winner").innerHTML = "YOU WIN!"
        break;
        case "scissors":
        tally.tie++
        document.getElementById("winner").innerHTML = "IT WAS A TIE!"
        break;
      }      
    default:
  }

document.getElementById("computer").innerHTML = "The computer chose: " + computerChoice  
document.getElementById("youlose").innerHTML = "You have lost " + tally.losses + " games."
document.getElementById("youwin").innerHTML = "You have won " + tally.wins + " games."
document.getElementById("tie").innerHTML = "You tied " + tally.tie + " games."


}





