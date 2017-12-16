import React from 'react';
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import { CoinTable } from './CoinTable';
import CoinThead from '../../components/CoinThead/CoinThead';
import SearchCoin from '../Search/SearchCoin';

const coinTable = enzyme.shallow(<CoinTable />);

describe('<CoinTable /> component', () => {
  it('should render', () => {
    const tree = toJson(coinTable);
    expect(tree).toMatchSnapshot();
  });

  it('contains the CoinThead component', () => {
    expect(coinTable.find(CoinThead).length).toBe(1);
  });

  it('Clicking the Add Asset button should enable the searchCoin component', () => {
    coinTable.setState({ search: true });
    expect(coinTable.find(SearchCoin).length).toBe(1);
  });
});
