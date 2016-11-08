import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import 'react-fastclick';
import 'styles';

import configureStore from './store';
import AppRouter from './router';

const store = configureStore();
const history = process.env.BUILD === 'pages' ? hashHistory : browserHistory;
const appHistory = syncHistoryWithStore(history, store);

const rootElement = document.getElementById('app');

render(
  <AppContainer>
    <Provider store={store}>
      <AppRouter history={appHistory} />
    </Provider>
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./router', () => {
    const NextAppRouter = require('./router').default;

    render(
      <AppContainer>
        <Provider store={store}>
          <NextAppRouter history={appHistory} />
        </Provider>
      </AppContainer>,
      rootElement
    );
  });
}
