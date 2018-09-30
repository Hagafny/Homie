import React from 'react';
import PropTypes from 'prop-types';

export default class RemoveClassModalButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let { id } = this.props;
    const { title } = this.props;

    id = id.substr(1); // Remove the precedding 'c'
    $('.removeClassNameFiller').text(title);
    $('#removeClassModal')
      .attr('data-courseId', id)
      .modal('show');
  }

  render() {
    return (
      <span className="navBarCourseAction">
        <i onClick={this.onClick} className="fa fa-trash courseActions" aria-hidden="true" />
      </span>
    );
  }
}

RemoveClassModalButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
