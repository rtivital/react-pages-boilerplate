import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import HomePage from './routes/home/HomePage';
import settings from '../../settings';

function App() {
  return (
    <BrowserRouter basename={settings.repoPath}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default hot(module)(App);
