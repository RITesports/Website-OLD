import { Team, TeamDocument } from '../../models/team';

/* Create */
export const createTeam = async (team: Team) => {
  try {
    return await Team.create(team);
  }
  catch (e) {
    console.error(e);
    throw Error('Error creating team');
  }
};

/* Read */
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

/* Update */
export const updateTeam = async (team: Team) => {
  let updatedTeam: TeamDocument | null;

  try {
    // @ts-ignore: Overwrite is a property but typings aren't updated for mongoose
    updatedTeam = await Team.findByIdAndUpdate(team._id, team, { new: true, overwrite: true });
  }
  catch (e) {
    console.error(e);
    throw Error('Error updating team');
  }

  if (!updatedTeam) throw Error('Error finding team by id');
  return updatedTeam;
};

/* Delete */
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
