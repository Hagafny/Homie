import React from 'react';

export default class Piazza extends React.Component {
    render() {
        return (
            <a href={this.props.url}  target="_blank">Piazza</a>
        );
    }
}