import React from 'react';
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Portfolio from './Portfolio';

const wrapper = enzyme.shallow(<Portfolio />);

describe('<Portfolio /> component', () => {
  it('should render', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();

    expect(wrapper).toHaveLength(1);
  });
});
