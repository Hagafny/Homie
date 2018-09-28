import React from 'react';
import PropTypes from 'prop-types';

const CountdownTile = ({ number, title }) => (
  <div>
    <span className="homieWhite">{number}</span>
    <div className="smalltext homieWhite">{title}</div>
  </div>
);

CountdownTile.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default CountdownTile;
