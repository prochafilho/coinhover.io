import React from 'react';
import { connect } from 'react-redux';
import { findCoins } from '../../services/coinFactory';
import { addCoin, setSearch } from '../../actions';

class SearchCoin extends React.Component {
  constructor(props) {
    super(props);

    console.log('SearchCoin', props);

    this.state = {
      coins: props.coins,
      saved: props.search[0]
    };

    this.close = this.close.bind(this);
    this.clickCoin = this.clickCoin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.coinInput.focus();
  }

  handleChange() {
    const text = document.getElementById('coin-search').value;

    const search = (txt) => {
      const searchedCoins = findCoins(txt);
      this.props.setSearch(searchedCoins);
      this.setState({ coins: searchedCoins });
    };

    const clearSearch = () => {
      this.props.setSearch([]);
      this.setState({ coins: this.state.saved });
    };

    const handleUpdate = num => (num > 1 ? search(text) : clearSearch());

    return handleUpdate();
  }

  clickCoin(coin) {
    this.props.addCoin(coin);
    this.props.closeSearch();
  }

  close() {
    this.props.closeSearch();
  }

  render() {
    const { coins } = this.props;
    console.log('coins.collection', coins.collection);

    const searchCoins = coins.collection.map(coin => (
      <li key={coin.id}>
        <button onClick={() => this.clickCoin(coin)}>
          <span>{ coin.name }</span>
        </button>
      </li>
    ));

    return (
      <div id="search-coin-component">
        <input
          type="text"
          id="coin-search"
          className="coin-search-input fl"
          placeholder="Search"
          onChange={() => this.handleChange()}
          ref={(input) => { this.coinInput = input; }}
        />
        <div className="cancel-search">
          <div className="close-x" />
        </div>
        <div className="coins-container">
          <div className="coin-select">
            <ul>
              { searchCoins }
            </ul>
          </div>
        </div>
        <div className="overlay" role="button" tabIndex={0} onClick={this.close} />
      </div>
    );
  }
}

const mapStateToProps = ({ coins, search }) => ({
  coins,
  search
});

const mapDispatchToProps = dispatch => ({
  addCoin: (...args) => { dispatch(addCoin(...args)); },
  setSearch: (...args) => { dispatch(setSearch(...args)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchCoin);
