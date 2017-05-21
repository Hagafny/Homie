import React from 'react'
export default class DoneButton extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-sm-3">
                <checkbox checked={this.state.finished}></checkbox>
            </div>
        )
    };
}
