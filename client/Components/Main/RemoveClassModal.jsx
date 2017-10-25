import React from 'react'

export default class RemoveClassModalButton extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const $modal = $("#removeClassModal");
        const assignmentId = $modal.attr('data-assignmentId');
       
        $modal.modal('hide');
        this.props.filterAssignment(assignmentId);
    }
    render() {
        return (
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
                           <h6> Warning </h6> Clicking "Remove Class" will permamently remove <span className="removeClassNameFiller"></span> from this page
      </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.onClick}>Remove Class</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}