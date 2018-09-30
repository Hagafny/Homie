import React from 'react';
import PropTypes from 'prop-types';
import MultiToggle from 'react-multi-toggle';

const timeOptions = [
  {
    displayName: '24H',
    value: 2
  },
  {
    displayName: 'AM/PM',
    value: 1
  }
];
const TimeOptionToggle = ({ selectedTime, onTimeOptionSelect }) => (
  <li>
    <span>
      <MultiToggle
        options={timeOptions}
        selectedOption={selectedTime}
        onSelectOption={onTimeOptionSelect}
        label="Time Format:"
      />
    </span>
  </li>
);

TimeOptionToggle.propTypes = {
  selectedTime: PropTypes.number.isRequired,
  onTimeOptionSelect: PropTypes.func.isRequired
};

export default TimeOptionToggle;
