import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import googleStrategyOptions from '../../configs/passport/google';
import { findOrCreateUser } from '../../services/user';

passport.use(new GoogleStrategy(
  googleStrategyOptions,
  (accessToken, refreshToken, profile, done) => {
    findOrCreateUser(profile.displayName, profile.emails![0].value) // eslint-disable-line @typescript-eslint/no-non-null-assertion
      .then((user) => done(undefined, user))
      .catch((e) => done(e));
  },
));
