import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import jwtConfig from '../../configs/jwt';
import { User } from '../../models/user';
import { findUserByEmail } from '../../services/user';

const updateJWT = (): RequestHandler => async (req, res, next) => {
  if (req.cookies[jwtConfig.cookieName]) {
    try {
      const user = jwt.verify(req.cookies[jwtConfig.cookieName], jwtConfig.publicKey) as User;

      const token = jwt.sign({ ...(await findUserByEmail(user.email)).toJSON() }, jwtConfig.privateKey, jwtConfig.tokenOptions);

      res.cookie(jwtConfig.cookieName, token, jwtConfig.cookieOptions);
    }
    catch (e) {
      console.error(e);
      res.clearCookie(jwtConfig.cookieName);
    }
  }

  return next();
};

export default updateJWT;
