import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import jwtConfig from '../../configs/jwt';
import { TeamJoi } from '../../models/team';
import { User } from '../../models/user';
import * as TeamService from '../../services/team';

//-----------------------------------------------
// NON-VALIDATED ROUTES
//-----------------------------------------------

/* Read */
export const getTeams: RequestHandler = async (req, res) => {
  const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User | null;

  try {
    return res.status(200).json({
      status: 200,
      teams: await TeamService.findTeams(),
      canCreate: !!user && user.role === 'Admin',
      canDelete: !!user && user.role === 'Admin',
      message: 'Successfully received teams',
    });
  }
  catch (e) {
    return res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};
export const getTeamByIdentifierOrId: RequestHandler = async (req, res) => {
  const { identifierOrId } = req.params;

  const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User | null;

  try {
    const team = await TeamService.findTeamByIdentifierOrId(identifierOrId);
    return res.status(200).json({
      status: 200,
      team,
      canDelete: !!user && user.role === 'Admin',
      canEdit: !!user && (user.role === 'Admin' || (user.role === 'Manager' && user.teamId === team.id)),
      message: 'Successfully received team',
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

/* Create  */
export const createTeam: RequestHandler = async (req, res) => {
  const { value: team, error } = TeamJoi.validate(req.body);

  if (error) return res.status(400).json({ status: 400, message: error.message });

  const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User;

  try {
    return res.status(201).json({
      status: 201,
      team: await TeamService.createTeam(team),
      canDelete: user.role === 'Admin',
      canEdit: user.role === 'Admin',
      message: 'Successfully created team',
    });
  }
  catch (e) {
    return res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};

/* Update */
export const updateTeam: RequestHandler = async (req, res) => {
  const { value: team, error } = TeamJoi.validate(req.body);

  if (error) return res.status(400).json({ status: 400, message: error.message });

  const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User;

  try {
    const updatedTeam = await TeamService.updateTeam({ ...team, _id: req.params.id }); // spread the _id to overwrite with the req.params.id value
    return res.status(200).json({
      status: 200,
      team: updatedTeam,
      canDelete: user.role === 'Admin',
      canEdit: user.role === 'Admin' || (user.role === 'Manager' && user.teamId === updatedTeam.id),
      message: 'Successfully updated team',
    });
  }
  catch (e) {
    return res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};

/* Delete */
export const deleteTeam: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    return res.status(200).json({
      status: 200,
      team: await TeamService.deleteTeam(id),
      message: 'Successfully deleted team',
    });
  }
  catch (e) {
    return res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};
