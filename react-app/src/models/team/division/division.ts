import ObjectID from 'bson-objectid';

import League from './league';
import Player from './player';

export default class Division {
  _id = new ObjectID().toHexString();

  name?: string;

  players?: Player[];
  leagues?: League[];
}
