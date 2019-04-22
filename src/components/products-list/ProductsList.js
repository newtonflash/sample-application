import React from 'react';
import ProductCard from './ProductCard';
import Message from 'core_components/message';

const getProducts = (products, labels, noProductMessage = '') => {
    if (products[0])
        return products.map(product => {
            return <ProductCard key={product.index} {...product} labels={labels} />;
        });
    else return <Message type="error" message={noProductMessage} />;
};

const ProductsList = ({ productsArray = [], labels, noProductMessage }) => {
    return <div className="products-list">{getProducts(productsArray, labels, noProductMessage)}</div>;
};

export default ProductsList;
