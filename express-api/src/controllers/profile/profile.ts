import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import jwtConfig from '../../configs/jwt';
import { ProfileJoi } from '../../models/profile';
import { User } from '../../models/user';
import * as ProfileService from '../../services/profile';

//-----------------------------------------------
// NON-VALIDATED ROUTES
//-----------------------------------------------

/* Read */
export const getProfileById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User | null;

  try {
    const profile = await ProfileService.findProfileById(id);
    return res.status(200).json({
      status: 200,
      profile,
      canEdit: !!user && (user.role === 'Admin' || user.profileId === profile.id),
      message: 'Successfully received profile',
    });
  }
  catch (e) {
    return res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};

//-----------------------------------------------
// VALIDATED ROUTES
//-----------------------------------------------

/* Update */
export const updateProfile: RequestHandler = async (req, res) => {
  const { value: profile, error } = ProfileJoi.validate(req.body);

  if (error) return res.status(400).json({ status: 400, message: error.message });

  const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User;

  try {
    const updatedProfile = await ProfileService.updateProfile({ ...profile, _id: req.params.id }); // spread the _id to overwrite with the req.params.id value
    return res.status(200).json({
      status: 200,
      profile: updatedProfile,
      canEdit: user.role === 'Admin' || user.profileId === updatedProfile.id,
      message: 'Successfully updated profile',
    });
  }
  catch (e) {
    return res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};
