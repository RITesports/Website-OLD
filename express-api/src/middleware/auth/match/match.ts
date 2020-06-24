import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import jwtConfig from '../../../configs/jwt';
import { MatchDocument } from '../../../models/match';
import { User } from '../../../models/user';
import * as MatchService from '../../../services/match';

/* Create */
export const createMatch: RequestHandler = (req, res, next) => {
  const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User | null;
  if (!user) return res.status(401).json({ status: 401, message: 'Unauthorized: You must be logged in to access this' });

  if (user.role === 'Admin') return next();
  if (user.role === 'Manager') {
    if (user.teamId === req.body.teamId) return next();

    return res.status(403).json({ status: 403, message: 'Forbidden: You do not have permission to create a match for this team' });
  }

  return res.status(403).json({ status: 403, message: 'Forbidden: You do not have permission to create a match' });
};

/* Update */
export const updateMatch: RequestHandler = async (req, res, next) => {
  const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User | null;
  if (!user) return res.status(401).json({ status: 401, message: 'Unauthorized: You must be logged in to access this' });

  if (user.role === 'Admin') return next();
  if (user.role === 'Manager') {
    let match: MatchDocument;
    try {
      match = await MatchService.findMatchById(req.params.id);
    }
    catch (e) {
      return res.status(500).json({
        status: 500,
        message: e.message,
      });
    }

    if (user.teamId === match.teamId.toHexString()) return next();
  }

  return res.status(403).json({ status: 403, message: 'Forbidden: You do not have permission to update this match' });
};

/* Delete */
export const deleteMatch: RequestHandler = async (req, res, next) => {
  const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User | null;
  if (!user) return res.status(401).json({ status: 401, message: 'Unauthorized: You must be logged in to access this' });

  if (user.role === 'Admin') return next();
  if (user.role === 'Manager') {
    let match: MatchDocument;
    try {
      match = await MatchService.findMatchById(req.params.id);
    }
    catch (e) {
      return res.status(500).json({
        status: 500,
        message: e.message,
      });
    }

    if (user.teamId === match.teamId.toHexString()) return next();
  }

  return res.status(403).json({ status: 403, message: 'Forbidden: You do not have permission to delete this match' });
};
