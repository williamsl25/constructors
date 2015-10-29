// ____________User constructor___________________

function User() {
  var userChoice = prompt("Do you choose rock, paper or scissors?");
  this.choice = userChoice;
}

// ___________Computer constructor_____________________
// have comuter choose a random number 0-1
function Computer() {
  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    this.computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
    this.computerChoice = "paper";
  } else {
    this.computerChoice = "scissors";
  }
}

function Compare(user, comp){
    if(user.choice === comp.computerChoice) {
    console.log("The result is a tie!");
    }
    else if(user.choice === "rock") {
        if(comp.computerChoice === "scissors") {
            console.log("Rock wins!");
        }
        else {
            console.log("Paper wins!");
        }
    }
    else if(user.choice === "paper") {
        if(comp.computerChoice === "rock") {
            console.log("paper wins!");
        }
        else {
            console.log("scissors wins!");
        }
    }
    else if(user.choice === "scissors") {
        if(comp.computerChoice === "rock") {
            console.log("rock wins");
              }
        else {
            console.log("scissors wins");
        }
    }

}

var user = new User();
// will promp user to enter choice
// user => will return what user picked
var comp = new Computer();
var compare = new Compare(user, comp);
// comp => will return  random computer choice
