import React from 'react'
import CountdownTile from './CountdownTile.jsx';

const Countdown = ({countdown}) =>  {
        if (!countdown) //Just validating against weird behaviour
            countdown = [{
                number: "",
                title: "Days"
            },
            {
                number: "",
                title: "Hours"
            },
            {
                number: "",
                title: "Minutes"
            },
            {
                number: "",
                title: "Seconds"
            },
            ]

        let tiles = countdown.map((countdownNode, index) => {
            return <CountdownTile number={countdownNode.number} title={countdownNode.title} key={index}></CountdownTile>
        })

        return (
            <div className="countdown">
                {tiles}
            </div>
        )
}

export default Countdown;