import React from 'react'
import Toggle from 'react-toggle'

export default class DoneButton extends React.Component {

    constructor(props) {
        super(props)
    }

    doneChecked(e) {
        e.stopPropagation();
        this.props.onDoneChecked(this.props.id, e.target.checked);
    }
    render() {
        return (


            <label>
                <span>Done</span>
                <Toggle
                    defaultChecked={this.props.done}
                    onChange={this.doneChecked.bind(this)} />
            </label>
           
        )
    };
}
