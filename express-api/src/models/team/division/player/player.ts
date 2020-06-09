import Joi from '@hapi/joi';
import { Schema } from 'mongoose';

export interface Player {
  username: string;
  role: string;

  imageUrl?: string;
}

export const Player = new Schema<Player>({
  username: { type: String, required: true },
  role: { type: String, required: true },

  imageUrl: String,
}, { _id: false });

export const PlayerJoi = Joi.object().keys({
  username: Joi.string().required(),
  role: Joi.string().required(),

  imageUrl: Joi.string().uri(),
});
