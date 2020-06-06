import { CookieOptions } from 'express';
import fs from 'fs';
import { SignOptions } from 'jsonwebtoken';

import { User } from '../../models/user';

const hours = 0;
const minutes = 30;
const seconds = 0;

const maxAge = (hours * 3600000) + (minutes * 60000) + (seconds * 1000);
const expiresIn = (hours * 3600) + (minutes * 60) + seconds;

const cookieName = process.env.NODE_ENV !== 'development' ? '__Secure-jwt' : 'jwt';
const cookieOptions: CookieOptions = {
  secure: process.env.NODE_ENV !== 'development',
  httpOnly: process.env.NODE_ENV !== 'development',
  sameSite: 'strict',
  maxAge,
};

const tokenOptions: SignOptions = { algorithm: 'RS256', expiresIn };

const jwtConfig = {
  publicKey: fs.readFileSync('jwt_public.pem'),
  privateKey: fs.readFileSync('jwt_private.pem'),

  cookieName,
  cookieOptions,
  tokenOptions,
};

export interface JWT {
  user: User;
}

export default jwtConfig;
