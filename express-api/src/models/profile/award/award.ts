import Joi from '@hapi/joi';
import { Schema } from 'mongoose';

export interface Award {
  _id?: string;

  text?: string;
  color?: string;
}

export const Award = new Schema<Award>({
  text: { type: String },
  color: { type: String },
});

export const AwardJoi = Joi.object().keys({
  _id: Joi.string().regex(/^[a-f\d]{24}$/i),

  text: Joi.string(),
  color: Joi.string().regex(/^#((0x){0,1}|#{0,1})([0-9A-F]{8}|[0-9A-F]{6})$/i),
});