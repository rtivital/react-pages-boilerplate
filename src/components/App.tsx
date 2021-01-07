import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './routes/home/HomePage';
import settings from '../../settings';

export default function App() {
  return (
    <BrowserRouter basename={settings.repoPath}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
