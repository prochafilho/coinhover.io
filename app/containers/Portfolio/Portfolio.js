import React, { Component } from 'react';
import { Header } from '../Common/Header';
import { AssetsTable } from '../AssetsTable/AssetsTable';
import SocialMediaFooter from '../Common/SocialMediaFooter';
// import * as api from '../../services/api';

class Portfolio extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true
  //   };
  // }

  // @TODO Pull saved data from localStorage and make api calls
  componentDidMount() {
    // api.getAllCoins().then((res) => {
    //   console.log('res', res);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    return (
      <div className="app-bg">
        <section className="portfolio">
          <Header />
          {/* { this.state.loading ? (
            <div className="loading">
              <div className="loader" />
              <span>Loading coin data...</span>
            </div>
          ) : ( */}
          <AssetsTable />
          {/* // )} */}
          <SocialMediaFooter />
        </section>
      </div>
    );
  }
}

export default Portfolio;
