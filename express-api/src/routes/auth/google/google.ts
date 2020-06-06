import { Router } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';

import jwtConfig from '../../../configs/jwt';

const router = Router();

router.get('/', passport.authenticate('google'));

router.get('/callback', passport.authenticate('google', { session: false }), (req, res) => {
  try {
    const token = jwt.sign({ user: req.user }, jwtConfig.privateKey, jwtConfig.tokenOptions);

    res.cookie(jwtConfig.cookieName, token, jwtConfig.cookieOptions);
  }
  catch { /* empty catch for sign errors */ }

  return res.redirect('/');
});

export default router;
