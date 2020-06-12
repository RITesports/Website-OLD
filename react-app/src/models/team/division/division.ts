import League from './league';
import Player from './player';

export default class Division {
  name?: string;

  players?: Player[];
  leagues?: League[];
}
