var game = {
  players: [],
  addPlayer: function(name){
    var player = playerConstructor(name);
    game.players.push(player);
    console.log(game.players)
  }
};

function playerConstructor(name){
  player = {};
  player.name = name;
    player.hand = [];
  player.addCard = function(){
    var card = Math.floor(Math.random() * (152 - 1 + 1)) + 1;
    player.hand.push(card);
    console.log(player.hand)
  };
  return player;
};


// game.addPlayer('bob');
// game.players[0].addCard(getRandom());
// console.log(game.players[0].hand);
// game.addPlayer('jane');

// Write code that will add a new player to the game object's players property when a user chooses.
// Create functionality that sets each players' card property to a random Pokemon. Use the Pokemon API (http://pokeapi.co/api/v1/pokemon) to grab this data, taking advantage of jQuery's $.ajax method.
// Display the resulting cards in the browser.
// Add logic that compares the Pokemon cards that each player holds and declares a winner in a battle between them!