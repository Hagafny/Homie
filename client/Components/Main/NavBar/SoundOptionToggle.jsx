import React from 'react';
import MultiToggle from 'react-multi-toggle';

const soundOptions = [
  {
    displayName: 'On',
    value: 1
  },
  {
    displayName: 'Off',
    value: 0
  },
];
const SoundOptionToggle = (props) => {
    return (
        <li>
        <span>
        <MultiToggle
          options={soundOptions}
          selectedOption={props.selectedSound}
          onSelectOption={props.onSoundOptionSelect}
          label="Sound:"/>
      </span>             
    </li>)
}

export default SoundOptionToggle;
