import React from 'react';
import CountdownList from './CountdownList.jsx';

export default class CountdownPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endDates: ['06/08/2017 10:55 AM','06/08/2018 10:55 AM'],
        }
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Countdown Page</h1>
                <CountdownList endDates={this.state.endDates} />
            </div>);
    }
}