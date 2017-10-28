import React from 'react'
export default class DueDate extends React.Component {

    constructor(props) {
        super(props);
        this.state = formatFullDate(this.props.endDate, this.props.options);
    }

    componentWillReceiveProps({options}) {
        if (options != this.props.options) {
            this.setState(formatFullDate(this.props.endDate, options));
        }
    }

    render() {
        return (
            <span>{this.state.date} {this.state.time}</span>
        )
    };
}

let formatFullDate = (dueDate, options = { date: 1, time: 1  }) => {
    return {
        date: formatDate(dueDate, options.date),
        time: formatTime(dueDate, options.time)
    }
}

const formatDate = (dueDate, dateOption) => {
    let years = dueDate.getFullYear();
    let months = formatNumber(dueDate.getMonth() + 1);
    let days = formatNumber(dueDate.getDate());
    return dateOption == 1 ? `${days}/${months}/${years}` :
        `${months}/${days}/${years}`;
}

const formatTime = (dueDate, timeOption) => {
    let minutes = formatNumber(dueDate.getMinutes());
    let hours = dueDate.getHours();
    let suffix = '';
    if (timeOption == 2) {
        suffix = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'    
    }

    hours = formatNumber(hours);

    return `${hours}:${minutes}${suffix}`;
}

const formatNumber = (num) => {
    return parseInt(num, 10) < 10 ? `0${num}` : num;
}


function formatAMPM(date) {
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}