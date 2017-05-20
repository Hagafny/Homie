import React from 'react'
import Resource from './Resource.jsx';

export default class Resources extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="col">
                    <Resource url={this.props.data.homework}>HW</Resource>
                    <Resource url={this.props.data.moodle}>Submit</Resource>
                    <Resource url={this.props.data.piazza}>Piazza</Resource>
            </div>
        )
    };
}
