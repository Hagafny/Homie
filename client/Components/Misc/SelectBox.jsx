import React from 'react'
import Option from './Option.jsx';

export default class SelectBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let options = this.props.options.map((option, index) => {
            return <Option value={option.id} key={index}>{option.title}</Option>
        })

        return (
            <select onChange={this.props.handleCourseChange}>
                <Option value="0">Please choose course</Option>
                {options}
            </select>
        )
    };
}
