import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';

export default class DoneButton extends React.Component {
  constructor(props) {
    super(props);
    this.doneChecked = this.doneChecked.bind(this);
  }

  doneChecked(e) {
    e.stopPropagation();
    const { id, onDoneChecked } = this.props;
    onDoneChecked(id, e.target.checked);
  }

  render() {
    const { done } = this.props;

    return (
      <span>
        <span>Done</span>
        <br />
        <Toggle defaultChecked={done} onChange={this.doneChecked} />
      </span>
    );
  }
}

DoneButton.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onDoneChecked: PropTypes.func.isRequired
};
