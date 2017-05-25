import { dateUntil } from './../Helpers/helpers.js'
import React from 'react'
import CountdownTile from './CountdownTile.jsx';

export default class Countdown extends React.Component {
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

        this.props.tickCB(dUntil); //We want to maybe change the stats (header color) based on how much time we have left
        // If everything is 0, stop the interval
        if (dUntil[3].number == 0 &&
            dUntil[2].number == 0 &&
            dUntil[1].number == 0 &&
            dUntil[0].number == 0) {
            this.props.refreshAssignments(); //Need to check if works on DB.
            window.clearInterval(this.interval)
        }
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
