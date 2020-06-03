import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Routes: React.FC = () => (
  <main>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  </main>
);

export default Routes;
