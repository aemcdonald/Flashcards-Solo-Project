const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

  it('Should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('Should be an instance of Game', () => {
    let game = new Game();

    expect(game).to.be.an.instanceof(Game);
  });
});
