import Joi from '@hapi/joi';
import { Schema } from 'mongoose';

export interface Player {
  _id?: string;

  username: string;
  role: string;

  imageUrl?: string;
}

export const Player = new Schema<Player>({
  username: { type: String, required: true },
  role: { type: String, required: true },

  imageUrl: String,
});

export const PlayerJoi = Joi.object().keys({
  _id: Joi.string().regex(/^[a-f\d]{24}$/i),

  username: Joi.string().required(),
  role: Joi.string().required(),

  imageUrl: Joi.string().uri(),
});
