import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import jwtConfig from '../../configs/jwt';
import { MatchJoi } from '../../models/match';
import { User } from '../../models/user';
import { MatchQuery, MatchQueryJoi } from '../../queries/match';
import * as MatchService from '../../services/match';

//-----------------------------------------------
// NON-VALIDATED ROUTES
//-----------------------------------------------

/* Read */
export const getMatches: RequestHandler = async (req, res) => {
  const { value: queries, error } = MatchQueryJoi.validate(req.query);
  if (error) return res.status(400).json({ status: 400, message: error.message });

  const { page = 1, name, final, before, after, between, win, loss, tie, teamId, opponent } = queries as MatchQuery;

  const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User | null;

  try {
    return res.status(200).json({
      status: 200,
      matches: await MatchService.findMatches({
        ...name && { name: { $regex: name, $options: 'i' } },
        ...final !== undefined && { final },
        ...before && { startTime: { $lte: new Date(before) } },
        ...after && { startTime: { $gte: new Date(after) } },
        ...between && { startTime: { $gte: new Date(between[0]), $lte: new Date(between[1]) } },
        ...win !== undefined && final !== false && { outcome: win ? 'Win' : { $ne: 'Win' } },
        ...loss !== undefined && final !== false && { outcome: loss ? 'Loss' : { $ne: 'Loss' } },
        ...tie !== undefined && final !== false && { outcome: tie ? 'Tie' : { $ne: 'Tie' } },
        ...opponent && { opponent: { $regex: opponent, $options: 'i' } },
      }, { page }),
      canCreate: !!user && (user.role === 'Admin' || (user.role === 'Manager' && user.teamId === teamId)),
      canDelete: !!user && (user.role === 'Admin' || (user.role === 'Manager' && user.teamId === teamId)),
      message: 'Successfully received matches',
    });
  }
  catch (e) {
    return res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};
export const getMatchById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User | null;

  try {
    const match = await MatchService.findMatchById(id);
    return res.status(200).json({
      status: 200,
      match,
      canDelete: !!user && (user.role === 'Admin' || (user.role === 'Manager' && user.teamId === match.teamId.toHexString())),
      canEdit: !!user && (user.role === 'Admin' || (user.role === 'Manager' && user.teamId === match.teamId.toHexString())),
      message: 'Successfully received match',
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
export const createMatch: RequestHandler = async (req, res) => {
  const { value: match, error } = MatchJoi.validate(req.body);
  if (error) return res.status(400).json({ status: 400, message: error.message });

  const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User;

  try {
    const createdMatch = await MatchService.createMatch(match);
    return res.status(201).json({
      status: 201,
      match: createdMatch,
      canDelete: user.role === 'Admin' || (user.role === 'Manager' && user.teamId === createdMatch.teamId.toHexString()),
      canEdit: user.role === 'Admin' || (user.role === 'Manager' && user.teamId === createdMatch.teamId.toHexString()),
      message: 'Successfully created match',
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
export const updateMatch: RequestHandler = async (req, res) => {
  const { value: match, error } = MatchJoi.validate(req.body);
  if (error) return res.status(400).json({ status: 400, message: error.message });

  const user = jwt.decode(req.cookies[jwtConfig.cookieName]) as User;

  try {
    const updatedMatch = await MatchService.updateMatch(match);
    return res.status(200).json({
      status: 200,
      match: updatedMatch,
      canDelete: user.role === 'Admin' || (user.role === 'Manager' && user.teamId === updatedMatch.teamId.toHexString()),
      canEdit: user.role === 'Admin' || (user.role === 'Manager' && user.teamId === updatedMatch.teamId.toHexString()),
      message: 'Successfully updated match',
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
export const deleteMatch: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    return res.status(200).json({
      status: 200,
      match: await MatchService.deleteMatch(id),
      message: 'Successfully deleted match',
    });
  }
  catch (e) {
    return res.status(500).json({
      status: 500,
      message: e.message,
    });
  }
};
