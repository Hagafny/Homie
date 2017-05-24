import React from 'react'

export default class CountdownTile extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <span>{this.props.number}</span>
                <div className="smalltext">{this.props.title}</div>
            </div>
        )
    };
}
