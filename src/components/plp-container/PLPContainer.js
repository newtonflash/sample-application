import React, { useEffect, useState } from 'react';
import { array, object } from 'prop-types';
import axios from 'axios';
import ProductsList from 'components/products-list';
import ResponsiveContainer from 'core_components/responsive-container';
import ProductsFilterBar from 'components/products-filter-bar';

export const findUniqueArr = arr => {
    var a = arr.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j]) a.splice(j--, 1);
        }
    }
    return a;
};

export const generateSizeFilters = (productsArr = []) => {
    const allSizes = productsArr.reduce((acc, products) => {
        return { size: [...acc.size, ...products.size] };
    });
    return findUniqueArr(allSizes.size).map(item => {
        return { label: item, value: item };
    });
};

export const filterProductsBySize = (productsArr, filterValue) => {
    if (filterValue * 1 === -1) return productsArr;

    return productsArr.filter(item => {
        return item.size.indexOf(filterValue) !== -1;
    });
};

let serverResponseDate = [];

/**
 *
 * @param {*} param0
 */
const PLPContainer = ({ serviceEndPoints = [], labels = {}, title = '' }) => {
    // load the data and show

    const [products, updateProducts] = useState(0);
    const [filters, updateFilterData] = useState([]);
    const [selectedFilter, updateCurrentFilter] = useState(-1);

    useEffect(() => {
        const updatePr = updateProducts;
        axios.get(serviceEndPoints.productsList).then(response => {
            serverResponseDate = response.data;
            updateFilterData(generateSizeFilters(serverResponseDate));
            updateProducts(serverResponseDate);
        });
    }, []);

    const onFilterChange = value => {
        updateCurrentFilter(value);

        updateProducts(filterProductsBySize(serverResponseDate, value));
    };

    return (
        <ResponsiveContainer>
            <ProductsFilterBar
                title={title}
                filtersData={filters}
                labels={labels}
                onFilterSelect={onFilterChange}
                selectedFilter={selectedFilter}
            />
            <ProductsList productsArray={products} labels={labels} />
        </ResponsiveContainer>
    );
};

PLPContainer.proptypes = {
    serviceEndPoints: array,
    labels: object
};

export default PLPContainer;
