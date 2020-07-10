import ObjectID from 'bson-objectid';

export default class Game {
  _id = new ObjectID().toHexString();

  name = '';
  platform: 'PC' | 'PlayStation' | 'Xbox' | 'Switch' | 'Other' = 'Other';

  username = '';
  tracker?: string;
}
