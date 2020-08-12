import Joi from '@hapi/joi';
import { Schema } from 'mongoose';

import { League, LeagueJoi } from './league';
import { Member, MemberJoi } from './member';

export interface Division {
  _id?: string;

  name?: string;

  members?: Member[];
  leagues?: League[];
}

export const Division = new Schema<Division>({
  name: String,

  members: [Member],
  leagues: [League],
});

export const DivisionJoi = Joi.object().keys({
  _id: Joi.string().regex(/^[a-f\d]{24}$/i),

  name: Joi.string(),

  members: Joi.array().items(MemberJoi),
  leagues: Joi.array().items(LeagueJoi),
});
