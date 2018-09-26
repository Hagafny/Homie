import React from 'react';
import './../../css/react-data-grid-toolbar.css';
export default class HomieDataGridToolbar extends React.Component {
  constructor(props) {
    super(props);

    this.onAddRow = this.onAddRow.bind(this);
    this.renderAddRowButton = this.renderAddRowButton.bind(this);
  }
  onAddRow() {
    if (this.props.onAddRow !== null && this.props.onAddRow instanceof Function) {
      this.props.onAddRow({ newRowIndex: this.props.numberOfRows });
    }
  }

  renderAddRowButton() {
    if (this.props.onAddRow) {
      return (
        <button type="button" className="btn" onClick={this.onAddRow}>
          {this.props.addRowButtonText}
        </button>
      );
    }
  }

  render() {
    return (
      <div className="react-grid-Toolbar">
        <div className="tools">{this.renderAddRowButton()}</div>
      </div>
    );
  }
}
