import React from 'react';
import ResponsiveImage from 'core_components/responsive-image';

const ProductCard = ({ productName = '' }) => {
    return (
        <div className="product-card">
            <h3>{productName}</h3>
            <ResponsiveImage />
        </div>
    );
};

export default ProductCard;
