import React from 'react';
import PropTypes from 'prop-types';
import SelectBox from './SelectBox';

const AddFormField = ({ data, handleInputChange }) => {
  let selectedInput;

  if (Object.prototype.hasOwnProperty.call(data, 'dropdownOptions'))
    selectedInput = (
      <AddFormSelectInput
        name={data.key}
        handleInputChange={handleInputChange}
        options={data.dropdownOptions}
        dropDownName={data.name}
      />
    );
  else if (data.type === 'textarea')
    selectedInput = <AddFormTextAreaInput name={data.key} handleInputChange={handleInputChange} />;
  else
    selectedInput = (
      <AddFormTextInput
        name={data.key}
        handleInputChange={handleInputChange}
        type={data.type ? data.type : 'text'}
      />
    );

  return (
    <div className="form-group">
      <label className="control-label" id="s" htmlFor={data.key}>
        {data.name}
        {':'}

        {selectedInput}
      </label>
    </div>
  );
};

const AddFormTextInput = ({ type, name, handleInputChange }) => (
  <input type={type} className="form-control" name={name} onChange={handleInputChange} />
);

const AddFormTextAreaInput = ({ name, handleInputChange }) => (
  <textarea className="form-control" name={name} onChange={handleInputChange} />
);

const AddFormSelectInput = ({ options, name, handleInputChange, dropDownName }) => (
  <SelectBox
    options={options}
    name={name}
    handleInputChange={handleInputChange}
    dropDownName={dropDownName}
  />
);

AddFormField.propTypes = {
  data: PropTypes.shape().isRequired,
  handleInputChange: PropTypes.func.isRequired
};

AddFormTextInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

AddFormTextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

AddFormSelectInput.propTypes = {
  options: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
  dropDownName: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default AddFormField;
