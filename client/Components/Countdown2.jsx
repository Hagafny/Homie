import { dateUntil } from './../Helpers/helpers.js'
import React from 'react'
import CountdownTile from './CountdownTile.jsx';

export default class Countdown2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: []
        };
    }

    componentDidMount() {
        this.tick()
        this.interval = setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick() {
        let dUntil = dateUntil(this.props.endDate);
        this.setState({
            tiles: dUntil
        });

        // If everything is 0, stop the interval
        // if (dUntil[3] === false && dUntil[2] === false && dUntil[1] === false && dUntil[0] === false) {
        //     window.clearInterval(this.interval)
        // }
    }

    render() {
        if (!this.state.tiles) //Just validating against weird behaviour
            return false

        let tiles = this.state.tiles.map((countdownNode, index) => {
            return <CountdownTile number={countdownNode.number} title={countdownNode.title} key={index}></CountdownTile>
        })


        return (
            <div className="clockClass">
                {tiles}
            </div>
        )
    };
}
