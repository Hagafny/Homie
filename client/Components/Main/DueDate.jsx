import React from 'react';
import PropTypes from 'prop-types';

const formatNumber = num => (parseInt(num, 10) < 10 ? `0${num}` : num);

const formatDate = (dueDate, dateOption) => {
  const years = dueDate.getFullYear();
  const months = formatNumber(dueDate.getMonth() + 1);
  const days = formatNumber(dueDate.getDate());
  return dateOption === 1 ? `${days}/${months}/${years}` : `${months}/${days}/${years}`;
};

const formatTime = (dueDate, timeOption) => {
  const minutes = formatNumber(dueDate.getMinutes());
  let hours = dueDate.getHours();
  let suffix = '';
  if (timeOption === 2) {
    suffix = hours >= 12 ? ' PM' : ' AM';
    hours %= 12;
    hours = hours === 0 ? hours : 12; // the hour '0' should be '12'
  }

  hours = formatNumber(hours);

  return `${hours}:${minutes}${suffix}`;
};

const formatFullDate = (dueDate, options = { date: 1, time: 1 }) => ({
  date: formatDate(dueDate, options.date),
  time: formatTime(dueDate, options.time)
});

export default class DueDate extends React.Component {
  constructor({ endDate, options }) {
    super({ endDate, options });
    this.state = formatFullDate(endDate, options);
  }

  componentWillReceiveProps(newProps) {
    const { endDate, options } = this.props;
    if (newProps.options !== options) {
      this.setState(formatFullDate(endDate, options));
    }
  }

  render() {
    const { date, time } = this.state;
    return (
      <span>
        {date}
        {time}
      </span>
    );
  }
}

DueDate.propTypes = {
  endDate: PropTypes.instanceOf(Date).isRequired,
  options: PropTypes.shape({
    date: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired
  }).isRequired
};
