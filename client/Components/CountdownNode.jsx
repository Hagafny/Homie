import React from 'react'

export default class CountdownNode extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="countdown-node">
        <span>{this.props.number} </span>
        <span>{this.props.children}</span>
      </div>
    )
  };
}
