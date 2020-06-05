import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/', passport.authenticate('google'));

router.get('/callback', passport.authenticate('google', { session: false }), (req, res) => {
  res.status(200).json({ status: 200, user: req.user });
});

export default router;
