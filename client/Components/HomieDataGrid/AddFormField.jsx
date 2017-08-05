import React from 'react'
import SelectBox from './SelectBox.jsx';

const AddFormInput = (props) => {
    return (
        <div className="form-group">
            <label className="control-label" htmlFor={props.data.key}>{props.data.name}:</label>
            {props.data.hasOwnProperty("dropdownOptions") ?
                (<AddFormSelectInput name={props.data.key} handleInputChange={props.handleInputChange} options={props.data.dropdownOptions} dropDownName={props.data.name} />)
                :
                (<AddFormTextInput name={props.data.key} handleInputChange={props.handleInputChange} />)
            }
        </div>
    )
}

const AddFormTextInput = (props) => {
    return (
        <input type="text" className="form-control" name={props.name} onChange={props.handleInputChange} />
    )
}

const AddFormSelectInput = (props) => {
    return (
        <SelectBox options={props.options} name={props.name} handleInputChange={props.handleInputChange} dropDownName={props.dropDownName} />
    )
}

export default AddFormInput;