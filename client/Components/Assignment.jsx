import React from 'react';
import Countdown from './Countdown.jsx';
import MoodleLink from './MoodleLink.jsx';
import PiazzaLink from './PiazzaLink.jsx';
import DownloadLink from './DownloadLink.jsx'
export default class Assignment extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.data.title}</h1>
                <MoodleLink url={this.props.data.moodle} />
                <Countdown endDate={this.props.data.endDate} />
                <PiazzaLink url={this.props.data.piazza} />
                <DownloadLink url={this.props.data.download} />
            </div>
            );
    }
}