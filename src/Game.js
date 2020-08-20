const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const Turn = require('./Turn');

class Game {
  constructor() {
    this.currentRound = {}; //what is this doing?
  }

  start() {
    const cards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    const deck = new Deck(cards);
    const round = new Round(deck); //???? & reassign this.currentRound? otherwise what is it doing?
    //this.currentRound = new Round(deck)
    this.printQuestion(round);
    this.printMessage(deck, round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
