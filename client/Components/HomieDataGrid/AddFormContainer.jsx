import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddForm from './AddForm';

export default class AddFormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    const keys = Object.keys(this.state);
    for (let i = 0; i <= keys.length; i += 1) {
      this.setState({
        [keys[i]]: ''
      });
    }
  }

  handleInputChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Save and then completely reset state so that everything will be blank
    const { save } = this.props;
    save(this.state, this.resetState());
  }

  render() {
    const { gridName, fields } = this.props;
    return (
      <AddForm
        gridName={gridName}
        fields={fields}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

AddFormContainer.propTypes = {
  gridName: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};
