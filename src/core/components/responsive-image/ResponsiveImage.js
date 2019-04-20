import React from 'react';

/**
 *
 * @param {'*'} url
 * @param {*} alt
 * @param {*} _class
 * @param {*} dimensions
 */
const ResponsiveImage = (url = '', alt = '', _class = '', dimensions = []) => {
    return <img src={url} alt={alt} className={`resp-img ${_class}`} />;
};

export default ResponsiveImage;
