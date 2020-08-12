import { Reducer } from 'react';

import {
  TeamActions, DivisionActions, LeagueActions, MemberActions,
} from './actions';
import Team from '../../models/team';
import Division from '../../models/team/division';
import League from '../../models/team/division/league';
import Member from '../../models/team/division/member';

const memberReducer: Reducer<Member, MemberActions> = (prevMember, action) => {
  switch (action.type) {
    case 'MEMBER_SET_USERNAME':
      return { ...prevMember, username: action.username };
    case 'MEMBER_SET_ROLE':
      return { ...prevMember, role: action.role };
    case 'MEMBER_SET_PROFILE_ID':
      return { ...prevMember, profileId: action.profileId || undefined };
    case 'MEMBER_SET_IMAGE_URL':
      return { ...prevMember, imageUrl: action.imageUrl || undefined };
    default:
      return prevMember;
  }
};

const leagueReducer: Reducer<League, LeagueActions> = (prevLeague, action) => {
  switch (action.type) {
    case 'LEAGUE_SET_NAME':
      return { ...prevLeague, name: action.name };
    case 'LEAGUE_SET_URL':
      return { ...prevLeague, url: action.url };
    case 'LEAGUE_SET_IMAGE_URL':
      return { ...prevLeague, imageUrl: action.imageUrl || undefined };

    default:
      return prevLeague;
  }
};

const divisionReducer: Reducer<Division, DivisionActions> = (prevDivision, action) => {
  switch (action.type) {
    case 'DIVISION_SET_NAME':
      return { ...prevDivision, name: action.name || undefined };

    case 'DIVISION_LEAGUE_ADD':
      return { ...prevDivision, leagues: prevDivision.leagues ? [...prevDivision.leagues, new League()] : [new League()] };
    case 'DIVISION_LEAGUE_REMOVE':
      return { ...prevDivision, leagues: prevDivision.leagues?.filter((league) => league !== action.league) };
    case 'DIVISION_LEAGUE_UP':
      if (prevDivision.leagues) {
        const index = prevDivision.leagues.indexOf(action.league);

        if (index !== 0 && index !== -1) {
          const leaguesCopy = [...prevDivision.leagues];

          [leaguesCopy[index - 1], leaguesCopy[index]] = [leaguesCopy[index], leaguesCopy[index - 1]];

          return { ...prevDivision, leagues: leaguesCopy };
        }
      }
      return prevDivision;
    case 'DIVISION_LEAGUE_DOWN':
      if (prevDivision.leagues) {
        const index = prevDivision.leagues.indexOf(action.league);

        if (index !== prevDivision.leagues.length - 1 && index !== -1) {
          const leaguesCopy = [...prevDivision.leagues];

          [leaguesCopy[index], leaguesCopy[index + 1]] = [leaguesCopy[index + 1], leaguesCopy[index]];

          return { ...prevDivision, leagues: leaguesCopy };
        }
      }
      return prevDivision;

    case 'DIVISION_MEMBER_ADD':
      return { ...prevDivision, members: prevDivision.members ? [...prevDivision.members, new Member()] : [new Member()] };
    case 'DIVISION_MEMBER_REMOVE':
      return { ...prevDivision, members: prevDivision.members?.filter((member) => member !== action.member) };
    case 'DIVISION_MEMBER_UP':
      if (prevDivision.members) {
        const index = prevDivision.members.indexOf(action.member);

        if (index !== 0 && index !== -1) {
          const membersCopy = [...prevDivision.members];

          [membersCopy[index - 1], membersCopy[index]] = [membersCopy[index], membersCopy[index - 1]];

          return { ...prevDivision, members: membersCopy };
        }
      }
      return prevDivision;
    case 'DIVISION_MEMBER_DOWN':
      if (prevDivision.members) {
        const index = prevDivision.members.indexOf(action.member);

        if (index !== prevDivision.members.length - 1 && index !== -1) {
          const membersCopy = [...prevDivision.members];

          [membersCopy[index], membersCopy[index + 1]] = [membersCopy[index + 1], membersCopy[index]];

          return { ...prevDivision, members: membersCopy };
        }
      }
      return prevDivision;

    case 'LEAGUE_SET_NAME':
    case 'LEAGUE_SET_URL':
    case 'LEAGUE_SET_IMAGE_URL':
      return { ...prevDivision, leagues: prevDivision.leagues?.map((league) => (league === action.league ? leagueReducer(league, action) : league)) };

    case 'MEMBER_SET_USERNAME':
    case 'MEMBER_SET_ROLE':
    case 'MEMBER_SET_PROFILE_ID':
    case 'MEMBER_SET_IMAGE_URL':
      return { ...prevDivision, members: prevDivision.members?.map((member) => (member === action.member ? memberReducer(member, action) : member)) };

    default:
      return prevDivision;
  }
};

const teamReducer: Reducer<Team, TeamActions> = (prevTeam, action) => {
  switch (action.type) {
    case 'SET_TEAM':
      return action.team;

    case 'TEAM_SET_NAME':
      return { ...prevTeam, name: action.name };
    case 'TEAM_SET_IDENTIFIER':
      return { ...prevTeam, identifier: action.identifier.toLowerCase() };

    case 'TEAM_DIVISION_ADD':
      return { ...prevTeam, divisions: prevTeam.divisions ? [...prevTeam.divisions, new Division()] : [new Division()] };
    case 'TEAM_DIVISION_REMOVE':
      return { ...prevTeam, divisions: prevTeam.divisions?.filter((division) => division !== action.division) };
    case 'TEAM_DIVISION_UP':
      if (prevTeam.divisions) {
        const index = prevTeam.divisions.indexOf(action.division);

        if (index !== 0 && index !== -1) {
          const divisionsCopy = [...prevTeam.divisions];

          [divisionsCopy[index - 1], divisionsCopy[index]] = [divisionsCopy[index], divisionsCopy[index - 1]];

          return { ...prevTeam, divisions: divisionsCopy };
        }
      }
      return prevTeam;
    case 'TEAM_DIVISION_DOWN':
      if (prevTeam.divisions) {
        const index = prevTeam.divisions.indexOf(action.division);

        if (index !== prevTeam.divisions.length - 1 && index !== -1) {
          const divisionsCopy = [...prevTeam.divisions];

          [divisionsCopy[index], divisionsCopy[index + 1]] = [divisionsCopy[index + 1], divisionsCopy[index]];

          return { ...prevTeam, divisions: divisionsCopy };
        }
      }
      return prevTeam;

    case 'DIVISION_SET_NAME':
    case 'DIVISION_MEMBER_ADD':
    case 'DIVISION_MEMBER_REMOVE':
    case 'DIVISION_MEMBER_UP':
    case 'DIVISION_MEMBER_DOWN':
    case 'DIVISION_LEAGUE_ADD':
    case 'DIVISION_LEAGUE_REMOVE':
    case 'DIVISION_LEAGUE_UP':
    case 'DIVISION_LEAGUE_DOWN':
    // fallthrough
    case 'LEAGUE_SET_NAME':
    case 'LEAGUE_SET_URL':
    case 'LEAGUE_SET_IMAGE_URL':
    // fallthrough
    case 'MEMBER_SET_USERNAME':
    case 'MEMBER_SET_ROLE':
    case 'MEMBER_SET_PROFILE_ID':
    case 'MEMBER_SET_IMAGE_URL':
      return { ...prevTeam, divisions: prevTeam.divisions?.map((division) => (division === action.division ? divisionReducer(division, action) : division)) };

    default:
      return prevTeam;
  }
};

export default teamReducer;
