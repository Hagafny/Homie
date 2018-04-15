import React from 'react'

const CountdownTile = (props) =>  
            <div>
                <span className="homieWhite">{props.number}</span>
                <div className="smalltext homieWhite">{props.title}</div>
            </div>
        
export default CountdownTile;