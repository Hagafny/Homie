import React from 'react';
import axios from 'axios';
import FlipMove from 'react-flip-move';
import localStorageService from './../../Scripts/localStorageService.js';
import countdownTick  from './../../Scripts/countdownTick.js';
import Assignment from './Assignment.jsx';

export default class AssignmentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            assignments: []
        };

    }

    componentDidMount() {
        this.refreshAssignments(() => {
            this.tick();
            this.tickInterval = setInterval(this.tick.bind(this), 1000);
        });
        let timeIntervalBetweenFetchingData = 1000 * 60 * 30; // 30 minutes
        this.refreshAssignmentsInterval = setInterval(this.refreshAssignments.bind(this), timeIntervalBetweenFetchingData);

    }

    componentWillUnmount() {
        clearInterval(this.refreshAssignmentsInterval);
        clearInterval(this.tickInterval);
    }

    tick() {
        let assignments = this.state.assignments;

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

        this.setState(assignments);
    }

    refreshAssignments(cb) {
        let classId = this.props.classId || 1;

        axios.get(`/api/assignment/${classId}`)
            .then(assignmentsRes => {
                let assignments = assignmentsRes.data;
                localStorageService.setupAssignmentsState(assignments, () => {
                    this.performClientSideModifications(assignments);

                    if (typeof cb === typeof Function)
                        cb();
                });
            });
    }

    performClientSideModifications(assignments) {
        assignments = assignments || this.state.assignments;
        assignments = localStorageService.refreshViewState(assignments);
        assignments = assignments.map((assignment) => {
            assignment.end_date = getTimezonedDate(assignment.end_date);
            return assignment;
        })

        assignments.sort(assignmentSorter);
        this.setState({ assignments: assignments });
    }

    onDoneCheckedCallback(id, doneState) {
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
        let assignments = this.state.assignments.map(assignment => {
            return <Assignment data={assignment} key={assignment.id} onDoneChecked={this.onDoneCheckedCallback.bind(this)} onShowCallback={this.onShowCallback.bind(this)} />
        });

        return (
            <div className="container assignmentList" role="tablist">
                <FlipMove duration={750} easing="ease">
                    {assignments}
                </FlipMove>

            </div>);
    }
}

function assignmentSorter(a, b) {
    if (a.viewState.done != b.viewState.done) {
        return a.viewState.done ? 1 : -1;
    }
    else {
        return a.end_date - b.end_date;
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











