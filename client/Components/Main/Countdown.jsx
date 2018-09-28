import React from 'react';
import PropTypes from 'prop-types';
import CountdownTile from './CountdownTile';

const Countdown = ({ countdown }) => {
  let countdwn = countdown;
  if (!countdwn)
    // Just validating against weird behaviour
    countdwn = [
      {
        number: '',
        title: 'Days'
      },
      {
        number: '',
        title: 'Hours'
      },
      {
        number: '',
        title: 'Minutes'
      },
      {
        number: '',
        title: 'Seconds'
      }
    ];

  const tiles = countdwn.map((countdownNode, index) => (
    <CountdownTile
      number={countdownNode.number}
      title={countdownNode.title}
      key={`index_${index + 1}`}
    />
  ));

  return <div className="countdown">{tiles}</div>;
};

Countdown.propTypes = {
  countdown: PropTypes.arrayOf(
    PropTypes.shape({ number: PropTypes.number.isRequired, title: PropTypes.string.isRequired })
  ).isRequired
};

export default Countdown;
