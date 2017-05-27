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
      <div>
        <img src={this.props.img} alt="" height="20" width="20" />
        <span className="resource">  <a href={url} target="_blank">{this.props.children}</a></span>
      </div>

    )
  };
}
