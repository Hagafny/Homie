import React from 'react';
import SoundOptionToggle from './SoundOptionToggle.jsx';
import DateOptionToggle from './DateOptionToggle.jsx';
import TimeOptionToggle from './TimeOptionToggle.jsx';

export default class OptionsNavBarTab extends React.Component {

    constructor(props) {
        super(props);
        this.onDateOptionSelect = this.onDateOptionSelect.bind(this);
        this.onTimeOptionSelect = this.onTimeOptionSelect.bind(this);
        this.onSoundOptionSelect = this.onSoundOptionSelect.bind(this);
    }

    onDateOptionSelect(value) {
        this.props.changeOptions("date", value);
    }

    onTimeOptionSelect(value) {
        this.props.changeOptions("time", value);
    }

    onSoundOptionSelect(value) {
        this.props.changeOptions("sound", value);
    }

    render() {
        const { date, time, sound } = this.props.options;

        return (<li className="nav-item active dropdown">
            <a className="nav-link dropdown-toggle clickable" id="optionsDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Options</a>
            <ul className="dropdown-menu" aria-labelledby="optionsDropDown">
                <SoundOptionToggle selectedSound={sound} onSoundOptionSelect={this.onSoundOptionSelect} />
                <DateOptionToggle selectedDate={date} onDateOptionSelect={this.onDateOptionSelect} />
                <TimeOptionToggle selectedTime={time} onTimeOptionSelect={this.onTimeOptionSelect} />
            </ul>
        </li>)
    };
}