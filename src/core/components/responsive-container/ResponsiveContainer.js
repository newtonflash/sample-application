import React from 'react';

const ResponsiveContainer = ({ _class = '', children }) => (
    <div className == {`responsive-container ${_class}`}>{children}</div>
);

export default ResponsiveContainer;
