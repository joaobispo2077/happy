import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/orphanage/:id" component={Orphanage} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/map" component={OrphanagesMap} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;