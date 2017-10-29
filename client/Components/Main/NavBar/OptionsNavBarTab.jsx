import React from 'react';
import DateOptionToggle from './DateOptionToggle.jsx';
import TimeOptionToggle from './TimeOptionToggle.jsx';

export default class OptionsNavBarTab extends React.Component {

    constructor(props) {
        super(props);
        this.onDateOptionSelect = this.onDateOptionSelect.bind(this);
        this.onTimeOptionSelect = this.onTimeOptionSelect.bind(this);
    }

    onDateOptionSelect(value) {
      this.props.changeOptions("date", value);
    }

    onTimeOptionSelect(value) {
      this.props.changeOptions("time", value);
    }


    render() {
        const { date, time } = this.props.options;

        return (<li className="nav-item active dropdown">
            <a className="nav-link dropdown-toggle" id="optionsDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Options</a>
            <ul className="dropdown-menu" aria-labelledby="optionsDropDown">
               <DateOptionToggle selectedDate={date} onDateOptionSelect={this.onDateOptionSelect} />
               <TimeOptionToggle selectedTime={time} onTimeOptionSelect={this.onTimeOptionSelect} />
            </ul>
        </li>)
    };
}