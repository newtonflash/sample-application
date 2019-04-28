import React from 'react';
import { shallow } from 'enzyme';
import ProductCard from '../ProductCard';

/**
 * Basic test case
 */
describe('components/ProductCard', () => {
    it('snapshot test', () => {
        const sampleProps = {};
        const productCardWrap = shallow(<ProductCard {...sampleProps} />);
        expect(productCardWrap).toMatchSnapshot();
    });
});
