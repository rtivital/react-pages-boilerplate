import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import { IndexPage } from 'pages';
import AppContainer from 'components/AppContainer';

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={IndexPage} />
    </Route>
  </Router>
);

AppRouter.propTypes = { history: PropTypes.object.isRequired };
export default AppRouter;
