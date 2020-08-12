import ObjectID from 'bson-objectid';

export default class Member {
  _id = new ObjectID().toHexString();

  username = '';
  role = '';

  profileId?: string;
  profile: { _id: string, name?: string, imageUrl?: string } | null = null;

  imageUrl?: string;
}
