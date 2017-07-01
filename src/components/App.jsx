import React from 'react';
import PropTypes from 'prop-types';

export default function App({ children }) {
  return (
    <div className="app">{children}</div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};
