import React from 'react';
import PropTypes from 'prop-types';
import AssignmentHeader from './AssignmentHeader';
import AssignmentBody from './AssignmentBody';

export default class Assignment extends React.Component {
  constructor(props) {
    super(props);
    const status = this.getAssignmentStatus();
    this.state = { status };
  }

  componentWillReceiveProps() {
    this.changeStatus();
  }

  getAssignmentStatus() {
    const { data } = this.props;
    if (data.viewState.done) return 3;

    const { countdown } = data;
    if (!countdown) return 0;

    const hoursRemaining = countdown[0].number * 24 + countdown[1].number;

    if (hoursRemaining <= 5) return 2;

    if (hoursRemaining <= 23) return 1;

    return 0;
  }

  changeStatus() {
    const status = this.getAssignmentStatus();
    this.setState({ status });
  }

  toggleShow() {
    const { id, onShowCallback } = this.props;
    onShowCallback(id, true);
  }

  render() {
    const { status } = this.state;
    const { data, onShowCallback, options, onDoneChecked } = this.props;
    return (
      <div className="card assignment_card">
        <AssignmentHeader
          data={data}
          status={status}
          endDate={data.end_date}
          onShowCallback={onShowCallback}
          options={options}
        />
        <AssignmentBody data={data} onDoneChecked={onDoneChecked} />
      </div>
    );
  }
}

Assignment.propTypes = {
  id: PropTypes.string.isRequired,
  onDoneChecked: PropTypes.func.isRequired,
  onShowCallback: PropTypes.func.isRequired,
  options: PropTypes.shape({ date: PropTypes.number.isRequired, time: PropTypes.number.isRequired })
    .isRequired,
  data: PropTypes.shape().isRequired
};
