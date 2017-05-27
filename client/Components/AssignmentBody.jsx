import React from 'react'
import Resources from './Resources.jsx';
import DoneButton from './DoneButton.jsx';
import Countdown from './Countdown.jsx';
export default class AssignmentBody extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let collapseStatus = this.props.data.viewState.show ? "show" : "";

        return (
            <div id={this.props.data.id} className={`collapse ${collapseStatus}`} role="tabpanel" aria-labelledby="headingOne">
                <div className="card-block">
                    <h6 className="card-title">EX {this.props.data.ex}</h6>
                    <div className="row">
                        <div className="col"> <Countdown countdown={this.props.data.countdown}  /></div>
                        <div className="col"><DoneButton id={this.props.data.id} done={this.props.data.viewState.done} onDoneChecked={this.props.onDoneChecked} /></div>
                        <div className="col"><Resources data={this.props.data.resources} /></div>
                    </div>
                </div>
            </div>
        )
    };
}
