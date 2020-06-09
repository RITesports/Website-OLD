import { Team, TeamDocument } from '../../models/team';

export const createTeam = async (team: Team) => {
  try {
    return await Team.create(team);
  }
  catch (e) {
    console.error(e);
    throw Error('Error creating team');
  }
};

export const findTeams = async () => {
  try {
    return await Team.find().sort('name');
  }
  catch (e) {
    console.error(e);
    throw Error('Error fiding teams');
  }
};
export const findTeamByIdentifierOrId = async (identifierOrId: string) => {
  let team: TeamDocument | null;

  try {
    team = await Team.findOne({ identifier: identifierOrId }) || await Team.findById(identifierOrId);
  }
  catch (e) {
    console.error(e);
    throw Error('Error finding team');
  }

  if (!team) throw Error('Error finding team by id');
  return team;
};

export const updateTeam = async (team: Team) => {
  let updatedTeam: TeamDocument | null;

  try {
    updatedTeam = await Team.findByIdAndUpdate(team._id, team, { new: true });
  }
  catch (e) {
    console.error(e);
    throw Error('Error updating team');
  }

  if (!updatedTeam) throw Error('Error finding team by id');
  return updatedTeam;
};

export const deleteTeam = async (id: string) => {
  let deletedTeam: TeamDocument | null;

  try {
    deletedTeam = await Team.findByIdAndDelete(id);
  }
  catch (e) {
    console.error(e);
    throw Error('Error deleting team');
  }

  if (!deletedTeam) throw Error('Error finding team by id');
  return deletedTeam;
};
