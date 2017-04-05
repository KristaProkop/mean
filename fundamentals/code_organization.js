/* **************** Game Constructor ******************
private vars: consumerPrice, dealerCost
private methods: myPrivateFunction: just console.logs, no logic
public properties:  _name: acquired from parameters
                    type: constant, 'board game'
                    player: array


public methods:     addPlayer: adds a player by name to player array
                    showPrivateVariables: console.logs our private variables
on run: runs myPrivateFunction
returns: ourGame object.
*****************  END *******************/


function GameConstructor(consumerPrice,dealerCost,name, inStock){


  var consumerPrice = consumerPrice;
  var dealerCost = dealerCost;

  this._name = name;
  this.type = 'board game';
  this.player = [];


  this.addPlayer = function(player_name){
    this.player.push(player_name);
  }
  this.showPrivateVariables = function(){
    console.log(dealerCost);
    console.log(consumerPrice);
  }


  function myPrivateFunction(){
    console.log('hello, I am going to create a new object when I am returned!');
  }


  myPrivateFunction();
}

game = new GameConstructor(60, 20, 'MMPORG', true)