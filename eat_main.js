
// character constructor

function Character(options) {
  var options = options || {};
  this.name = options.name || "person";
  this.eat = function (candy,amount) {
    var munch = Math.floor(Math.random() * 2);
    console.log("yum! yum!");
    candy.consumed(munch,amount);
  };
}

//candy constructor

function Candy() {
    this.pieces = 0;
    this.consumed = function(munch,amount) {
      if(this.pieces <= 15) {
      this.pieces = this.pieces + amount;
      console.log("keep munching!");
    } else if (this.pieces === 30) {
      console.log("Perfect amount! You are satisfied");
      } else {
      console.log("Too much candy, you're sick!");
      }
  };
}
var lindsay = new Character({ name: "Lindsay"});
var oreo = new Candy();
lindsay.eat(oreo,10);
