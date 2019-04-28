import React, { useEffect, useState } from 'react';
import { array, object } from 'prop-types';
import getProductsList from 'services/product-list/ProductListService';
import ProductsList from 'components/products-list';
import ResponsiveContainer from 'core_components/responsive-container';
import ProductsFilterBar from 'components/products-filter-bar';
import { findUniqueArr } from 'utils/array-utils';

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

/**
 *
 * @param {*} param0
 */
const PLPContainer = ({ serviceEndPoints = [], labels = {}, title = '', errorMessages = {} }) => {
    // load the data and show

    const [products, updateProducts] = useState(0);
    const [filters, updateFilterData] = useState([]);
    const [selectedFilter, updateCurrentFilter] = useState(-1);

    const onInitialDataRecieve = data => {
        updateFilterData(generateSizeFilters(data));
        updateProducts(data);
    };

    useEffect(() => {
        getProductsList(serviceEndPoints.productsList, onInitialDataRecieve);
    }, []);

    const onFilterChange = value => {
        updateCurrentFilter(value);
        let originalData = getProductsList();
        updateProducts(filterProductsBySize(originalData, value));
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
            <ProductsList
                productsArray={products}
                labels={labels}
                noProudctMessage={errorMessages.ERR_NO_FILTER_RESULTS}
            />
        </ResponsiveContainer>
    );
};

PLPContainer.proptypes = {
    serviceEndPoints: array,
    labels: object
};

export default PLPContainer;
