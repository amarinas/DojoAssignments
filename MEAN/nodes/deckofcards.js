/**
 * Created by amarinas on 3/7/17.
 */
function Deck(){
this.makeDeck();

}

Deck.prototype.makeDeck = function(){
    var suits=['Diamonds', 'Clubs', 'Hearts', 'Spades'],
        values=["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"],
    self = this;


    this.cards = [];
    suits.forEach(function(suit){
        values.forEach(function(value){
            self.cards.push(new Card(value, suit));
        });
    });
    return this;
}

Deck.prototype.reset = function(){
    this.buildDeck().shuffle();
}

Deck.prototype.dealRandomCard = function(){
    return (this.cards.length > 0) ? this.cards.pop() : null;
}

Deck.prototype.shuffle = function(){
    var standardDeck = this.cards.length,
        cardShuffle,
        temp;

    while (standardDeck > 0){
        cardShuffle = Math.floor(Math.random() * standardDeck);
        standardDeck -= 1;
        temp = this.cards[cardShuffle]
        this.cards[cardShuffle] = this.cards[standardDeck]
        this.cards[standardDeck] = temp;

    }
    return this;
}

function Card(value, suits) {
    this.value = value;
    this.suits = suits;
}

function Player(name){
    this.name = name
    this.hand = [];
}

Player.prototype.takeCard= function(deck){
    this.hand.push(deck.dealRandomCard());
    return this;
}

Player.prototype.discard = function(card){
    if (this.hand.length > card){
        this.hand.splice(card, 1);
    }
    return this;
}


