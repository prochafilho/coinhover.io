// import * as R from 'ramda';
import * as api from '../../services/api';

import * as actionTypes from '../../actionTypes';

import { cleanCoins } from '../../services/coinFactory';

const { GET_COINS } = actionTypes;

// action creators /////////////////////////////////////////////////////////////
export function get(coins) {
  return {
    type: GET_COINS,
    coins
  };
}

// actions /////////////////////////////////////////////////////////////////////
export const getCoins = () => dispatch => api.getAllCoins().then((res) => {
  const cleanedCoins = cleanCoins(res.data);
  console.log('cleanedCoins', cleanedCoins);
  dispatch(get(cleanedCoins));
});
