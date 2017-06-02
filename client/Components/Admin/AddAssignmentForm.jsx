import React from 'react';
import axios from 'axios';
import SelectBox from './../Misc/SelectBox.jsx';

export default class AddAssignmentForm extends React.Component {
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

        axios.post(url, data, config).then(function (response) {
            if (response.data.status == 200)
                alert('Assignment Saved');
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <span className="addAssignmentFormLabel">
                        Course: </span>
                    <SelectBox options={this.state.courses} handleCourseChange={this.handleCourseChange} />
                </label>

                <br />

                <label>
                    <span className="addAssignmentFormLabel">
                        HW URL: </span>
                    <input type="text" value={this.state.homeworkUrl} onChange={this.handleHWUrlChange} />
                </label>

                <br />
                <label >
                    <span className="addAssignmentFormLabel">
                        End Date: </span>

                    <input type="text" value={this.state.endDate} onChange={this.handleEndDateChange} />
                </label>

                <br />

                <label>
                    <span className="addAssignmentFormLabel">
                        Exercise #:</span>
                    <input type="text" value={this.state.ex} onChange={this.handleExChange} />
                </label>

                <br />

                <label>
                    <span className="addAssignmentFormLabel">
                        Moodle ID: </span>
                    <input type="text" value={this.state.moodleId} onChange={this.handleMoodleIdChange} />
                </label>

                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}













