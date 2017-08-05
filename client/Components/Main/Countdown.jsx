import React from 'react'
import CountdownTile from './CountdownTile.jsx';

const Countdown = (props) =>  {
        if (!props.countdown) //Just validating against weird behaviour
            return false

        let tiles = props.countdown.map((countdownNode, index) => {
            return <CountdownTile number={countdownNode.number} title={countdownNode.title} key={index}></CountdownTile>
        })

        return (
            <div className="countdown">
                {tiles}
            </div>
        )
}

export default Countdown;