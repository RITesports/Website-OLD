import Joi from '@hapi/joi';
import { Document, model, Schema } from 'mongoose';

import { Division, DivisionJoi } from './division';

export interface Team {
  _id?: string;

  name: string;
  identifier: string;

  divisions?: Division[];

  imageUrl?: string;
}

export type TeamDocument = Team & Document;

export const Team = model<TeamDocument>('Team', new Schema<Team>({
  name: { type: String, required: true },
  identifier: { type: String, required: true, unique: true, lowercase: true },

  divisions: [Division],

  imageUrl: String,
}));

export const TeamJoi = Joi.object().keys({
  _id: Joi.string().regex(/^[a-f\d]{24}$/i),

  name: Joi.string().required(),
  identifier: Joi.string().regex(/^[\w-]*$/).required(),

  divisions: Joi.array().items(DivisionJoi),

  imageUrl: Joi.string().uri(),
});
