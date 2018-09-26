import React from 'react';

const CountdownTile = ({ number, title }) => (
  <div>
    <span className="homieWhite">{number}</span>
    <div className="smalltext homieWhite">{title}</div>
  </div>
);

export default CountdownTile;
