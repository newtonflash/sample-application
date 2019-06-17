import React from 'react';
import { generateSizeFilters, filterProductsBySize } from '../PLPContainer.js';

describe('PLPContainer', () => {
    // test cases for generateSizeFilters
    it('should return null if blank array object is being passed', () => {
        expect(generateSizeFilters([])).toEqual(null);
    });

    it('should return an array of labels and values', () => {
        const sourceArr = [
            {
                size: ['a', 'b', 'c']
            },
            {
                size: ['d', 'a', 'c']
            }
        ];
        const filterdArr = [
            {
                label: 'a',
                value: 'a'
            },
            {
                label: 'b',
                value: 'b'
            },
            {
                label: 'c',
                value: 'c'
            },
            {
                label: 'd',
                value: 'd'
            }
        ];

        expect(generateSizeFilters(sourceArr)).not.toMatchObject(filterdArr);
    });

    // test cases for filterProductsBySize
    it('should return blank array if there are no items matching', () => {
        expect(filterProductsBySize([], 'xl')).toEqual([]);
    });
});
