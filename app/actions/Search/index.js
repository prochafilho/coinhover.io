// import * as R from 'ramda';
// import * as api from '../../services/api';

import * as actionTypes from '../../actionTypes';

const { SET_COINS_SEARCH } = actionTypes;

// action creators /////////////////////////////////////////////////////////////
export function set(searchedCoins) {
  return {
    type: SET_COINS_SEARCH,
    searchedCoins
  };
}

// actions /////////////////////////////////////////////////////////////////////
export function setSearch(coins) {
  return dispatch => dispatch(set(coins));
}
