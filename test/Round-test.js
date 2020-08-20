const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round Class', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it('Should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('Should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('Should start at the beginning of the deck', () => {
    expect(round.deck.cards[0]).to.equal(card1);
  });

  it('Should update the turn count after a correct or incorrect guess', () => {
    expect(round.turns).to.equal(0);

    round.takeTurn('sea otter');

    expect(round.turns).to.equal(1);

    round.takeTurn('pug');
  });

  it('Should store incorrect guesses by ID', () => {
    round.takeTurn('pug');
    round.takeTurn('capybara')
    expect(round.incorrectGuesses.length).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([1, 14]);
  });

  it('Should not store a guess if it is correct', () => {
    round.takeTurn('sea otter');

    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('Should give feedback about a guess', () => {

    expect(round.takeTurn('sea otter')).to.equal('Correct!')
    expect(round.takeTurn('pug')).to.equal('Incorrect!')
  });

  it('Should update the card after a turn is played', () => {
    expect(round.returnCurrentCard()).to.equal(card1);

    round.takeTurn('sea otter');

    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('Should calculate the percentage of correct guesses', () => {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.calculatePercentCorrect();
  });
});
