import { Document, model, Schema, Types } from 'mongoose';

export interface User {
  _id?: string;

  name: string;
  email: string;
  profileId: string;

  role: 'Admin' | 'Manager' | 'User';
  teamId?: string;
}

export type UserDocument = Omit<User, 'profileId' | 'teamId'> & Document & {
  profileId: Types.ObjectId,

  teamId?: Types.ObjectId
};

export const User = model<UserDocument>('User', new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profileId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true, unique: true },

  role: { type: String, enum: ['Admin', 'Manager', 'User'], required: true },
  teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
}));
