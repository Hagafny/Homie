import React from 'react';
import AssignmentHeader from './AssignmentHeader.jsx';
import AssignmentBody from './AssignmentBody.jsx';

export default class Assignment extends React.Component {
    constructor(props) {
        super(props);
        let status = this.getAssignmentStatus();
        this.state = { status: status }
    }
    componentWillReceiveProps(nextProps) {
        this.changeStatus();
    }

    changeStatus() {
        let status = this.getAssignmentStatus();
        this.setState({ status: status });
    }
    getAssignmentStatus() {
        if (this.props.data.viewState.done)
            return 3;
        else {
            let countdown = this.props.data.countdown;
            if (!countdown)
                return 0;

            let hoursRemaining = countdown[0].number * 24 + countdown[1].number; 

            if (hoursRemaining <= 5)
                return 2
            else if (hoursRemaining <= 23)
                return 1
            else
                return 0;
        }
    }

    toggleShow(showState) {
        this.props.onShowCallback(this.props.id, true)
    }

    render() {
        return (
            <div className="card">
                <AssignmentHeader data={this.props.data} status={this.state.status} endDate={this.props.data.end_date} onShowCallback={this.props.onShowCallback} />
                <AssignmentBody data={this.props.data} onDoneChecked={this.props.onDoneChecked} />
            </div>
        )
    }
}





