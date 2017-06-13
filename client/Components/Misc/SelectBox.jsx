import React from 'react'
import Option from './Option.jsx';

const SelectBox = (props) => {
    let options = props.options.map((option, index) => {
        return <Option value={option.id} key={index}>{option.title}</Option>
    })

    return (
        <select onChange={props.handleCourseChange}>
            <Option value="0">Please choose course</Option>
            {options}
        </select>
    )

}

export default SelectBox;

