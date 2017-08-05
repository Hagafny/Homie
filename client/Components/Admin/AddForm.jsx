import React from 'react'
import AddFormField from './AddFormField.jsx';

const AddForm = (props) => {
    let fields = props.fields.map(field => {
        return <AddFormField data={field} key={`field_${field.key}`} handleInputChange={props.handleInputChange}/>
    });
    return (
        <div className="modal fade" id={`add${props.gridName}Modal`} tabIndex="-1" role="dialog"
            aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close"
                            data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                            <span className="sr-only">Close</span>
                        </button>
                        <h4 className="modal-title">
                            Add {props.gridName}
                        </h4>
                    </div>

                    <form id={`add${props.gridName}Form`} onSubmit={props.handleSubmit}>
                        <div className="modal-body">

                            {fields}

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