import React from 'react';
import PropTypes from 'prop-types';
import '../../css/react-data-grid-toolbar.css';

export default class HomieDataGridToolbar extends React.Component {
  constructor(props) {
    super(props);

    this.onAddRow = this.onAddRow.bind(this);
    this.renderAddRowButton = this.renderAddRowButton.bind(this);
  }

  onAddRow() {
    const { onAddRow, numberOfRows } = this.props;
    if (onAddRow !== null && onAddRow instanceof Function) {
      onAddRow({ newRowIndex: numberOfRows });
    }
  }

  renderAddRowButton() {
    const { onAddRow, addRowButtonText } = this.props;
    if (onAddRow) {
      return (
        <button type="button" className="btn" onClick={this.onAddRow}>
          {addRowButtonText}
        </button>
      );
    }

    return '';
  }

  render() {
    return (
      <div className="react-grid-Toolbar">
        <div className="tools">{this.renderAddRowButton()}</div>
      </div>
    );
  }
}

HomieDataGridToolbar.propTypes = {
  addRowButtonText: PropTypes.string.isRequired,
  numberOfRows: PropTypes.number.isRequired,
  onAddRow: PropTypes.func.isRequired
};
