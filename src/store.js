import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'modules';

const middlewares = [
  thunkMiddleware,
];

export default function configureStore(initialState) {
  // Prevent redux devTools initialization in production
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension && process.env.NODE_ENV === 'development'
      ? window.devToolsExtension()
      : f => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules', () => {
      const nextRootReducer = require('./modules/index');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
