import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import AdminRoute from './protected/Admin';
import ManagerRoute from './protected/Manager';

const Home = lazy(() => import('../pages/Home'));
const Founders = lazy(() => import('../pages/Founders'));
const Team = lazy(() => import('../pages/Team'));
const TeamEdit = lazy(() => import('../pages/TeamEdit'));
const Teams = lazy(() => import('../pages/Teams'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Routes: React.FC = () => (
  <main style={{ overflowX: 'hidden' }}>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/"><Home /></Route>

        <Route exact path="/founders"><Founders /></Route>

        <Route exact path="/teams"><Teams /></Route>
        <AdminRoute exact path="/teams/createTeam"><TeamEdit /></AdminRoute>
        <Route exact path="/teams/:identifierOrId"><Team /></Route>
        <ManagerRoute exact path="/teams/:identifierOrId/edit"><TeamEdit /></ManagerRoute>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  </main>
);

export default Routes;
