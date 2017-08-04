import React from 'react'
import SelectBox from './../Misc/SelectBox.jsx';

const AddForm = (props) => {
    return (
        <div className="modal fade" id="addModal" tabIndex="-1" role="dialog"
            aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close"
                            data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                            <span className="sr-only">Close</span>
                        </button>
                        <h4 className="modal-title" id="myModalLabel">
                            Add Assignment
                </h4>
                    </div>

                    <form id="addForm" onSubmit={props.handleSubmit}>
                        <div className="modal-body">

                            <div className="form-group">
                                <label className="control-label" htmlFor="course">Course</label>
                                <SelectBox options={props.courses} name={"courseId"} handleInputChange={props.handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label className="control-label" htmlFor="hw_url">HW URL</label>
                                <input type="text" className="form-control" name="homeworkUrl" onChange={props.handleInputChange} />
                            </div>


                            <div className="form-group">
                                <label className="control-label" htmlFor="end_date">End Date:</label>
                                <input type="text" className="form-control" name="endDate" onChange={props.handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label className="control-label" htmlFor="ex">Exercise #:</label>
                                <input type="text" className="form-control" name="ex" onChange={props.handleInputChange} />
                            </div>

                            <div className="form-group">
                                <label className="control-label" htmlFor="moodle_id">Moodle ID:</label>
                                <input type="text" className="form-control" name="moodleId" onChange={props.handleInputChange} />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <input type="submit" value="Save" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddForm;