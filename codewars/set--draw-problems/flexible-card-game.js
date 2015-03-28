function Card(suit, rank) {
  this.suit = suit
  this.rank = rank
}

Card.SUITS = [
  Card.CLUBS    = 'Clubs',
  Card.DIAMONDS = 'Diamonds',
  Card.HEARTS   = 'Hearts',
  Card.SPADES   = 'Spades'
]

Card.prototype = {
  get face_card() {
    return this.rank > 10
  },
  valueOf: function() {
    return this.rank
  },
  toString: function() {
    //switch statement
    var rank = {1: 'Ace', 11: 'Jack', 12: 'Queen', 13: 'King'}[this.rank] || this.rank
    return rank + ' of ' + this.suit
  }
}

function Deck() {
  this.cards = []
  
  for (var i = 0; i < Card.SUITS.length; i++) {
    for (var rank = 1; rank <= 13; rank++) {
      this.cards.push(new Card(Card.SUITS[i], rank))
    }
  }
  
  this.shuffle()
}

Deck.prototype = {
  count: function() {
    return this.cards.length
  },
  draw: function(n) {
    return this.cards.splice(-n, n)
  },
  shuffle: function() {
  	debugger;
    this.cards.sort(function() { return Math.random() - 0.5 })
  }
};