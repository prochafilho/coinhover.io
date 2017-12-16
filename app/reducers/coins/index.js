/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */

import { GET_COINS } from '../../actionTypes';

const initialState = {
  collection: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        collection: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
