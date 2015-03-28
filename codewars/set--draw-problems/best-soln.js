//parse: 1 line sorting with Math.random() - 0.5
//-n splicing
//using objects as a one-line switch
//
//
/**
 * That's how you randomize!
 * If compareFunction(a, b) is less than 0, sort a to a lower index than b, i.e. a comes first.
If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
If compareFunction(a, b) is greater than 0, sort b to a lower index than a.
compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined

1.
Just return a uniform distribution from -.5 to +.5
Math.random() - 0.5

2. Can do swapping with commas. 
//swap:

if (something){temp = thing1, thing1 = thing2, thing2=temp;}
 */

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
    this.cards.sort(function() { return Math.random() - 0.5 })
  }
};

//Comma shuffle function; it's just a hacky for loop


function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
  this.face_card = this.rank > 10;
}
Card.prototype.toString = function() {return Card.RANKS[this.rank] + ' of ' + this.suit;};
Card.prototype.valueOf = function() {return this.rank;};
Card.SPADES = 'Spades';
Card.DIAMONDS = 'Diamonds';
Card.HEARTS = 'Hearts';
Card.CLUBS = 'Clubs';
Card.SUITS = {0:Card.SPADES, 1:Card.DIAMONDS, 2:Card.HEARTS, 3:Card.CLUBS};
Card.RANKS = {1:'Ace', 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, 11:'Jack', 12:'Queen', 13:'King'};
function Deck() {
  this.cards = [];
  for(var i = 0; i < 52; i++) this.cards.push(new Card(Card.SUITS[Math.floor(i / 13)], i % 13 + 1));
}
Deck.prototype = {
  count: function() {return this.cards.length;},
  draw: function(n) {return this.cards.splice(this.cards.length - n, n);},
  shuffle: function() {
    for(var c = this.cards, j, x, i = c.length; i;
        j = Math.floor(Math.random() * i), x = c[--i], c[i] = c[j], c[j] = x);
  }
};