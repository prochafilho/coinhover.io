import * as R from 'ramda';

export const storage = {
  coins: [],
  portfolio: []
};

// const sortById = R.sortBy(R.compose(R.prop('id')));

const testMatch = (re, str) => str.search(re) !== -1;

export const findCoins = (text) => {
  const findMatches = coin => (testMatch(text, coin.name.toLowerCase()) ? coin : null);
  const matches = R.map(findMatches, storage.coins);
  return R.reject(R.isNil, matches);
};

export const getLocalCoins = () => storage.coins;

// export const updatePortfolio = (coins) => storage.portfolio = coins; // Use with localStorage
export const getPortfolio = () => storage.portfolio;

export const addToPortfolio = (coin) => {
  storage.portfolio.push(coin);
  return getPortfolio();
};
