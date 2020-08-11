import Team from '../../models/team';
import Division from '../../models/team/division';
import League from '../../models/team/division/league';
import Member from '../../models/team/division/member';

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

  | { type: 'DIVISION_MEMBER_ADD', division: Division }
  | { type: 'DIVISION_MEMBER_REMOVE', division: Division, member: Member }
  | { type: 'DIVISION_MEMBER_UP', division: Division, member: Member }
  | { type: 'DIVISION_MEMBER_DOWN', division: Division, member: Member }

  | LeagueActions
  | MemberActions;

export type LeagueActions =
  | { type: 'LEAGUE_SET_NAME', division: Division, league: League, name: string }
  | { type: 'LEAGUE_SET_URL', division: Division, league: League, url: string }
  | { type: 'LEAGUE_SET_IMAGE_URL', division: Division, league: League, imageUrl: string };

export type MemberActions =
  | { type: 'MEMBER_SET_USERNAME', division: Division, member: Member, username: string }
  | { type: 'MEMBER_SET_ROLE', division: Division, member: Member, role: string }
  | { type: 'MEMBER_SET_PROFILE_ID', division: Division, member: Member, profileId: string }
  | { type: 'MEMBER_SET_IMAGE_URL', division: Division, member: Member, imageUrl: string };
