import * as ProfileService from '../profile';
import { User, UserDocument } from '../../models/user';

export const findOrCreateUser = async (name: string, email: string) => {
  try {
    return await User.findOne({ email }) || await User.create({ name, email, role: 'User', profileId: (await ProfileService.createProfile())._id });
  }
  catch (e) {
    console.error(e);
    throw Error('Error creating user');
  }
};

export const findUserByEmail = async (email: string) => {
  let user: UserDocument | null;

  try {
    user = await User.findOne({ email });
  }
  catch (e) {
    console.error(e);
    throw Error('Error finding user');
  }

  if (!user) throw Error('Error finding user by email');
  return user;
};
