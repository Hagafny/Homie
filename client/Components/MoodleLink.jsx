import React from 'react';

export default class Moodle extends React.Component {
    render() {
        return (
            <a href={this.props.url}  target="_blank">Moodle</a>
        );
    }
}