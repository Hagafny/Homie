import React from 'react'

const RemoveClassModal = (props) =>
    <div className="modal fade" id="removeClassModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Remove <span className="removeClassNameFiller"></span></h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                        <span className="removeClassNameFiller"></span> and stuff
      </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Remove Class</button>
                </div>
            </div>
        </div>
    </div>


export default RemoveClassModal;