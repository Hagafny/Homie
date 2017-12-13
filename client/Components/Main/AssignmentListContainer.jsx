import React from 'react';
import AssignmentList from './AssignmentList.jsx';
import localStorageService from './../../Scripts/localStorageService.js';
import countdownTick from './../../Scripts/countdownTick.js';

export default class AssignmentListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assignments: [],
        };

        this.onDoneCheckedCallback = this.onDoneCheckedCallback.bind(this);
        this.onShowCallback = this.onShowCallback.bind(this);
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        // this.props.loadAssignmentsNoState().then(assignments => {
        //     localStorageService.setupAssignmentsState(assignments, () => {
        //         this.performClientSideModifications(assignments);
        //         this.tick();
        //     });
        // });

        const timeIntervalBetweenFetchingData = 1000 * 60 * 30; // 30 minutes

        this.refreshAssignmentsInterval = setInterval(this.props.loadAssignments, timeIntervalBetweenFetchingData);
        this.tickInterval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.refreshAssignmentsInterval);
        clearInterval(this.tickInterval);
    }

    componentWillReceiveProps(nextProps) {
        localStorageService.setupAssignmentsState(nextProps.assignments, () => {
            this.performClientSideModifications(nextProps.assignments);
            //  this.tick();
        });
    }

    tick() {

        let assignments = this.state.assignments;;
        let assignmentsLength = assignments.length;
        for (let i = 0; i < assignmentsLength; i++) {
            if (!assignments[i]) //Validators
                continue;

            let dateUntilEnd = countdownTick(assignments[i].end_date);

            if (!dateUntilEnd) { //Removing assignment when it's done.
                assignments.splice(i, 1);
            }

            assignments[i].countdown = dateUntilEnd;
        }

        this.setState({ assignments });
    }

    performClientSideModifications(assignments) {
        let filteredClasses = localStorageService.getFilteredList();

        assignments = assignments || this.state.assignments;
        assignments = assignments.filter(assignment => !filteredClasses.includes(assignment.course_id));

        assignments = localStorageService.refreshViewState(assignments);
        assignments = assignments.map((assignment) => {
            assignment.end_date = getTimezonedDate(assignment.end_date);
            return assignment;
        })

        assignments.sort(assignmentSorter);
        this.setState({ assignments });
    }

    onDoneCheckedCallback(id, doneState) {

        //Close the assignments when it's done
        if (doneState)
            localStorageService.changeShowState(id, false);


        localStorageService.changeDoneState(id, doneState, () => {
            this.performClientSideModifications();
        });
    }

    onShowCallback(id, showState) {
        localStorageService.changeShowState(id, showState, () => {
            this.performClientSideModifications();
        });
    }


    render() {
        return (
            <AssignmentList
                assignments={this.state.assignments}
                onDoneChecked={this.onDoneCheckedCallback}
                onShowCallback={this.onShowCallback}
                options={this.props.options} />
        )
    }
}

// First order by done > not done, then by end date. If end dates are equeal, show the one who was added first as the first one.
function assignmentSorter(a, b) {
    if (a.viewState.done != b.viewState.done) {
        return a.viewState.done ? 1 : -1;
    }
    else {
        let dateDiference = a.end_date - b.end_date;
        if (dateDiference != 0)
            return dateDiference;
        else {
            return parseInt(a.id.substring(1)) - parseInt(b.id.substring(1));
        }
    }
}

function getTimezonedDate(dateString) {
    if (typeof dateString == "object")
        return dateString;

    let endDate = new Date(dateString);

    if (location.hostname != "localhost") {
        endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset());
    }

    return endDate;
}