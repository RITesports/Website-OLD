import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import useUser from '../../../utils/user';

const AdminRoute: React.FC<RouteProps> = ({ children, ...routeProps }) => {
  const user = useUser();

  return user?.role === 'Admin'
    ? <Route {...routeProps}>{children}</Route>
    : <Redirect to="/" />;
};

export default AdminRoute;
