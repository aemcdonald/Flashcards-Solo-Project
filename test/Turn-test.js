const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn Class', () => {

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('Should take in a guess', () => {
    const turn = new Turn('zebras');
    expect(turn.guess).to.equal('zebras')
  })

  it('Should take in a current Card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.currentCard).to.equal(card);
  });

  it('Should return a guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('Should return the Card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.returnCard()).to.equal(turn.currentCard);
  });

  it('Should check if a guess is incorrect', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.evaluateGuess()).to.be.false;
  });

  it('Should check if a guess is correct', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    expect(turn.evaluateGuess()).to.be.true;
  });

  it('Should give feedback if a guess is incorrect', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });

  it('Should give feedback if a guess is correct', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    expect(turn.giveFeedback()).to.equal('Correct!');
  });
});
