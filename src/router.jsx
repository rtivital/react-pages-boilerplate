import React from 'react';
import PropTypes from 'prop-types';
import { Route, IndexRoute } from 'react-router';
import { HotRouter } from 'utils';

import { IndexPage } from 'pages';
import { App } from 'components';

const AppRouter = ({ history }) => (
  <HotRouter history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
    </Route>
  </HotRouter>
);

AppRouter.propTypes = { history: PropTypes.object.isRequired };
export default AppRouter;
