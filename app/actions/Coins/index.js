// import * as R from 'ramda';
import * as api from '../../services/api';

import * as actionTypes from '../../actionTypes';

const { GET_COINS } = actionTypes;

// action creators /////////////////////////////////////////////////////////////
export function get(coins) {
  console.log('get coins', coins);
  return {
    type: GET_COINS,
    coins
  };
}

// actions /////////////////////////////////////////////////////////////////////
export const getCoins = () => dispatch => api.getAllCoins().then((res) => {
  console.log('res', res);
  dispatch(get(res.data));
});
