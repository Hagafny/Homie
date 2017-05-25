import React from 'react';
import axios from 'axios';
import FlipMove from 'react-flip-move';
import localStorageService from './../Helpers/localStorageService.js';
import Assignment from './Assignment.jsx';

export default class AssignmentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            assignments: []
        };
    }

    componentDidMount() {
        this.refreshAssignments();
        let timeIntervalBetweenFetchingData = 1000 * 60 * 30; // 30 minutes
        this.interval = setInterval(this.refreshAssignments.bind(this), timeIntervalBetweenFetchingData);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    refreshAssignments() {
        console.log('fetching uus');
        axios.get(`/api/assignment`)
            .then(assignmentsRes => {
                let assignments = assignmentsRes.data;
                localStorageService.setupAssignmentsState(assignments, () => {
                    this.performClientSideModifications(assignments);
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
            return <Assignment data={assignment} key={assignment.id} onDoneChecked={this.onDoneCheckedCallback.bind(this)} onShowCallback={this.onShowCallback.bind(this)} refreshAssignments={this.refreshAssignments.bind(this)} />
        });

        /*const assignments =  this.state.assignments.map(assignment => (
            <FlipMove duration={750} easing="ease-out">
                {articles.map(article => (
                    <Article key={article.id} {...article} />
                ))}
            </FlipMove>
        );*/


        return (
            <div className="container" role="tablist" id="assignmentsList">
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
    let endDate = new Date(dateString);

    if (location.hostname != "localhost") {
        endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset());
    }

    return endDate;
}











