import React from 'react';
import axios from 'axios';
export default class AddAssignmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleCourseChange = this.handleCourseChange.bind(this);
        this.handleHWUrlChange = this.handleHWUrlChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleExChange = this.handleExChange.bind(this);
        this.handleMoodleIdChange = this.handleMoodleIdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        var url = "/api/assignment/";
        var data = JSON.stringify(this.state);

        axios({
            method: 'post',
            url: url,
            data: data,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <span className="addAssignmentFormLabel">
                        Course: </span>

                    <select value={this.state.courseId} onChange={this.handleCourseChange}>
                        <option value="0">Choose a course</option>
                        <option value="1">Calculus 2</option>
                        <option value="2">Linear 2</option>
                        <option value="3">Logic & Set Theory</option>
                        <option value="4">C</option>
                        <option value="5">Data Structures</option>
                        <option value="6">Calculus 2 International</option>
                        <option value="7">Linear 2 International</option>
                        <option value="8">Logic & Set Theory International</option>
                        <option value="9">C International</option>
                        <option value="10">Data Structures International</option>
                    </select>
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













