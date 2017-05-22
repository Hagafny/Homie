import React from 'react'
import Resource from './Resource.jsx';

export default class Resources extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <Resource url={this.props.data.homework}>HW</Resource>
                <Resource url={this.props.data.moodle}>Submit</Resource>
                <Resource url={this.props.data.lecture}>Lecture</Resource>
                <Resource url={this.props.data.recitation}>Recitation</Resource>
                <Resource prefix={"https://piazza.com/class/"} url={this.props.data.piazza}>Piazza</Resource>
            </div>
        )
    };
}
