import React from 'react'
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json'
import Portfolio from './Portfolio'
import SocialMediaFooter from './common/SocialMediaFooter'

const portfolio = enzyme.shallow(<Portfolio />);

describe('<Portfolio /> component', () => {
	it('should render', () => {
		const tree = toJson(portfolio);
		expect(tree).toMatchSnapshot();
	});

	it('contains the SocialMediaFooter component', () => {
		expect(portfolio.find(SocialMediaFooter).length).toBe(1);
	});
});