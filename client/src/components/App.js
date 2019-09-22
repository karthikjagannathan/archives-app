import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import theme from '../styles/theme';
import HomePage from '../pages/HomePage';
import Dashboard from '../pages/Dashboard';

const AppSwitch = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppSwitch />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
