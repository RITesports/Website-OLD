import Team from '../../models/team';
import Division from '../../models/team/division';
import League from '../../models/team/division/league';
import Player from '../../models/team/division/player';

export type TeamActions =
  | { type: 'SET_TEAM', team: Team }

  | { type: 'TEAM_SET_NAME', name: string }
  | { type: 'TEAM_SET_IDENTIFIER', identifier: string }

  | { type: 'TEAM_DIVISION_ADD' }
  | { type: 'TEAM_DIVISION_REMOVE', division: Division }
  | { type: 'TEAM_DIVISION_UP', division: Division }
  | { type: 'TEAM_DIVISION_DOWN', division: Division }

  | DivisionActions;

export type DivisionActions =
  | { type: 'DIVISION_SET_NAME', division: Division, name: string }

  | { type: 'DIVISION_LEAGUE_ADD', division: Division }
  | { type: 'DIVISION_LEAGUE_REMOVE', division: Division, league: League }
  | { type: 'DIVISION_LEAGUE_UP', division: Division, league: League }
  | { type: 'DIVISION_LEAGUE_DOWN', division: Division, league: League }

  | { type: 'DIVISION_PLAYER_ADD', division: Division }
  | { type: 'DIVISION_PLAYER_REMOVE', division: Division, player: Player }
  | { type: 'DIVISION_PLAYER_UP', division: Division, player: Player }
  | { type: 'DIVISION_PLAYER_DOWN', division: Division, player: Player }

  | LeagueActions
  | PlayerActions;

export type LeagueActions =
  | { type: 'LEAGUE_SET_NAME', division: Division, league: League, name: string }
  | { type: 'LEAGUE_SET_URL', division: Division, league: League, url: string }
  | { type: 'LEAGUE_SET_IMAGE_URL', division: Division, league: League, imageUrl: string };

export type PlayerActions =
  | { type: 'PLAYER_SET_USERNAME', division: Division, player: Player, username: string }
  | { type: 'PLAYER_SET_ROLE', division: Division, player: Player, role: string }
  | { type: 'PLAYER_SET_IMAGE_URL', division: Division, player: Player, imageUrl: string };
