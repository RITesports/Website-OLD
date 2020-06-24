import Joi from '@hapi/joi';

export interface MatchQuery {
  page?: number;

  name?: string;
  final?: boolean;

  before?: string; // ISO Date String
  after?: string; // ISO Date String
  between?: [string, string]; // ISO Date String

  win?: boolean;
  loss?: boolean;
  tie?: boolean;

  teamId?: string;

  opponent?: string;
}

export const MatchQueryJoi = Joi.object().keys({
  page: Joi.number().positive(),

  name: Joi.string(),
  final: Joi.boolean(),

  before: Joi.string().isoDate(),
  after: Joi.string().isoDate(),
  between: Joi.array().items(Joi.string().isoDate().required(), Joi.string().isoDate().required()),

  win: Joi.boolean(),
  loss: Joi.boolean(),
  tie: Joi.boolean(),

  teamId: Joi.string().regex(/^[a-f\d]{24}$/i),

  opponent: Joi.string(),
});
