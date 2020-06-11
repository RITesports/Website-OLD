import React, { useEffect, useState } from 'react';
import axios from 'axios';

import UserContext from './UserContext';
import User from '../../models/user';

interface IsLoggedInRes {
  status: number;
  isLoggedIn: boolean;
  user?: User;
  message: string;
}
const UserProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    axios.get<IsLoggedInRes>('/auth/isLoggedIn')
      .then(({ data }) => setUser(data.user))
      .catch(() => { })
      .finally(() => setLoading(false));
  }, []);

  return (
    loading
      ? null
      : (
        <UserContext.Provider value={user}>
          {children}
        </UserContext.Provider>
      )
  );
};

export default UserProvider;
