const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck Class', () => {
  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  });

  it('Should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('Should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('Should be initialized with an array of Card objects', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('Should count how many cards are in the deck', () => {
    expect(deck.countCards()).to.equal(3);
  });
});
