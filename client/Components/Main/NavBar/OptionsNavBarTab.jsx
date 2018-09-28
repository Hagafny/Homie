import React from 'react';
import PropTypes from 'prop-types';
import DateOptionToggle from './DateOptionToggle';
import TimeOptionToggle from './TimeOptionToggle';

export default class OptionsNavBarTab extends React.Component {
  constructor(props) {
    super(props);
    this.onDateOptionSelect = this.onDateOptionSelect.bind(this);
    this.onTimeOptionSelect = this.onTimeOptionSelect.bind(this);
  }

  onDateOptionSelect(value) {
    const { changeOptions } = this.props;
    changeOptions('date', value);
  }

  onTimeOptionSelect(value) {
    const { changeOptions } = this.props;
    changeOptions('time', value);
  }

  render() {
    const { options } = this.props;

    return (
      <li className="nav-item active dropdown">
        <a
          className="nav-link dropdown-toggle clickable"
          id="optionsDropDown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          href="#nothing"
        >
          Options
        </a>
        <ul className="dropdown-menu" aria-labelledby="optionsDropDown">
          <DateOptionToggle
            selectedDate={options.date}
            onDateOptionSelect={this.onDateOptionSelect}
          />
          <TimeOptionToggle
            selectedTime={options.time}
            onTimeOptionSelect={this.onTimeOptionSelect}
          />
        </ul>
      </li>
    );
  }
}

OptionsNavBarTab.propTypes = {
  changeOptions: PropTypes.func.isRequired,
  options: PropTypes.shape({ date: PropTypes.number.isRequired, time: PropTypes.number.isRequired })
    .isRequired
};
