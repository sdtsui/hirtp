function Card(suit, rank) {
	this.prototype = Object.create(Card.prototype);
	this.suit = suit;
	this.rank = rank;
	this.face_card = (rank > 10) ? true : false ;
	this.valueOf = function(){
		return this.rank;
	};
}

Card.HEARTS= 'Hearts';
Card.SPADES= 'Spades';
Card.CLUBS= 'Clubs';
Card.DIAMONDS= 'Diamonds';

Card.prototype = {
	toString: function() {
		var rankString;
		if (this.rank === 1){
			rankString = "Ace"
		} else if ( this.face_card ){
			rankString = this.prototype.facecards[this.rank];
		} else {
			rankString = this.rank;
		}
		return rankString + " of " + this.suit;
	},
	facecards: {
		11: "Jack",
		12: "Queen",
		13: "King"
	}
};

function Deck() {
	this.prototype = Object.create(Deck.prototype);
	this.cards = [];
	var suits = [Card.SPADES, Card.HEARTS, Card.CLUBS, Card.DIAMONDS]
	for (var i = 0; i < suits.length; i ++){
		for (var j = 1; j <=13; j++){
			this.cards.push(new Card(suits[i], j))		
		}
	}
}

Deck.prototype = {
  count: function() {
  	return this.cards.length;
  },
  draw: function(n) {
  	var drawnCards = [];
  	for (var i = 0; i < n; i++){
  		drawnCards.push(this.cards.shift());
  	}
  	return drawnCards;
  },
  shuffle: function() {
  	var shuffledDeck = [];
  	while (this.count() > 0){
  		var randomIndex = Math.floor(Math.random()*(this.count()-1));
  		shuffledDeck.push(
  			this.cards.splice(randomIndex,1)[0]);
  	}
  	this.cards = shuffledDeck;
  }
};
