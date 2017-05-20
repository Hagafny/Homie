import React from 'react'

export default class Resources extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.url)
      return false;

    return (
      <li><a href={this.props.url} target="_blank">{this.props.children}</a></li>
    )
  };
}
