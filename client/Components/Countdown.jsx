import { dateUntil } from './../Helpers/helpers.js'
import React, { Component, PropTypes } from 'react'
import CountdownNode from './CountdownNode.jsx';
export default class Countdown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nodes: []
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
      nodes: dUntil
    });

    // If everything is 0, stop the interval
    if (dUntil[3] === false && dUntil[2] === false && dUntil[1] === false && dUntil[0] === false) {
      window.clearInterval(this.interval)
    }
  }

  render() {
    let countdown = this.state.nodes.map((countdownNode, index) => {
      return <CountdownNode number={countdownNode.number} key={index}>{countdownNode.title}</CountdownNode>
    })

    return (
      <div className="react-count-down col-sm-3">
        {countdown}
      </div>
    )
  };
}
