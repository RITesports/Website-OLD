import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Team = lazy(() => import('../pages/Team'));
const Teams = lazy(() => import('../pages/Teams'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Routes: React.FC = () => (
  <main style={{ overflowX: 'hidden' }}>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/teams">
          <Teams />
        </Route>

        <Route exact path="/teams/:identifierOrId">
          <Team />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  </main>
);

export default Routes;
