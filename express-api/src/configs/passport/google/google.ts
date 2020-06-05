import { StrategyOptions } from 'passport-google-oauth20';

const googleStrategyOptions: StrategyOptions = {
  callbackURL: '/auth/google/callback',

  clientID: process.env.GOOGLE_CLIENT_ID || 'GOOGLE_CLIENT_ID',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'GOOGLE_CLIENT_SECRET',

  scope: ['email', 'profile', 'openid'],
};

export default googleStrategyOptions;
