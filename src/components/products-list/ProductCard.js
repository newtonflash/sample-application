import React from 'react';
import ResponsiveImage from 'core_components/responsive-image';
import Badge from 'core_components/badge';

const ProductCard = ({
    productName = '',
    price = 0,
    productImage = '',
    isSale = false,
    isExclusive = false,
    labels = {}
}) => {
    return (
        <div className="product-card">
            <h3>{productName}</h3>

            <ResponsiveImage url={productImage} />
            {isSale && <Badge type="sale" label={labels.labelSale} />}
            {isExclusive && <Badge type="exclusive" label={labels.labelExclusive} />}
            <div className="product-card__price">{price}</div>
        </div>
    );
};

export default ProductCard;
