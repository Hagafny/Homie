import React from 'react';
import MultiToggle from 'react-multi-toggle';

const dateOptions = [
  {
    displayName: 'D/M/Y',
    value: 1
  },
  {
    displayName: 'M/D/Y',
    value: 2
  },
];
const DateOptionToggle = (props) => {
    return (
        <li>
        <span>
        <MultiToggle
          options={dateOptions}
          selectedOption={props.selectedDate}
          onSelectOption={props.onDateOptionSelect}
          label="Date Format:"/>
      </span>             
    </li>)
}

export default DateOptionToggle;
