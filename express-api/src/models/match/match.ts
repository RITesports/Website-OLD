import Joi from '@hapi/joi';
import { Document, model, Schema, Types } from 'mongoose';

import { Division, DivisionJoi } from '../team/division';

export interface Match {
  _id?: string;

  name: string;
  final: boolean;
  startTime?: string // ISO Date String

  outcome?: 'Win' | 'Loss' | 'Tie',

  teamId: string;
  division?: Division
  score?: number;

  opponent?: string;
  opponentScore?: number;

  streamUrl?: string;
  vodUrl?: string;
}

export type MatchDocument = Omit<Match, 'startTime' | 'teamId'> & Document & { startTime?: Date, teamId: Types.ObjectId };

const MatchSchema = new Schema<Match>({
  name: { type: String, required: true },
  final: { type: Boolean, required: true },
  startTime: Date,

  outcome: { type: String, enum: ['Win', 'Loss', 'Tie'] },

  teamId: { type: Schema.Types.ObjectId, ref: 'Team', required: true, immutable: true },
  // team: Team, virtual
  division: Division,
  score: Number,

  opponent: String,
  opponentScore: Number,

  streamUrl: String,
  vodUrl: String,
}, { toJSON: { virtuals: true }, id: false });

MatchSchema.virtual('team', {
  ref: 'Team',
  localField: 'teamId',
  foreignField: '_id',
  justOne: true,
});

export const Match = model<MatchDocument>('Match', MatchSchema);

export const MatchJoi = Joi.object().keys({
  _id: Joi.string().regex(/^[a-f\d]{24}$/i),

  name: Joi.string().required(),
  final: Joi.boolean().required(),
  startTime: Joi.string().isoDate(),

  outcome: Joi.when('final', { is: true, then: Joi.string().valid('Win', 'Loss', 'Tie'), otherwise: Joi.forbidden() }),

  teamId: Joi.string().regex(/^[a-f\d]{24}$/i).required(),
  division: DivisionJoi,
  score: Joi.number(),

  opponent: Joi.string(),
  opponentScore: Joi.number(),

  streamUrl: Joi.string().uri(),
  imageUrl: Joi.string().uri(),
});
