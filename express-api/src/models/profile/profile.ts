import Joi from '@hapi/joi';
import { Document, model, Schema } from 'mongoose';

import { Game, GameJoi } from './game';

export interface Profile {
  _id?: string;

  name?: string;
  bio?: string;

  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  streamUrl?: string;
  discordUsername?: string;

  games?: Game[];
}

export type ProfileDocument = Profile & Document;

export const Profile = model<ProfileDocument>('Profile', new Schema<Profile>({
  name: String,
  bio: { type: String, maxlength: 160 },

  facebookUrl: String,
  twitterUrl: String,
  instagramUrl: String,
  youtubeUrl: String,
  streamUrl: String,
  discordUsername: String,

  games: [Game],
}));

export const ProfileJoi = Joi.object().keys({
  _id: Joi.string().regex(/^[a-f\d]{24}$/i),

  name: Joi.string(),
  bio: Joi.string().max(160),

  facebookUrl: Joi.string().uri(),
  twitterUrl: Joi.string().uri(),
  instagramUrl: Joi.string().uri(),
  youtubeUrl: Joi.string().uri(),
  streamUrl: Joi.string().uri(),
  discordUsername: Joi.string().regex(/.*#\d{4}/i),

  games: Joi.array().items(GameJoi),
});
