import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import jwtConfig from '../../../configs/jwt';
import { User } from '../../../models/user';

/* Update */
export const updateProfile: RequestHandler = (req, res, next) => {
  try {
    const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User;

    if (user.role === 'Admin' || (user.profileId === req.params._id)) return next();

    return res.status(403).json({ status: 403, message: 'Forbidden: You do not have permission to update this profile' });
  }
  catch {
    return res.status(403).json({ status: 401, message: 'Unauthorized: You must be logged in to access this' });
  }
};
