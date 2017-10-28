import React from 'react';
import MultiToggle from 'react-multi-toggle';

const timeOptions = [
  {
    displayName: '24H',
    value: 1
  },
  {
    displayName: 'AM/PM',
    value: 2
  },
];
const TimeOptionToggle = (props) => {
    return (
        <li>
        <span>
        <MultiToggle
          options={timeOptions}
          selectedOption={props.selectedTime}
          onSelectOption={props.onTimeOptionSelect}
          label="Time Format:"/>
      </span>             
    </li>)
}

export default TimeOptionToggle;
