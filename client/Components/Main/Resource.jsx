import React from 'react';
import PropTypes from 'prop-types';

const Resource = ({ url, prefix, img, children }) => {
  if (!url) return false;

  const modifiedURl = prefix ? `${prefix}${url}` : url;
  return (
    <div>
      <img src={img} alt="" height="20" width="20" />
      <span>
        {' '}
        <a href={modifiedURl} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </span>
    </div>
  );
};

Resource.propTypes = {
  url: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default Resource;
