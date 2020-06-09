import { Router } from 'express';
import jwt from 'jsonwebtoken';

import googleRoutes from './google';
import jwtConfig from '../../configs/jwt';
import { User } from '../../models/user';

const router = Router();

router.use('/google', googleRoutes);

router.get('/isLoggedIn', (req, res) => {
  const user = req.cookies[jwtConfig.cookieName] && jwt.decode(req.cookies[jwtConfig.cookieName]) as User;

  return res.status(200).json({
    status: 200,
    isLoggedIn: !!user,
    user,
    message: user ? 'Logged in' : 'Not logged in',
  });
});

router.get('/logout', (req, res) => {
  res.clearCookie(jwtConfig.cookieName);
  res.redirect('/');
});

export default router;
