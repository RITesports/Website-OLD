import { FilterQuery, PaginateOptions, Types } from 'mongoose';

import { Match, MatchDocument } from '../../models/match';

/* Create */
export const createMatch = async (match: Match) => {
  try {
    return await Match.create(match);
  }
  catch (e) {
    console.error(e);
    throw Error('Error creating match');
  }
};

/* Read */
export const findMatches = async (filterQuery: FilterQuery<MatchDocument>, paginateOptions: PaginateOptions) => {
  try {
    return await Match.paginate(filterQuery, { ...paginateOptions, sort: 'startTime', populate: 'team', limit: 15 });
  }
  catch (e) {
    console.error(e);
    throw Error('Error finding matches');
  }
};
export const findMatchById = async (id: string) => {
  let match: MatchDocument | null;

  try {
    match = await Match.findById(id).populate('team');
  }
  catch (e) {
    console.error(e);
    throw Error('Error finding match');
  }

  if (!match) throw Error('Error finding match by id');
  return match;
};

/* Update */
export const updateMatch = async (match: Match) => {
  let updatedMatch: MatchDocument | null;

  try {
    updatedMatch = await Match.findByIdAndUpdate(match._id, { ...match, teamId: Types.ObjectId(match.teamId), startTime: match.startTime ? new Date(match.startTime) : undefined }, { new: true });
  }
  catch (e) {
    console.error(e);
    throw Error('Error updating match');
  }

  if (!updatedMatch) throw Error('Error finding match by id');
  return updatedMatch;
};

/* Delete */
export const deleteMatch = async (id: string) => {
  let deletedMatch: MatchDocument | null;

  try {
    deletedMatch = await Match.findByIdAndDelete(id);
  }
  catch (e) {
    console.error(e);
    throw Error('Error deleting match');
  }

  if (!deletedMatch) throw Error('Error finding match by id');
  return deletedMatch;
};
