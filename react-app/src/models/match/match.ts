import ObjectID from 'bson-objectid';

import Team from '../team';
import Division from '../team/division';

export default class Match {
  _id = new ObjectID().toHexString();

  name = '';
  final = false;
  startTime?: string; // ISO Date String

  outcome?: 'Win' | 'Loss' | 'Tie';

  teamId = '';
  team = new Team();
  division?: Division;
  score?: number;

  opponent?: string;
  opponentScore?: number;

  streamUrl?: string;
  vodUrl?: string;
}
