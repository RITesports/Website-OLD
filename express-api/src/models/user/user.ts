import {
  Document, model, Schema, Types,
} from 'mongoose';

export interface User {
  _id?: Types.ObjectId;

  name: string;
  email: string;

  role: 'Admin' | 'Manager' | 'User';
  teamId?: Types.ObjectId;
}

export type UserDocument = User & Document;

export const User = model<UserDocument>('User', new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },

  role: { type: String, enum: ['Admin', 'Manager', 'User'], required: true },
  teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
}));
