import React from 'react';
import PropTypes from 'prop-types';

export default class RemoveClassModalButton extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { filterCourse } = this.props;
    const $modal = $('#removeClassModal');
    const courseId = $modal.attr('data-courseId');
    $modal.modal('hide');
    filterCourse(courseId);
  }

  render() {
    return (
      <div
        className="modal fade"
        id="removeClassModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header alert-danger">
              <h5 className="modal-title">
                Remove
                <span className="removeClassNameFiller" />
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h6>Warning!</h6>
              Clicking &aposRemove Class&apos will permanently remove
              <span className="removeClassNameFiller" />
              from this page
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={this.onClick}>
                Remove Class
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RemoveClassModalButton.propTypes = {
  filterCourse: PropTypes.func.isRequired
};
