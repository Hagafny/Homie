import React from 'react'

export default class DueDate extends React.Component {

    constructor(props) {
        super(props)
        this.state = formatDate(this.props.endDate);
    }

    render() {
        return (
                <span>{this.state.date} {this.state.time}</span>
        )
    };
}

let formatDate = (dueDate) => {
    let years = dueDate.getFullYear();
    let months = formatNumber(dueDate.getMonth() + 1);
    let days = formatNumber(dueDate.getDate());
    let date = `${days}/${months}/${years}`;

    let hours = formatNumber(dueDate.getHours());
    let minutes = formatNumber(dueDate.getMinutes());
    let time = `${hours}:${minutes}`;

    return {
        date: date,
        time: time
    }
}

let formatNumber = (num) => {
    return parseInt(num, 10) < 10 ? `0${num}` : num;
}
