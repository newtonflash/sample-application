import React from 'react';

const Badge = ({ type = '', label = '' }) => <div className={`badge badge__${type}`}>{label}</div>;

export default Badge;
