import React from 'react';
import { Provider } from 'react-redux';

// Routes Config
import Routes from './config/Routes';

// Store
import store from './store';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
