import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ type = '', label = '' }) => <div className={`badge badge__${type}`}>{label}</div>;

export default Badge;
