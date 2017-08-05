import React from 'react'
import Option from './Option.jsx';

const SelectBox = (props) => {
    let options = props.options.map((option, index) => {
        return <Option value={option.value} key={index}>{option.text}</Option>
    })

    return (
        <select className="form-control" name={props.name} onChange={props.handleInputChange}>
            <Option value="0">Please choose {props.dropDownName.toLowerCase()}</Option>
            {options}
        </select>
    )

}

export default SelectBox;

