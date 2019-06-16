import React from 'react';
import PropTypes from 'prop-types';

const ProductsFiterBar = ({ title = '', filtersData = [], onFilterSelect = undefined, selectedFilter, labels }) => {
    return (
        <div className="products-filter-bar">
            {title !== '' && <h2 className="products-filter-bar__title">{title}</h2>}
            {filtersData[0] && (
                <select
                    className="products-filter-bar__filter"
                    data-test-id="productsFilter"
                    onChange={e => {
                        onFilterSelect(e.target.value);
                    }}
                    defaultValue={selectedFilter}
                >
                    <option value="-1">{labels.labelFilterBySize || 'Select'}</option>
                    {filtersData.map(item => {
                        return (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        );
                    })}
                </select>
            )}
        </div>
    );
};

ProductsFiterBar.proptype = {
    title: PropTypes.string,
    filtersData: PropTypes.array,
    onFilterSelect: PropTypes.func
};

export default ProductsFiterBar;
