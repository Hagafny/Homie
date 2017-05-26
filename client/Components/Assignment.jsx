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

    changeStatus(dateUntil) {
        let status = this.getAssignmentStatus(dateUntil);
        this.setState({ status: status });
    }
    getAssignmentStatus(dateUntil) {
        if (this.props.data.viewState.done)
            return 3;
        else {
            let hoursRemaining;
            if (!dateUntil) { //This is if we get to this point not from the tick event of the countdown. We have to calculate the total hours remaining from scratch.
                var date1 = new Date(); //Might need to reduce 180 from here.

                if (location.hostname != "localhost") {
                    console.log(date1.getTimezoneOffset());
                    date1.setMinutes(date1.getMinutes() + date1.getTimezoneOffset());
                }


                var date2 = this.props.data.end_date;
                var diff = date2.getTime() - date1.getTime();
                hoursRemaining = Math.floor(diff / 1000 / 60 / 60);
            }
            else
                hoursRemaining = dateUntil[0].number * 24 + dateUntil[1].number; //If we call this straight from the tick method of Countdown, we can calculate total hours remaining
           // console.log(hoursRemaining);
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
                <AssignmentBody data={this.props.data} onDoneChecked={this.props.onDoneChecked} refreshAssignments={this.props.refreshAssignments} tickCB={this.changeStatus.bind(this)} />
            </div>
        )
    }
}





