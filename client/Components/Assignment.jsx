import React from 'react';
import AssignmentHeader from './AssignmentHeader.jsx';
import AssignmentBody from './AssignmentBody.jsx';
// import Header from './Header.jsx';
// import Countdown from './Countdown.jsx';
// import Countdown2 from './Countdown2.jsx';
// import Resources from './Resources.jsx';
// import DueDate from './DueDate.jsx';
// import Title from './Title.jsx';

export default class Assignment extends React.Component {
    constructor(props) {
        super(props);
        let endDate = getTimezonedDate(this.props.data.end_date);
        this.state = {
            endDate: endDate,
            assignmentId: `assignment${this.props.data.id}`
        }
    }

    render() {
        return (
     <div className="card">
            <AssignmentHeader data={this.props.data} endDate={this.state.endDate} assignmentId={this.state.assignmentId}/>
            <AssignmentBody data={this.props.data} assignmentId={this.state.assignmentId}/>
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