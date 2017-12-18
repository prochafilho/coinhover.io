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

const keysToClean = [
  'available_supply',
  'last_updated',
  'market_cap_usd',
  'max_supply',
  'price_btc',
  'total_supply'
];

// Clean Coins Function
export const cleanCoins = coins =>
  // Return our mapped coins array
  coins.map(coin =>
    // Iterate through each key in the object and create a new object (reduce)
    Object.keys(coin).reduce((newObj, key) => (
      // Check to see if this key is inside keysToClean
      keysToClean.indexOf(key) < 0
      // If not, add it to the new object
        ? ({ ...newObj, [key]: coin[key] })
        // Otherwise, ignore the key and move on
        // so that its not in our new object anymore
        : newObj
    ), {})
  );
