import Joi from '@hapi/joi';
import { Schema } from 'mongoose';

export interface League {
  name: string;
  url: string;

  imageUrl?: string;
}

export const League = new Schema<League>({
  name: { type: String, required: true },
  url: { type: String, required: true },

  imageUrl: String,
}, { _id: false });

export const LeagueJoi = Joi.object().keys({
  name: Joi.string().required(),
  url: Joi.string().uri().required(),

  imageUrl: Joi.string().uri(),
});
