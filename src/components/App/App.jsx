import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <div className="app">{children}</div>
);

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
