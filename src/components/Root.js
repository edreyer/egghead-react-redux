import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import TodoApp from './TodoApp';

const history = createBrowserHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/:filter" component={TodoApp} />
        <Route path="/" component={TodoApp} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
