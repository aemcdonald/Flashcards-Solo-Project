const chai = require('chai');
const expect = chai.expect;

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
