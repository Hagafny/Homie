import React from 'react';
import Header from './Header.jsx';
import Countdown from './Countdown.jsx';
import Resources from './Resources.jsx';
import DueDate from './DueDate.jsx';

export default class Assignment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header title={this.props.data.title} ex={this.props.data.ex} />
                <Countdown endDate={this.props.data.end_date} />
                <Resources data={this.props.data.resources} />
                <DueDate endDate={this.props.data.end_date} />
            </div>
        );
    }
}

