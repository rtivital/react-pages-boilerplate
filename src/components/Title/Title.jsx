import React from 'react';
import PropTypes from 'prop-types';
import './title.scss';

export default function Title({ children }) {
  return (
    <h1 className="title">{children}</h1>
  );
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};
