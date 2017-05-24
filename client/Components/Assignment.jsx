import React from 'react';
import AssignmentHeader from './AssignmentHeader.jsx';
import AssignmentBody from './AssignmentBody.jsx';

export default class Assignment extends React.Component {
    constructor(props) {
        super(props);
        let endDate = getTimezonedDate(this.props.data.end_date);
        this.state = {
            endDate: endDate
        }
    }

    toggleShow(showState) {
        this.props.onShowCallback(this.props.id, true)
    }

    render() {
        return (
            <div className="card" >
                <AssignmentHeader data={this.props.data} endDate={this.state.endDate} onShowCallback={this.props.onShowCallback} />
                <AssignmentBody data={this.props.data} onDoneChecked={this.props.onDoneChecked} />
            </div>
        )
    }
}

function getTimezonedDate(dateString) {
    let endDate = new Date(dateString);

    if (location.hostname != "localhost") {
        endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset());
    }

    return endDate;
}









            /*<div className="row assignment">
                <div className="col-sm-3">
                    <Title title={this.props.data.title} ex={this.props.data.ex} endDate={this.state.endDate} />
                </div>
  
                <div className="col-sm-3">
                    <Resources data={this.props.data.resources} />
                </div>
                <div className="col-sm-3">
                    <Countdown2 endDate={this.state.endDate} />
                </div>
            </div>*/