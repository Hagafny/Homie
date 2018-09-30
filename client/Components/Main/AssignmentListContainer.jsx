import React from 'react';
import PropTypes from 'prop-types';
import AssignmentList from './AssignmentList';
import localStorageService from '../../Scripts/localStorageService';
import countdownTick from '../../Scripts/countdownTick';

function getTimezonedDate(dateString) {
  if (typeof dateString === 'object') return dateString;

  const endDate = new Date(dateString);

  if (window.location.hostname !== 'localhost') {
    endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset());
  }

  return endDate;
}

// First order by done > not done, then by end date. If end dates are equeal, show the one who was added first as the first one.
function assignmentSorter(a, b) {
  if (a.viewState.done !== b.viewState.done) {
    return a.viewState.done ? 1 : -1;
  }

  const dateDiference = a.end_date - b.end_date;
  if (dateDiference !== 0) return dateDiference;

  return parseInt(a.id.substring(1), 10) - parseInt(b.id.substring(1), 10);
}

export default class AssignmentListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: []
    };

    this.onDoneCheckedCallback = this.onDoneCheckedCallback.bind(this);
    this.onShowCallback = this.onShowCallback.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    const timeIntervalBetweenFetchingData = 1000 * 60 * 30; // 30 minutes
    const { loadAssignments } = this.props;
    this.refreshAssignmentsInterval = setInterval(loadAssignments, timeIntervalBetweenFetchingData);
    this.tickInterval = setInterval(this.tick, 1000);
  }

  componentWillReceiveProps(nextProps) {
    localStorageService.setupAssignmentsState(nextProps.assignments, () => {
      this.performClientSideModifications(nextProps.assignments);
    });
  }

  componentWillUnmount() {
    clearInterval(this.refreshAssignmentsInterval);
    clearInterval(this.tickInterval);
  }

  onShowCallback(id, showState) {
    localStorageService.changeShowState(id, showState, () => {
      this.performClientSideModifications();
    });
  }

  onDoneCheckedCallback(id, doneState) {
    if (doneState) {
      localStorageService.changeShowState(id, false);
    }

    localStorageService.changeDoneState(id, doneState, () => {
      this.performClientSideModifications();
    });
  }

  tick() {
    const { assignments } = this.state;
    const assignmentsLength = assignments.length;
    for (let i = 0; i < assignmentsLength; i += 1) {
      if (!assignments[i])
        // Validators
        return;

      const dateUntilEnd = countdownTick(assignments[i].end_date);

      if (!dateUntilEnd) {
        // Removing assignment when it's done.
        assignments.splice(i, 1);
      }

      assignments[i].countdown = dateUntilEnd;
    }

    this.setState({ assignments });
  }

  performClientSideModifications(asgmnts) {
    const filteredClasses = localStorageService.getFilteredList();
    let { assignments } = this.state;
    assignments = asgmnts || assignments;
    assignments = assignments.filter(assignment => !filteredClasses.includes(assignment.course_id));

    assignments = localStorageService.refreshViewState(assignments);
    assignments = assignments.map(asgmnt => {
      const assignment = asgmnt;
      assignment.end_date = getTimezonedDate(assignment.end_date);
      return assignment;
    });

    assignments.sort(assignmentSorter);
    this.setState({ assignments });
  }

  render() {
    const { options } = this.props;
    const { assignments } = this.state;
    return (
      // <div>
      <AssignmentList
        assignments={assignments}
        onDoneChecked={this.onDoneCheckedCallback}
        onShowCallback={this.onShowCallback}
        options={options}
      />
    );
  }
}

AssignmentListContainer.propTypes = {
  loadAssignments: PropTypes.func.isRequired,
  options: PropTypes.shape({ date: PropTypes.number.isRequired, time: PropTypes.number.isRequired })
    .isRequired,
  assignments: PropTypes.arrayOf(PropTypes.any).isRequired
};
