import React from 'react';
import ProductCard from './ProductCard';

const getProducts = products => {
    return (
        products[0] &&
        products.map(product => {
            return <ProductCard key={product.index} {...product} />;
        })
    );
};

const ProductsList = ({ productsArray = [] }) => {
    console.log(productsArray);

    return <div className="products-list">{getProducts(productsArray)}</div>;
};

export default ProductsList;
