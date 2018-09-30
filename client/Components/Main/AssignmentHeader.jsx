import React from 'react';
import PropTypes from 'prop-types';
import DueDate from './DueDate';

function getHeaderColor(status) {
  let color = '';
  switch (status) {
    case 0:
    default:
      color = 'primary';
      break;
    case 1:
      color = 'warning';
      break;
    case 2:
      color = 'danger';
      break;
    case 3:
      color = 'success';
      break;
  }

  return `card-${color}`;
}

export default class AssignmentTitle extends React.Component {
  constructor(props) {
    super(props);
    const { status } = this.props;
    this.state = {
      color: getHeaderColor(status)
    };

    this.onCollapse = this.onCollapse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ color: getHeaderColor(nextProps.status) });
  }

  onCollapse(e) {
    e.stopPropagation();
    const self = this;
    const $assignmentHeader = $(e.currentTarget);
    const id = $assignmentHeader.attr('aria-controls');
    const showState = $(e.currentTarget).attr('aria-expanded') === 'true';
    setTimeout(() => {
      self.props.onShowCallback(id, showState); // I need to setTimeout becuase of weird stuff happening.
    }, 500);
  }

  render() {
    const { data, endDate, options } = this.props;
    const { color } = this.state;
    const seperator = data.title ? ' - ' : '';
    return (
      <div
        data-toggle="collapse"
        href={`#${data.id}`}
        aria-expanded={data.viewState.show}
        aria-controls={data.id}
        className={`card-header ${color} card_assignment_header`}
        role="tab"
        tabIndex="0"
        onClick={this.onCollapse}
        onKeyPress={this.onCollapse}
      >
        <h5 className="homieWhite">
          {data.course_title}
          {seperator}
          {data.title}
          <span> - </span>
          <DueDate endDate={endDate} options={options} />
        </h5>
      </div>
    );
  }
}

AssignmentTitle.propTypes = {
  data: PropTypes.shape().isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  options: PropTypes.shape({ date: PropTypes.number.isRequired, time: PropTypes.number.isRequired })
    .isRequired,
  status: PropTypes.number.isRequired
};
