import { createContext } from 'react';
import User from '../../models/user';

const UserContext = createContext<User | undefined | null>(null);

export default UserContext;
