import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

// const store = createStore(reducers, compose(
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop
// ));

const store = createStore(
  combineReducers({
    ...reducers
  }),
  reduxDevToolsExtension && reduxDevToolsExtension(),
  applyMiddleware(
    thunk
  )
);

export default store;
