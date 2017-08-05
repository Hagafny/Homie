import React from 'react';

export default class HomieDropDownFormatter extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
  }

  render()  {
    let value = this.props.value;
    let option = this.props.options.filter((v) => {
      return v.value === value;
    })[0];
    if (!option) {
      option = value;
    }
    let myValue = option.value || option;
    let text = option.text;

    return <div title={myValue}>{text}</div>;
  }
};