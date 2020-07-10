import ObjectID from 'bson-objectid';

export default class Player {
  _id = new ObjectID().toHexString();

  username = '';
  role = '';

  profileId?: string;

  imageUrl?: string;
}
