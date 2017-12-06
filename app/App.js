import React from 'react';
import { Provider } from 'react-redux';
// import { connect, Provider } from 'react-redux';

import Routes from './config/Routes';
// import { setSearch } from './actions';
// import localCoins from './coins.json';

// Store
import store from './store';

class App extends React.Component {
  componentWillMount() {
    // this.props.setSearch(localCoins);
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   setSearch: (...args) => { dispatch(setSearch(...args)); }
// });

// export default connect(null, mapDispatchToProps)(App);
export default App;
