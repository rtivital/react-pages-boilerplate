import React from 'react';
import PropTypes from 'prop-types';
import { Route, IndexRoute } from 'react-router';
import HotRouter from 'utils/HotRouter';

import HomePage from 'components/routes/home/HomePage';
import App from 'components/App';

const AppRouter = ({ history }) => (
  <HotRouter history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
    </Route>
  </HotRouter>
);

AppRouter.propTypes = { history: PropTypes.object.isRequired };
export default AppRouter;
