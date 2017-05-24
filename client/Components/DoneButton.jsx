import React from 'react'
export default class DoneButton extends React.Component {

    constructor(props) {
        super(props)
    }
    doneChecked(e) {
        this.props.onDoneChecked(this.props.id, e.target.checked);
    }
    render() {
        return (
            <input type="checkbox" onChange={this.doneChecked.bind(this)} checked={this.props.done} />
        )
    };
}
