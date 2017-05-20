import React from 'react';
import { setDateTime } from './../Helpers/helpers.js'
import Countdown from './Countdown.jsx';
import MoodleLink from './MoodleLink.jsx';
import PiazzaLink from './PiazzaLink.jsx';
import DownloadLink from './DownloadLink.jsx'
export default class Assignment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endDate: setDateTime(this.props.data.end_date, this.props.data.end_time)
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.data.title}</h1>
                <MoodleLink url={this.props.data.moodle_url} />
                <Countdown endDate={this.state.endDate} />
                <PiazzaLink url={this.props.data.piazza_url} />
                <DownloadLink url={this.props.data.homework_url} />
            </div>
        );
    }
}

