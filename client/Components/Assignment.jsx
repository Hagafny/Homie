import React from 'react';
import Header from './Header.jsx';
import Countdown from './Countdown.jsx';
import Resources from './Resources.jsx';
import DueDate from './DueDate.jsx';
import Title from './Title.jsx';

export default class Assignment extends React.Component {
    constructor(props) {
        super(props);;
        let endDate = getTimezonedDate(this.props.data.end_date);
        this.state = {
            endDate: endDate
        }
    }

    render() {
        return (
            <div className="row assignment">
                <Title title={this.props.data.title} ex={this.props.data.ex} endDate={this.state.endDate} />
                <Countdown endDate={this.state.endDate} />
                <Resources data={this.props.data.resources} />
            </div>
        );
    }
}

function getTimezonedDate(dateString) {
    let endDate = new Date(dateString);

    if (location.hostname != "localhost") {
        endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset());
    }

    return endDate;
}

