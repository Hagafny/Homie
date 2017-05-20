import React from 'react';
import { setDateTime } from './../Helpers/helpers.js'
import Countdown from './Countdown.jsx';
import MoodleLink from './MoodleLink.jsx';
import PiazzaLink from './PiazzaLink.jsx';
import DownloadLink from './DownloadLink.jsx'
import Resources from './Resources.jsx';

export default class Assignment extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.data.title}</h1>
                <Countdown endDate={this.props.data.end_date} />
                <Resources data={this.props.data.resources} />
            </div>
        );
    }
}

