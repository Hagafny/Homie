import React from 'react'

export default class Resources extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.url)
      return false;

    let url = this.props.prefix ? `${this.props.prefix}${this.props.url}` : this.props.url;
    return (
        <a className="card-link" href={url} target="_blank">{this.props.children}</a>
    )
  };
}
