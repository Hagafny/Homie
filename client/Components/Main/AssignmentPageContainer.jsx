import React from 'react';
import axios from 'axios';
import AssignmentPage from './AssignmentPage.jsx';
import localStorageService from './../../Scripts/localStorageService.js';
import countdownTick from './../../Scripts/countdownTick.js';

export default class AssignmentsPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assignments: [],
            allAssignments: [],
            courses: [],
            allCourses: [],
            options: localStorageService.getOptions()
        };

        this.loadAssignments = this.loadAssignments.bind(this);
        this.loadAssignmentsAndSetState = this.loadAssignmentsAndSetState.bind(this);
        this.filterCourse = this.filterCourse.bind(this);
        this.resetCourses = this.resetCourses.bind(this);
        this.changeOption = this.changeOption.bind(this);
    }

    componentDidMount() {
        this.loadAssignments()
            .then(assignments => {

                this.setState({
                    allAssignments: assignments
                })


                localStorageService.setupAssignmentsState(assignments, () => {
                    this.performClientSideModifications(assignments);
                    this.tick();
                });
            })

        this.loadCourses().then(courses => {
            this.setState({
                courses: courses,
                allCourses: courses
            })
        })
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

        this.setState({ assignments });
    }

    loadCourses() {
        return new Promise((resolve, reject) => {
            let classIds = this.props.match.params.classIds || 1;
            axios.get(`/api/courses/basic/${classIds}`)
                .then(coursesRes => {
                    resolve(coursesRes.data);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    loadAssignments() {
        return new Promise((resolve, reject) => {
            let classIds = this.props.match.params.classIds || 1
            axios.get(`/api/assignments/${classIds}`)
                .then(assignmentRes => {
                    console.log(assignmentRes.data);
                    resolve(assignmentRes.data);
                })
                .catch(err => {
                    reject(err);
                })
        })

    }

    loadAssignmentsAndSetState() {
        return new Promise((resolve, ) => {
            this.loadAssignments().then((assignments) => {
                this.setState({ assignments });
            })
        })

    }

    filterCourse(courseId) {
        localStorageService.addToFilteredList(courseId, () => {
            let filteredClasses = localStorageService.getFilteredList();
            let assignments = this.state.assignments.filter(assignment => !filteredClasses.includes(assignment.course_id));
            let courses = this.state.courses.filter(course => !filteredClasses.includes(course.id));

            this.setState({
                assignments,
                courses
            });
        })

    }

    resetCourses() {
        localStorageService.resetFilteredList();
        this.setState({
            assignments: this.state.allAssignments,
            courses: this.state.allCourses
        });
    }

    changeOption(option, optionValue) {
        localStorageService.changeOption(option, optionValue, () => {
            this.setState({
                options: localStorageService.getOptions()
            })
        });

    }
    render() {
        return (
            <AssignmentPage
                courses={this.state.courses}
                resetCourses={this.resetCourses}
                filterCourse={this.filterCourse}
                assignments={this.state.assignments}
                loadAssignments={this.loadAssignmentsAndSetState}
                loadAssignmentsNoState={this.loadAssignments}
                options={this.state.options}
                changeOptions={this.changeOption} />
        )
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