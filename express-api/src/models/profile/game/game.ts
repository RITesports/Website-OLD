import Joi from '@hapi/joi';
import { Schema } from 'mongoose';

export interface Game {
  _id?: string;

  name: string;
  platform: 'PC' | 'PlayStation' | 'Xbox' | 'Switch' | 'Other'

  username: string;
  tracker?: string;
}

export const Game = new Schema<Game>({
  name: { type: String, required: true },
  platform: { type: String, enum: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Other'], required: true },

  username: { type: String, required: true },
  tracker: String,
});

export const GameJoi = Joi.object().keys({
  _id: Joi.string().regex(/^[a-f\d]{24}$/i),

  name: Joi.string().required(),
  plaform: Joi.string().valid('PC', 'PlayStation', 'Xbox', 'Switch', 'Other').required(),

  username: Joi.string().required(),
  tracker: Joi.string().uri(),
});
