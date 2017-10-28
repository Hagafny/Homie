import React from 'react';
import axios from 'axios';
import AssignmentPage from './AssignmentPage.jsx';
import { addToFilteredList, getFilteredList, resetFilteredList } from './../../Scripts/localStorageService.js';

export default class AssignmentsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assignments: [],
            allAssignments: [],
            courses: [],
            allCourses: []
        };

        this.loadAssignments = this.loadAssignments.bind(this);
        this.loadAssignmentsAndSetState = this.loadAssignmentsAndSetState.bind(this);
        this.filterCourse = this.filterCourse.bind(this);
        this.resetCourses = this.resetCourses.bind(this);
    }

    componentDidMount() {
        let gatherDataPromise = [this.loadAssignments(), this.loadCourses()];
        Promise.all(gatherDataPromise)
        .then(values => {
            this.setState({
                assignments: values[0],
                allAssignments: values[0],
                courses: values[1],
                allCourses: values[1]
            });
        })
        .catch(err => alert(err)); 
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
        addToFilteredList(courseId, () => {
            let filteredClasses = getFilteredList();
            let assignments = this.state.assignments.filter(assignment => !filteredClasses.includes(assignment.course_id));
            let courses = this.state.courses.filter(course => !filteredClasses.includes(course.id));

            this.setState({
                assignments,
                courses
            });
        })

    }

    resetCourses() {
        resetFilteredList();
        this.setState({
            assignments: this.state.allAssignments,
            courses: this.state.allCourses
        });
    }

    render() {  
        return (
            <AssignmentPage
                courses={this.state.courses}
                resetCourses={this.resetCourses}
                filterCourse={this.filterCourse}
                assignments={this.state.assignments}
                loadAssignments={this.loadAssignmentsAndSetState} />
        )
    }
}