var txt = document.querySelector('#resultText');
var user_points = 0;
var computer_points = 0;
var winner = "";
for(var i=0; i<3; i++) {
  console.log(i);
}

// click events set to select rock paper scissors
  $('.rock').on('click', function() {
    var userChoice = new User('rock');
    $(this).addClass('clickedImg');
    $('clickedImg').siblings('ul').addClass('unclicked');
    $('clickedImg').siblings('ul').removeClass('clickedImg');
    console.log(userChoice);
    game(userChoice);
  });
  $('.paper').on('click', function() {
    var userChoice = new User('paper');
    $(this).addClass('clickedImg');
    $('clickedImg').siblings('ul').addClass('unclicked');
    $('clickedImg').siblings('ul').removeClass('clickedImg');
    console.log(userChoice);
    game(userChoice);
  });
  $('.scissors').on('click', function() {
    var userChoice = new User('scissors');
    $(this).addClass('clickedImg');
    $('clickedImg').siblings('ul').addClass('unclicked');
    $('clickedImg').siblings('ul').removeClass('clickedImg');
    console.log(userChoice);
    game(userChoice);

  });

// ____________User constructor___________________
function User(choice) {
  this.choice = choice;

}
// ____________Computer constructor___________________
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
// ____________compare function___________

function compare(user, comp){
    if(user.choice === comp.computerChoice) {
    console.log("The result is a tie!");
    winner = "";
    $( ".result" ).html( "The result is a tie!" );
    $(".result").css('color', 'black');
    }
    else if(user.choice === "rock") {
        if(comp.computerChoice === "scissors") {
            // console.log("Rock wins!");
            winner = "user";
            $( ".result" ).html( "Rock wins. You are a Winner!" );
            $(".result").css('color', 'green');
        }
        else {
            console.log("Paper wins, you lose!");
            winner = "computer";
            $( ".result" ).html( "Paper wins, you lose!" );
            $(".result").css('color', 'red');
        }
    }
    else if(user.choice === "paper") {
        if(comp.computerChoice === "rock") {
            console.log("paper wins!");
            winner = "user";
            $( ".result" ).html( "Paper wins. You are a Winner!" );
            $(".result").css('color', 'green');
        }
        else {
            console.log("scissors wins!");
            winner = "computer";
            $( ".result" ).html( "Scissors wins, the computer wins!" );
            $(".result").css('color', 'red');
        }
    }
    else if(user.choice === "scissors") {
        if(comp.computerChoice === "rock") {
            console.log("rock wins");
            winner = "computer";
            $( ".result" ).html( "Rock wins. You lose!" );
            $(".result").css('color', 'red');
              }
        else {
            console.log("scissors wins");
            winner = "user";
            $( ".result" ).html( "scissors wins. You are a Winner!" );
            $(".result").css('color', 'green');
        }
    }
    if (winner === "computer"){
      computer_points += 1;
    } else if (winner === "user"){
      user_points += 1;
    }
    else {winner = "";}
    $('.userScore').html("User Score: " + user_points);
    $('.compScore').html("Computer Score: " + computer_points);

}
// ________game function___________________
function game(userChoice) {
  var comp = new Computer();
  return compare(userChoice,comp);
}


// starts with the userChoice then creates a new computer choice then uses the compare function

// Do function game instead of calling these so that it only works in the console
// 1) var user = new User();
// will promp user to enter choice

// 2) user => will return what user picked
// var comp = new Computer();

// 3) var compare = new Compare(user, comp);
// comp => will return  random computer choice
