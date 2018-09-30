import React from 'react';

const {
  editors: { EditorBase }
} = require('react-data-grid');

export default class HomieDropDownEditor extends EditorBase {
  getInputNode() {
    return this.node;
  }

  onClick() {
    this.getInputNode().focus();
  }

  onDoubleClick() {
    this.getInputNode().focus();
  }

  render() {
    return (
      <select
        style={this.getStyle()}
        defaultValue={this.props.value}
        onBlur={this.props.onBlur}
        onChange={this.onChange}
        ref={node => {
          this.node = node;
        }}
      >
        {this.renderOptions()}
      </select>
    );
  }

  renderOptions() {
    const options = [];
    this.props.options.forEach(name => {
      options.push(
        <option key={name.value} value={name.value}>
          {name.text}
        </option>
      );
    }, this);
    return options;
  }
}
