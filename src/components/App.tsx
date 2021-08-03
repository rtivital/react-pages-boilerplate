import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MantineProvider, GlobalStyles, NormalizeCSS } from '@mantine/core';
import HomePage from './routes/home/HomePage';
import settings from '../../settings';

export default function App() {
  return (
    <MantineProvider>
      <GlobalStyles />
      <NormalizeCSS />

      <BrowserRouter basename={settings.repoPath}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </MantineProvider>
  );
}
