import Joi from '@hapi/joi';
import { Schema } from 'mongoose';

import { League, LeagueJoi } from './league';
import { Player, PlayerJoi } from './player';

export interface Division {
  name?: string;

  players?: Player[];
  leagues?: League[];
}

export const Division = new Schema<Division>({
  name: String,

  players: [Player],
  leagues: [League],
}, { _id: false });

export const DivisionJoi = Joi.object().keys({
  name: Joi.string(),

  players: Joi.array().items(PlayerJoi),
  leagues: Joi.array().items(LeagueJoi),
});
