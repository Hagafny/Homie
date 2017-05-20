import React from 'react'
import Resource from './Resource.jsx';

export default class Resources extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <ul>
                <li><Resource url={this.props.data.homework}>HW</Resource></li>
                <li><Resource url={this.props.data.moodle}>Moodle</Resource></li>
                <li><Resource url={this.props.data.piazza}>Piazza</Resource></li>
            </ul>
        )
    };
}
