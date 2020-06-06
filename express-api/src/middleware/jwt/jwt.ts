import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import jwtConfig, { JWT } from '../../configs/jwt';
import { findUserByEmail } from '../../services/user';

const updateJWT = (): RequestHandler => async (req, res, next) => {
  if (req.cookies[jwtConfig.cookieName]) {
    try {
      const { user: decoded } = jwt.verify(req.cookies[jwtConfig.cookieName], jwtConfig.publicKey) as JWT;

      const user = await findUserByEmail(decoded.email);

      const token = jwt.sign({ user }, jwtConfig.privateKey, jwtConfig.tokenOptions);

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
