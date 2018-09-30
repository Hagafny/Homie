import React from 'react';
import PropTypes from 'prop-types';
import AddFormField from './AddFormField';

const AddForm = ({ fields, handleInputChange, gridName, handleSubmit }) => {
  const flds = fields.map(field => (
    <AddFormField data={field} key={`field_${field.key}`} handleInputChange={handleInputChange} />
  ));

  return (
    <div
      className="modal fade"
      id={`add${gridName}Modal`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">Close</span>
            </button>
            <h4 className="modal-title">{`Add ${gridName}`}</h4>
          </div>

          <form id={`add ${gridName}Form`} onSubmit={handleSubmit}>
            <div className="modal-body">{flds}</div>

            <div className="modal-footer">
              <input type="submit" value="Save" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

AddForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  gridName: PropTypes.string.isRequired
};

export default AddForm;
