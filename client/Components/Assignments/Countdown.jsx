import React from 'react'
import CountdownTile from './CountdownTile.jsx';

export default class Countdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.countdown) //Just validating against weird behaviour
            return false

        let tiles = this.props.countdown.map((countdownNode, index) => {
            return <CountdownTile number={countdownNode.number} title={countdownNode.title} key={index}></CountdownTile>
        })

        return (
            <div className="countdown">
                {tiles}
            </div>
        )
    };
}
