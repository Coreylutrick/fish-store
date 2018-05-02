const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const bindEvents = require('./oldMain');
const applySale = require('./discount');

const whenFishesLoad = (data) =>
{
  $('#available').append(writeFishes(data.fishes));
  bindEvents();
  applySale();
};

const whenFishesDontLoad = (error) =>
{
  console.log('error!', error);
};

const initializer = () =>
{
  loadFishes(whenFishesLoad, whenFishesDontLoad);
};

module.exports = initializer;
