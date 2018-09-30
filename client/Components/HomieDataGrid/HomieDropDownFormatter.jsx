import React from 'react';
import PropTypes from 'prop-types';

export default class HomieDropDownFormatter extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { value } = this.props;
    return nextProps.value !== value;
  }

  render() {
    const { value, options } = this.props;
    let option = options.filter(v => v.value === value)[0];

    if (!option) {
      option = value;
    }
    const myValue = option.value || option;
    const { text } = option;

    return <div title={myValue}>{text}</div>;
  }
}

HomieDropDownFormatter.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  value: PropTypes.string.isRequired
};
