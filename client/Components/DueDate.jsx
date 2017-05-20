import React from 'react'

export default class DueDate extends React.Component {

    constructor(props) {
        super(props)
        this.state = formatDate(this.props.endDate);
    }

    render() {
        return (
            <div>
                <span>{this.state.date}, {this.state.time}</span>
            </div>
        )
    };
}

let formatDate = (dueDate) => {
    let d = new Date(dueDate);

    let years = d.getFullYear();
    let months = formatNumber(d.getMonth() + 1);
    let days = formatNumber(d.getDate());
    let date = `${days}/${months}/${years}`;

    let hours = formatNumber(d.getHours());
    let minutes = formatNumber(d.getMinutes());
    let time = `${hours}:${minutes}`;

    return {
        date: date,
        time: time
    }
}

let formatNumber = (num) => {
    return parseInt(num, 10) < 10 ? `0${num}` : num;
}
