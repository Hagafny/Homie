import React from 'react';
import axios from 'axios';
import AddAssignmentForm from './AddAssignmentForm.jsx';

export default class AddAssignmentFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        };

        this.handleCourseChange = this.handleCourseChange.bind(this);
        this.handleHWUrlChange = this.handleHWUrlChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleExChange = this.handleExChange.bind(this);
        this.handleMoodleIdChange = this.handleMoodleIdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let classId = this.props.match.params.classId;
        axios.get(`/api/courses/${classId}`)
            .then(courses => {
                this.setState({ courses: courses.data })
            });
    }

    handleCourseChange(event) {
        this.setState({ courseId: event.target.value });
    }

    handleHWUrlChange(event) {
        this.setState({ homeworkUrl: event.target.value });
    }
    handleEndDateChange(event) {
        this.setState({ endDate: event.target.value });
    }

    handleExChange(event) {
        this.setState({ ex: event.target.value });
    }

    handleMoodleIdChange(event) {
        this.setState({ moodleId: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();

        var url = "/api/assignments/";
        var data = JSON.stringify(this.state);

        var config = {
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        };

        axios.post(url, data, config).then((response) => {
            if (response.data.status == 200)
                alert('Assignment Saved');
        });
    }

    render() {
        return (
            <AddAssignmentForm courses={this.state.courses}
                handleCourseChange={this.handleCourseChange}
                handleHWUrlChange={this.handleHWUrlChange}
                handleEndDateChange={this.handleEndDateChange}
                handleExChange={this.handleExChange}
                handleMoodleIdChange={this.handleMoodleIdChange}
                handleSubmit={this.handleSubmit} />);
    }
}













