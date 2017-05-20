import DateBetween from './DateBetween'
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
    let startDate = new Date()
    let endDate = new Date(this.props.endDate)
    this.setState({
      nodes: DateBetween(startDate, endDate)
    });

    //TODO: Make the event "expired" bubble up the chain so we call a normal call back (ajax call to refresh in the future) ~Ron 
    // if (remaining === false) {
    //   window.clearInterval(this.interval)
    //   this.props.options['cb'] ? this.props.options.cb() : false
    // }


  }

  render() {
    let countdown = this.state.nodes.map(countdownNode => {
      return <CountdownNode number={countdownNode.number} key={countdownNode.number+countdownNode.title}>{countdownNode.title}</CountdownNode>
    })

    return (

      <div className="react-count-down">
        {countdown}
      </div>
    )
  };
}
