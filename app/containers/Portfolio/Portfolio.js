import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Header } from '../Common/Header';
import { CoinTable } from '../CoinTable/CoinTable';
import SocialMediaFooter from '../Common/SocialMediaFooter';

// Actions
import { getCoins } from '../../actions';

class Portfolio extends Component {
  componentDidMount() {
    this.props.getCoins();
  }

  render() {
    const { loading } = this.props;

    return (
      <div className="app-bg">
        <section className="portfolio">
          <Header />
          { loading ? (
            <div className="loading">
              <div className="loader" />
              <span>Loading coin data...</span>
            </div>
          ) : (
            <CoinTable />
          )}
          <SocialMediaFooter />
        </section>
      </div>
    );
  }
}

export const PortfolioJest = Portfolio;

const mapDispatchToProps = dispatch => ({
  getCoins: (...args) => dispatch(getCoins(...args))
});

const mapStateToProps = ({ coins, loading }) => ({
  coins,
  loading
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
