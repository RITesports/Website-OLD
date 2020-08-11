import ObjectID from 'bson-objectid';

import League from './league';
import Member from './member';

export default class Division {
  _id = new ObjectID().toHexString();

  name?: string;

  members?: Member[];
  leagues?: League[];
}
