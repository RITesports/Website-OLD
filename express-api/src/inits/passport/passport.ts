import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

import googleStrategyOptions from '../../configs/passport/google';
import { findOrCreateUser } from '../../services/user';

passport.use(new GoogleStrategy(
  googleStrategyOptions,
  (accessToken, refreshToken, profile, done) => {
    const email = profile.emails![0].value; // eslint-disable-line @typescript-eslint/no-non-null-assertion

    if (email.endsWith('@g.rit.edu')) {
      findOrCreateUser(profile.displayName, email)
        .then((user) => done(undefined, user.toJSON()))
        .catch((e) => done(e));
    }
    else {
      done('Error: Must be an RIT member to have an account');
    }
  },
));
