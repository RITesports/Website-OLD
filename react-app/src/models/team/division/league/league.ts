import ObjectID from 'bson-objectid';

export default class League {
  _id = new ObjectID().toHexString();

  name = '';
  url = '';

  imageUrl?: string;
}
