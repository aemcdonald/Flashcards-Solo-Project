const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck =  deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentCorrect = 0;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }

  takeTurn(guess) {
    const card = this.returnCurrentCard();
    const turn = new Turn(guess, card);
    this.turns++
    if (!turn.evaluateGuess()) this.incorrectGuesses.push(card.id);
    return turn.giveFeedback();
    turn.currentCard = this.returnCurrentCard();
  }

  calculatePercentCorrect() {
    const correctGuesses = (this.turns - this.incorrectGuesses.length)
    const guessPercent = (correctGuesses/this.turns) * 100;
    this.percentCorrect = guessPercent;
  }

  endRound() {
    this.calculatePercentCorrect();
    console.log(`**Round over!** You answered ${this.percentCorrect}% \n
      of the questions correctly!`);
    this.turns = 0;
  }
}

module.exports = Round;
