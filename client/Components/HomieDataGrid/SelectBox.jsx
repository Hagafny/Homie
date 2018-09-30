import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const SelectBox = ({ options, name, handleInputChange, dropDownName }) => {
  const optns = options.map((option, index) => {
    const theKey = index + 1;
    return (
      <Option value={option.value} key={theKey}>
        {option.text}
      </Option>
    );
  });

  return (
    <select className="form-control" name={name} onChange={handleInputChange}>
      <Option value="0">
        Please choose
        {dropDownName.toLowerCase()}
      </Option>
      {optns}
    </select>
  );
};

SelectBox.propTypes = {
  name: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default SelectBox;
