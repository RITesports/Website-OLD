import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../../models/user';

import UserContext from './UserContext';

interface IsLoggedIn {
  status: number;
  isLoggedIn: boolean;
  user?: User;
  message: string;
}
const UserProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    axios.get<IsLoggedIn>('/auth/isLoggedIn')
      .then(({ data }) => setUser(data.user))
      .catch()
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
