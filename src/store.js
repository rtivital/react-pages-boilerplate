import { hashHistory, browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'modules';

// create routing actions for hashHistory while deploying on gh-pages
const routingMiddleware = routerMiddleware(
  process.env.BUILD === 'pages'
  ? hashHistory
  : browserHistory
);

const middlewares = [
  thunkMiddleware,
  routingMiddleware,
];

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension && process.env.NODE_ENV === 'development'
      ? window.devToolsExtension()
      : f => f
  ));

  return store;
};

export default configureStore;
