import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Page404() {
  return(
  <h1>Essa página não existe</h1>
  );
}

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;