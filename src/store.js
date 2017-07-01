import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import getReduxDevTools from 'utils/getReduxDevTools';
import rootReducer from 'modules';

const middlewares = [
  thunkMiddleware,
];

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares), getReduxDevTools())
  );

  // Enable Webpack hot module replacement for reducers
  // this will be cut out in production
  if (module.hot) {
    module.hot.accept('./modules', () => {
      const nextRootReducer = require('./modules/index');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
