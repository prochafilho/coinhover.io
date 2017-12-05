import axios from 'axios';

const coinmarket = 'https://api.coinmarketcap.com/v1/ticker/';
const coinTicker = coinId => `https://api.coinmarketcap.com/v1/ticker/${coinId}/`;

const log = (method, err) => {
  /* eslint-disable no-console */
  console.warn(`%c${method}`, 'background: #393939; color: #F25A43', err);
  return err;
};

export const getAllCoins = () => axios.get(coinmarket)
  .catch(err => log('api.getAllCoins', err))
  .then(res => res);

export const getCoin = coinId => axios.get(coinTicker(coinId))
  .catch(err => log('api.getCoin', err))
  .then(res => res);
