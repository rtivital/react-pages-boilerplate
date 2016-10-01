import React, { PropTypes } from 'react';

const AppContainer = ({ children }) => (
  <div className="app">{children}</div>
);

AppContainer.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AppContainer;
