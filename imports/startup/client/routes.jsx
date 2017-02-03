import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app';
import { Index } from '../../ui/components/index';

import { One } from '../../ui/pages/one';
import { Two } from '../../ui/pages/two';
import { Hello } from '../../ui/pages/hello';
import { NotFound } from '../../ui/pages/not-found';

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="/one" component={One} />
        <Route path="/two" component={Two} />
        <Route path="/hello/:name" component={Hello} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>,
    document.getElementById('react-root')
  );
});
