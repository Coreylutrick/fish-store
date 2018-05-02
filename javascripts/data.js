const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');

const whenFishesLoad = (data) =>
{
  $('#available').append(writeFishes(data.fishes));
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
