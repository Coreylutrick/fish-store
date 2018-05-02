const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const bindEvents = require('./oldMain');

const whenFishesLoad = (data) =>
{
  $('#available').append(writeFishes(data.fishes));
  bindEvents();
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
