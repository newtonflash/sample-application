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
            <ResponsiveImage url={productImage} />
            <div className="product-card__badge-container">
                {isSale && <Badge type="sale" label={labels.labelSale} />}
                {isExclusive && <Badge type="exclusive" label={labels.labelExclusive} />}
            </div>
            <div className="flex-container">
                <h4 className="product-card__name">{productName}</h4>
                <h3 className="product-card__price">{price}</h3>
            </div>
        </div>
    );
};

export default ProductCard;
