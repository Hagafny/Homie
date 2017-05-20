import React from 'react';
import Header from './Header.jsx';
import Countdown from './Countdown.jsx';
import Resources from './Resources.jsx';
import DueDate from './DueDate.jsx';
import Title from './Title.jsx';

export default class Assignment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row assignment">
                <Title title={this.props.data.title} ex={this.props.data.ex} endDate={this.props.data.end_date}/>
                <Countdown endDate={this.props.data.end_date} />
                <Resources data={this.props.data.resources} />
            </div>
        );
    }
}

