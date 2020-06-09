import {
  Document, model, Schema, Types,
} from 'mongoose';

export interface User {
  _id?: string;

  name: string;
  email: string;

  role: 'Admin' | 'Manager' | 'User';
  teamId?: string;
}

export type UserDocument = Omit<User, '_id' | 'teamId'> & Document & { _id: Types.ObjectId; teamId?: Types.ObjectId };

export const User = model<UserDocument>('User', new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },

  role: { type: String, enum: ['Admin', 'Manager', 'User'], required: true },
  teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
}));
