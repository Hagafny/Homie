import React from 'react';
import AssignmentHeader from './AssignmentHeader.jsx';
import AssignmentBody from './AssignmentBody.jsx';

export default class Assignment extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleShow(showState) {
        this.props.onShowCallback(this.props.id, true)
    }

    render() {
        return (
            <div className="card" >
                <AssignmentHeader data={this.props.data} endDate={this.props.data.end_date} onShowCallback={this.props.onShowCallback} />
                <AssignmentBody data={this.props.data} onDoneChecked={this.props.onDoneChecked} />
            </div>
        )
    }
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