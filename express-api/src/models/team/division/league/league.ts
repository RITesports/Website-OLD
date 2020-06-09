import Joi from '@hapi/joi';
import { Schema } from 'mongoose';

export interface League {
  _id?: string;

  name: string;
  url: string;

  imageUrl?: string;
}

export const League = new Schema<League>({
  name: { type: String, required: true },
  url: { type: String, required: true },

  imageUrl: String,
});

export const LeagueJoi = Joi.object().keys({
  _id: Joi.string().regex(/^[a-f\d]{24}$/i),

  name: Joi.string().required(),
  url: Joi.string().uri().required(),

  imageUrl: Joi.string().uri(),
});
