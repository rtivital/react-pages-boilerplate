import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import 'styles';

import configureStore from './store';
import AppRouter from './router';

const store = configureStore();
const rootElement = document.getElementById('app');

render(
  <AppContainer>
    <Provider store={store}>
      <AppRouter />
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
          <NextAppRouter />
        </Provider>
      </AppContainer>,
      rootElement
    );
  });
}
