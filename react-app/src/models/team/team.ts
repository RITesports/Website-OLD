import ObjectID from 'bson-objectid';

import Division from './division';

export default class Team {
  _id = new ObjectID().toHexString();

  name = '';
  identifier = '';

  divisions?: Division[];

  imageUrl?: string;
}
