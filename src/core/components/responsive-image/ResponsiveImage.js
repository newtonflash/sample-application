import React from 'react';

/**
 * this function should be modified according to any convention used for mapping images.
 * for the demo application this is now set to the local directory.
 * @param {} url
 */
const formImageURL = url => `images/products/${url}`;
/**
 *
 * @param {'*'} url
 * @param {*} alt
 * @param {*} _class
 * @param {*} dimensions
 */
const ResponsiveImage = ({ url = '', alt = '', _class = '', dimensions = [] }) => {
    return <img src={formImageURL(url)} alt={alt} className={`resp-img ${_class}`} />;
};

export default ResponsiveImage;
