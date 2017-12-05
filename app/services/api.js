import axios from 'axios';

const coinmarket = 'https://api.coinmarketcap.com/v1/ticker/';
const coinTicker = coinId => `https://api.coinmarketcap.com/v1/ticker/${coinId}/`;
const log = (method, err) => {
  console.warn(`%c${method}`, 'background: #393939; color: #F25A43', err);
  return err;
};

export const getAllCoins = () => axios.get(coinmarket)
  .then(res => res)
  .catch(err => log('api.userLogin', err));

export const getCoin = coinId => axios.get(coinTicker(coinId))
  .then(res => res)
  .catch(err => log('api.userLogin', err));
