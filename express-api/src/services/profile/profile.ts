import { Profile, ProfileDocument } from '../../models/profile';

/* Create */
export const createProfile = async (profile: Profile) => {
  try {
    return await Profile.create(profile);
  }
  catch (e) {
    throw Error('Error creating profile');
  }
};

/* Read */
export const findProfileById = async (id: string) => {
  let profile: ProfileDocument | null;

  try {
    profile = await Profile.findById(id);
  }
  catch (e) {
    console.error(e);
    throw Error('Error finding profile');
  }

  if (!profile) throw Error('Error finding profile by id');
  return profile;
};

/* Update */
export const updateProfile = async (profile: Profile) => {
  let updatedProfile: ProfileDocument | null;

  try {
    // @ts-ignore
    updatedProfile = await Profile.findByIdAndUpdate(profile._id, profile, { new: true, overwrite: true });
    console.log(updatedProfile);
  }
  catch (e) {
    console.error(e);
    throw Error('Error updating profile');
  }

  if (!updatedProfile) throw Error('Error finding profile by id');
  return updatedProfile;
};