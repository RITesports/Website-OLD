import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import AdminRoute from './protected/Admin';
import ManagerRoute from './protected/Manager';

const Home = lazy(() => import('../pages/Home'));

const Founders = lazy(() => import('../pages/Founders'));

const Profile = lazy(() => import('../pages/Profile'));
const ProfileEdit = lazy(() => import('../pages/ProfileEdit'));

const TeamEdit = lazy(() => import('../pages/TeamEdit'));
const Teams = lazy(() => import('../pages/Teams'));

const NotFound = lazy(() => import('../pages/NotFound'));

const Routes: React.FC = () => (
  <main style={{ overflowX: 'hidden' }}>
    <Suspense fallback={<Backdrop open><CircularProgress color="primary" /></Backdrop>}>
      <Switch>
        <Route exact path="/"><Home /></Route>

        <Route exact path="/founders"><Founders /></Route>

        <Route exact path="/profiles/:id"><Profile /></Route>
        <Route exact path="/profiles/:id/edit"><ProfileEdit /></Route>

        <AdminRoute exact path="/teams/createTeam"><TeamEdit /></AdminRoute>
        <Route exact path="/teams/:identifierOrId?"><Teams /></Route>
        <ManagerRoute exact path="/teams/:identifierOrId/edit"><TeamEdit /></ManagerRoute>

        <Route><NotFound /></Route>
      </Switch>
    </Suspense>
  </main>
);

export default Routes;
