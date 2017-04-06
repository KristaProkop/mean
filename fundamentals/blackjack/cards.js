
/*--------------------------------------------------
---------------DECK---------------------------------------------------------------------------------*/


function DeckConstructor(){
    this.makeDeck();
    this.reset = function() {
        this.makeDeck();
    }
}

DeckConstructor.prototype.makeDeck = function() {
    var suits = ["hearts", "spades", "diamonds", "clubs"]
    var ranks = ["a", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"]

    function Card (rank, suit) {
        this.rank = rank;
        this.suit = suit;
    };

    this.deck = new Array(52);

    var i, j;
    for (i = 0; i < suits.length; i++) {
        for (j = 0; j < ranks.length; j++) {
            this.deck[i*ranks.length + j] = new Card(ranks[j], suits[i]);
        }
    }
    console.log(this)
    return this;
}

DeckConstructor.prototype.shuffle = function() {
    for (let i = this.deck.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [this.deck[i - 1], this.deck[j]] = [this.deck[j], this.deck[i - 1]];
    }
    console.log(this.deck);
    return this.deck;
}

DeckConstructor.prototype.dealCard = function() {
    var card;
    let i = Math.floor(Math.random() * (51 - 0)) + 0;
    card = this.deck[i];
    this.deck.splice(i, 1);
    console.log("Dealing card ", card);
    return card;
}


/*--------------------------------------------------
---------------PLAYER---------------------------------------------------------------------------------*/

function PlayerConstructor(name) {
    this.name = name;
    this.hand = [];
    this.dealHand();
}

PlayerConstructor.prototype.dealCard = function() {
    var card = deck.dealCard();
    this.hand.push(card);

    return this;
}

PlayerConstructor.prototype.dealHand = function() {
    for ( i=0; i < 2; i++ ) {
        this.dealCard();
    }
    return this;
}

PlayerConstructor.prototype.discardCard = function(card) {
    deck.deck.push(this.hand[card])
    this.hand.splice(card, 1)
    return this;
}

/*--------------------------------------------------
---------------HTML FUNCTIONS---------------------------------------------------------------------------------*/





// deck = new DeckConstructor();
// // player1 = new PlayerConstructor('bob');
// player2 = new PlayerConstructor('mary')
// console.log("Player2 hand: ", player2.hand);
// player2.discardCard(0);
// console.log("Player2 hand after discard: ", player2.hand);

// console.log("Player1 hand: ", player1.hand);
// player1.discardCard(0);
// console.log("Player1 hand after discard: ",player1.hand);
// console.log("Current deck ",deck.deck)




