import Joi from '@hapi/joi';
import { Schema } from 'mongoose';

import { ProfileJoi } from '../../../profile';

export interface Member {
  _id?: string;

  username: string;
  role: string;
  profileId?: string;

  imageUrl?: string;
}

const Member = new Schema<Member>({
  username: { type: String, required: true },
  role: { type: String, required: true },
  profileId: { type: Schema.Types.ObjectId, ref: 'Profile' },
  // profile: Profile, virtaul,

  imageUrl: String,
}, { toJSON: { virtuals: true }, id: false });
Member.virtual('profile', {
  ref: 'Profile',
  localField: 'profileId',
  foreignField: '_id',
  justOne: true,
});

export { Member };

export const MemberJoi = Joi.object().keys({
  _id: Joi.string().regex(/^[a-f\d]{24}$/i),

  username: Joi.string().required(),
  role: Joi.string().required(),
  profileId: Joi.string().regex(/^[a-f\d]{24}$/i),
  profile: ProfileJoi.allow(null), // virtual

  imageUrl: Joi.string().uri(),
});
