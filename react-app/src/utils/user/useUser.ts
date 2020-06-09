import { useContext } from 'react';

import UserContext from './UserContext';

const useUser = () => {
  const stuff = useContext(UserContext);
  if (stuff === null) throw Error('useUser must be used within a UserProvider');
  return stuff;
};

export default useUser;
