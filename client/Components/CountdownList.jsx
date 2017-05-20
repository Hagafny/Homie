import React from 'react';
import Countdown from './Countdown.jsx';

export default class CountdownList extends React.Component {
    render() {

        let countdowns = this.props.endDates.map(endDate => {
            return <Countdown endDate={endDate} key={endDate} />
        });

        return (
            <div style={{ textAlign: 'center' }}>
                {countdowns}
            </div>);
    }
}