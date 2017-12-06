/* eslint-disable import/no-named-as-default */
import React from 'react';
import { connect } from 'react-redux';

import AssetThead from '../../components/AssetTable/AssetThead';
import AssetRow from '../AssetRow/AssetRow';
import SearchCoin from '../Search/SearchCoin';

export class AssetsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: false
    };

    this.closeSearch = this.closeSearch.bind(this);
    console.log('AssetsTable', props);
  }

  closeSearch() {
    this.setState({ search: false });
  }

  render() {
    const assets = this.props.portfolio ? this.props.portfolio : [];
    // const { assets } = this.props ? this.props : [];
    console.log('AssetsTable render assets', assets);

    const handleClick = (e) => {
      e.preventDefault();
      this.setState({ search: true });
    };

    return (
      <section className="asset-table">
        <AssetThead />
        { assets.map(asset =>
          (<AssetRow
            key={asset.id}
            asset={asset}
            balance={asset.balance}
            price_usd={asset.price_usd}
            percentage={asset.percentage}
          />)) }
        <div className="add-asset-row">
          { this.state.search ? (
            <SearchCoin closeSearch={this.closeSearch} />
          ) : (
            <div className="add-btn" role="button" tabIndex={0} onClick={handleClick}>
              + Add Asset
            </div>
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => (state);

const AssetsTableContainer = AssetsTable;
export default connect(mapStateToProps, null)(AssetsTableContainer);
