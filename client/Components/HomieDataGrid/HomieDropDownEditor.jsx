import React from 'react';
const { editors: { EditorBase } } = require('react-data-grid');
import ReactDOM from 'react-dom';
export default class HomieDropDownEditor extends EditorBase {

  getInputNode() {
    return ReactDOM.findDOMNode(this);
  }

  onClick() {
    this.getInputNode().focus();
  }

  onDoubleClick() {
    this.getInputNode().focus();
  }

  render() {
    return (
      <select style={this.getStyle()} defaultValue={this.props.value} onBlur={this.props.onBlur} onChange={this.onChange} >
        {this.renderOptions()}
      </select>);
  }

  renderOptions() {
    let options = [];
    this.props.options.forEach((name) => {
      options.push(<option key={name.value} value={name.value}>{name.text}</option>);
   }, this);
     return options;
  }
}

