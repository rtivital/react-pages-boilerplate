import React from 'react';
import { hashHistory, Route, IndexRoute } from 'react-router';
import HotRouter from 'utils/HotRouter';

import HomePage from 'components/routes/home/HomePage';
import App from 'components/App';

export default function AppRouter() {
  return (
    <HotRouter history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
      </Route>
    </HotRouter>
  );
}
