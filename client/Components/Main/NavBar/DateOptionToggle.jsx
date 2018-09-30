import React from 'react';
import PropTypes from 'prop-types';
import MultiToggle from 'react-multi-toggle';

const dateOptions = [
  {
    displayName: 'D/M/Y',
    value: 2
  },
  {
    displayName: 'M/D/Y',
    value: 1
  }
];
const DateOptionToggle = ({ selectedDate, onDateOptionSelect }) => (
  <li>
    <span>
      <MultiToggle
        options={dateOptions}
        selectedOption={selectedDate}
        onSelectOption={onDateOptionSelect}
        label="Date Format:"
      />
    </span>
  </li>
);

DateOptionToggle.propTypes = {
  selectedDate: PropTypes.number.isRequired,
  onDateOptionSelect: PropTypes.func.isRequired
};

export default DateOptionToggle;
