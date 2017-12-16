import React from 'react';
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import { PortfolioJest } from './Portfolio';

const wrapper = enzyme.shallow(<PortfolioJest />);

describe('<Portfolio /> component', () => {
  it('should render', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
