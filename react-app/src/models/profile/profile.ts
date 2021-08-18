import ObjectID from 'bson-objectid';

import Game from './game';
import Award from './award';

export default class Profile {
  _id = new ObjectID().toHexString();

  name?: string;
  bio?: string;
  imageUrl?: string;

  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  streamUrl?: string;
  discordUsername?: string;

  games?: Game[];
  awards?: Award[];
}
