import React from 'react';
import ProductCard from './ProductCard';

const getProducts = (products, labels) => {
    return (
        products[0] &&
        products.map(product => {
            return <ProductCard key={product.index} {...product} labels={labels} />;
        })
    );
};

const ProductsList = ({ productsArray = [], labels }) => {
    return <div className="products-list">{getProducts(productsArray, labels)}</div>;
};

export default ProductsList;
