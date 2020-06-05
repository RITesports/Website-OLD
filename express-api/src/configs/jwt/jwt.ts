import { CookieOptions } from 'express';
import fs from 'fs';
import { SignOptions } from 'jsonwebtoken';

const hours = 0;
const minutes = 30;
const seconds = 0;

const maxAge = (hours * 3600000) + (minutes * 60000) + (seconds * 1000);
const expiresIn = (hours * 3600) + (minutes * 60) + seconds;

// https://owasp.org/www-chapter-london/assets/slides/OWASPLondon20171130_Cookie_Security_Myths_Misconceptions_David_Johansson.pdf
const cookieName = process.env.NODE_ENV !== 'development' ? '__Host-jwt' : 'jwt';
const cookieOptions: CookieOptions = {
  path: '/',
  secure: process.env.NODE_ENV !== 'development',
  httpOnly: process.env.NODE_ENV !== 'development',
  sameSite: 'strict',
  maxAge,
};

const tokenOptions: SignOptions = { algorithm: 'RS256', expiresIn };

const jwtConfig = {
  publicKey: fs.readFileSync('public.pem'),
  privateKey: fs.readFileSync('private.pem'),

  cookieName,
  cookieOptions,
  tokenOptions,
};

export default jwtConfig;
