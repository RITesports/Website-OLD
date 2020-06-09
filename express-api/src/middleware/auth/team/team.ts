import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import jwtConfig from '../../../configs/jwt';
import { User } from '../../../models/user';

/* Create */
export const createTeam: RequestHandler = (req, res, next) => {
  try {
    const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User;

    if (user.role === 'Admin') return next();

    return res.status(403).json({ status: 403, message: 'Forbidden: You do not have permission to create a team' });
  }
  catch {
    return res.status(401).json({ status: 401, message: 'Unauthorized: You must be logged in to access this' });
  }
};

/* Update */
export const updateTeam: RequestHandler = (req, res, next) => {
  try {
    const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User;

    if (user.role === 'Admin' || (user.role === 'Manager' && user.teamId === req.params.id)) return next();

    return res.status(403).json({ status: 403, message: 'Forbidden: You do not have permission to update this team' });
  }
  catch {
    return res.status(401).json({ status: 401, message: 'Unauthorized: You must be logged in to access this' });
  }
};

/* Delete */
export const deleteTeam: RequestHandler = (req, res, next) => {
  try {
    const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User;

    if (user.role === 'Admin') return next();

    return res.status(403).json({ status: 403, message: 'Forbidden: You do not have permission to delete this team' });
  }
  catch {
    return res.status(401).json({ status: 401, message: 'Unauthorized: You must be logged in to access this' });
  }
};
