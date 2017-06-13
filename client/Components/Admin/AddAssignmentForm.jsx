import React from 'react';
import SelectBox from './../Misc/SelectBox.jsx';

const AddAssignmentForm = (props) => 
<form onSubmit={props.handleSubmit}>
                <label>
                    <span className="addAssignmentFormLabel">
                        Course: </span>
                    <SelectBox options={props.courses} handleCourseChange={props.handleCourseChange} />
                </label>

                <br />

                <label>
                    <span className="addAssignmentFormLabel">
                        HW URL: </span>
                    <input type="text" value={props.homeworkUrl} onChange={props.handleHWUrlChange} />
                </label>

                <br />
                <label >
                    <span className="addAssignmentFormLabel">
                        End Date: </span>

                    <input type="text" value={props.endDate} onChange={props.handleEndDateChange} />
                </label>

                <br />

                <label>
                    <span className="addAssignmentFormLabel">
                        Exercise #:</span>
                    <input type="text" value={props.ex} onChange={props.handleExChange} />
                </label>

                <br />

                <label>
                    <span className="addAssignmentFormLabel">
                        Moodle ID: </span>
                    <input type="text" value={props.moodleId} onChange={props.handleMoodleIdChange} />
                </label>

                <br />
                <input type="submit" value="Submit" />
            </form>


export default AddAssignmentForm;




