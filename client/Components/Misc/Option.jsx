import React from 'react'


export default class Option extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <option value={this.props.value}>{this.props.children}</option>
        )
    };
}
