import React from 'react';
import Countdown from './Countdown.jsx';

export default class CountdownList extends React.Component {
    render() {

        let countdowns = this.props.assignments.map(assignment => {
            return <Countdown endDate={assignment.endDate} key={assignment.endDate} />
        });

        return (
            <div style={{ textAlign: 'center' }}>
                {countdowns}
            </div>);
    }
}