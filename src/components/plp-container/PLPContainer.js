import React, { useEffect, useState } from 'react';
import { array, object } from 'prop-types';
import axios from 'axios';
import ProductsList from 'components/products-list';
import ResponsiveContainer from 'core_components/responsive-container';

/**
 *
 * @param {*} param0
 */
const PLPContainer = ({ serviceEndPoints = [], labels = {} }) => {
    // load the data and show

    const [products, updateProducts] = useState(0);

    useEffect(() => {
        const updatePr = updateProducts;
        axios.get(serviceEndPoints.productsList).then(response => {
            updatePr(response.data);
        });
    }, []);

    return (
        <ResponsiveContainer>
            <ProductsList productsArray={products} />
        </ResponsiveContainer>
    );
};

PLPContainer.proptypes = {
    serviceEndPoints: array,
    labels: object
};

export default PLPContainer;
