import React from 'react';
import PropTypes from 'prop-types';
import RemoveClassModalButton from './RemoveClassModalButton';

const NavBarCourseActions = ({ value, text }) => (
  <span>
    <RemoveClassModalButton id={`c${value}`} title={text} />
  </span>
);

NavBarCourseActions.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default NavBarCourseActions;
