import React from 'react'

export default class CountdownTile extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <span className="countdown-tile">{this.props.number}</span>
        )
    };
}
