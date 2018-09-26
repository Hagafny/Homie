import React from 'react';
import Toggle from 'react-toggle';

export default class DoneButton extends React.Component {
  doneChecked(e) {
    e.stopPropagation();
    const { id, onDoneChecked } = this.props;
    onDoneChecked(id, e.target.checked);
  }

  render() {
    const { done, doneChecked } = this.props;

    return (
      <span>
        <span>Done</span>
        <br />
        <Toggle defaultChecked={done} onChange={doneChecked.bind(this)} />
      </span>
    );
  }
}
