import React from 'react';
import RemoveClassModalButton from './RemoveClassModalButton.jsx';

const NavBarCourseActions = ({ value, text }) => (
  <span>
    <RemoveClassModalButton id={`c${value}`} title={text} />
  </span>
);

export default NavBarCourseActions;
