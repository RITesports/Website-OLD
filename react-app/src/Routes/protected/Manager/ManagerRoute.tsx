import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import useUser from '../../../utils/user';

const ManagerRoute: React.FC<RouteProps> = ({ children, ...routeProps }) => {
  const user = useUser();

  return user?.role === 'Admin' || user?.role === 'Manager'
    ? <Route {...routeProps}>{children}</Route>
    : <Redirect to="/" />;
};

export default ManagerRoute;
