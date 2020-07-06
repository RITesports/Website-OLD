import ObjectID from 'bson-objectid';

import Game from './game';

export default class Profile {
  _id = new ObjectID().toHexString();

  name?: string;
  bio?: string;

  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  streamUrl?: string;
  discordUsername?: string;

  games?: Game[];
}