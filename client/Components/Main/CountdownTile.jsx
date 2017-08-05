import React from 'react'

const CountdownTile = (props) =>  
            <div>
                <span>{props.number}</span>
                <div className="smalltext">{props.title}</div>
            </div>
        
export default CountdownTile;