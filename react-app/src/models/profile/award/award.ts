import ObjectID from 'bson-objectid';

export default class Award {
  _id = new ObjectID().toHexString();

  text = '';
  color = '#F25822';
}