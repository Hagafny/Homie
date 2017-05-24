import React from 'react'
export default class DoneButton extends React.Component {

    constructor(props) {
        super(props)
    }
    wut() {
    }
    render() {
        return (
            <input type="checkbox" onChange={this.wut} checked={this.props.finished} />
        )
    };
}
