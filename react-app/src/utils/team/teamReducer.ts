import { Reducer } from 'react';

import {
  TeamActions, DivisionActions, LeagueActions, PlayerActions,
} from './actions';
import Team from '../../models/team';
import Division from '../../models/team/division';
import League from '../../models/team/division/league';
import Player from '../../models/team/division/player';

const playerReducer: Reducer<Player, PlayerActions> = (prevPlayer, action) => {
  switch (action.type) {
    case 'PLAYER_SET_USERNAME':
      return { ...prevPlayer, username: action.username };
    case 'PLAYER_SET_ROLE':
      return { ...prevPlayer, role: action.role };
    case 'PLAYER_SET_PROFILE_ID':
      return { ...prevPlayer, profileId: action.profileId || undefined };
    case 'PLAYER_SET_IMAGE_URL':
      return { ...prevPlayer, imageUrl: action.imageUrl || undefined };
    default:
      return prevPlayer;
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

    case 'DIVISION_PLAYER_ADD':
      return { ...prevDivision, players: prevDivision.players ? [...prevDivision.players, new Player()] : [new Player()] };
    case 'DIVISION_PLAYER_REMOVE':
      return { ...prevDivision, players: prevDivision.players?.filter((player) => player !== action.player) };
    case 'DIVISION_PLAYER_UP':
      if (prevDivision.players) {
        const index = prevDivision.players.indexOf(action.player);

        if (index !== 0 && index !== -1) {
          const playersCopy = [...prevDivision.players];

          [playersCopy[index - 1], playersCopy[index]] = [playersCopy[index], playersCopy[index - 1]];

          return { ...prevDivision, players: playersCopy };
        }
      }
      return prevDivision;
    case 'DIVISION_PLAYER_DOWN':
      if (prevDivision.players) {
        const index = prevDivision.players.indexOf(action.player);

        if (index !== prevDivision.players.length - 1 && index !== -1) {
          const playersCopy = [...prevDivision.players];

          [playersCopy[index], playersCopy[index + 1]] = [playersCopy[index + 1], playersCopy[index]];

          return { ...prevDivision, players: playersCopy };
        }
      }
      return prevDivision;

    case 'LEAGUE_SET_NAME':
    case 'LEAGUE_SET_URL':
    case 'LEAGUE_SET_IMAGE_URL':
      return { ...prevDivision, leagues: prevDivision.leagues?.map((league) => (league === action.league ? leagueReducer(league, action) : league)) };

    case 'PLAYER_SET_USERNAME':
    case 'PLAYER_SET_ROLE':
    case 'PLAYER_SET_PROFILE_ID':
    case 'PLAYER_SET_IMAGE_URL':
      return { ...prevDivision, players: prevDivision.players?.map((player) => (player === action.player ? playerReducer(player, action) : player)) };

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
    case 'DIVISION_PLAYER_ADD':
    case 'DIVISION_PLAYER_REMOVE':
    case 'DIVISION_PLAYER_UP':
    case 'DIVISION_PLAYER_DOWN':
    case 'DIVISION_LEAGUE_ADD':
    case 'DIVISION_LEAGUE_REMOVE':
    case 'DIVISION_LEAGUE_UP':
    case 'DIVISION_LEAGUE_DOWN':
    // fallthrough
    case 'LEAGUE_SET_NAME':
    case 'LEAGUE_SET_URL':
    case 'LEAGUE_SET_IMAGE_URL':
    // fallthrough
    case 'PLAYER_SET_USERNAME':
    case 'PLAYER_SET_ROLE':
    case 'PLAYER_SET_PROFILE_ID':
    case 'PLAYER_SET_IMAGE_URL':
      return { ...prevTeam, divisions: prevTeam.divisions?.map((division) => (division === action.division ? divisionReducer(division, action) : division)) };

    default:
      return prevTeam;
  }
};

export default teamReducer;
