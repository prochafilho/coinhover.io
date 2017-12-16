/* eslint-disable no-param-reassign */
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

export const cleanCoins = coins => coins.map((coin) => {
  delete coin.available_supply;
  delete coin.last_updated;
  delete coin.market_cap_usd;
  delete coin.max_supply;
  delete coin.price_btc;
  delete coin.total_supply;
  return coin;
});
