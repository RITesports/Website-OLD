import Joi from '@hapi/joi';
import { Document, model, Schema } from 'mongoose';

import { Award, AwardJoi } from './award';
import { Game, GameJoi } from './game';

export interface Profile {
  _id?: string;

  name?: string;
  bio?: string;
  imageUrl?: string;

  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  streamUrl?: string;
  discordUsername?: string;

  games?: Game[];
  awards?: Award[];
}

export type ProfileDocument = Profile & Document;

export const Profile = model<ProfileDocument>('Profile', new Schema<Profile>({
  name: { type: String, maxlength: 32 },
  bio: { type: String, maxlength: 160 },
  imageUrl: String,

  facebookUrl: String,
  twitterUrl: String,
  instagramUrl: String,
  youtubeUrl: String,
  streamUrl: String,
  discordUsername: String,

  games: [Game],
  awards: [{ type: Award, immutable: true }],
}));

export const ProfileJoi = Joi.object().keys({
  _id: Joi.string().regex(/^[a-f\d]{24}$/i),

  name: Joi.string().max(32),
  bio: Joi.string().max(160),
  imageUrl: Joi.string().regex(/https:\/\/hooli-drive\.sfo2\.digitaloceanspaces\.com\/website\/public\/members\/\S+/),

  facebookUrl: Joi.string().uri(),
  twitterUrl: Joi.string().uri(),
  instagramUrl: Joi.string().uri(),
  youtubeUrl: Joi.string().uri(),
  streamUrl: Joi.string().uri(),
  discordUsername: Joi.string().regex(/.+#\d{4}/i),

  games: Joi.array().items(GameJoi).max(20),
  awards: Joi.array().items(AwardJoi),
});
