import { Reducer } from 'react';

import { ProfileActions, GameActions } from './actions';
import Profile from '../../models/profile';
import Game from '../../models/profile/game';

const gameReducer: Reducer<Game, GameActions> = (prevGame, action) => {
  switch (action.type) {
    case 'GAME_SET_NAME':
      return { ...prevGame, name: action.name };
    case 'GAME_SET_PLATFORM':
      return { ...prevGame, platform: action.platform };

    case 'GAME_SET_USERNAME':
      return { ...prevGame, username: action.username };
    case 'GAME_SET_TRACKER':
      return { ...prevGame, tracker: action.tracker || undefined };

    default:
      return prevGame;
  }
};

const profileReducer: Reducer<Profile, ProfileActions> = (prevProfile, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return action.profile;

    case 'PROFILE_SET_NAME':
      return { ...prevProfile, name: (action.name.length > 32 ? prevProfile.name : action.name) || undefined };
    case 'PROFILE_SET_BIO':
      return { ...prevProfile, bio: (action.bio.length > 160 ? prevProfile.bio : action.bio) || undefined };

    case 'PROFILE_SET_FACEBOOK_URL':
      return { ...prevProfile, facebookUrl: action.facebookUrl || undefined };
    case 'PROFILE_SET_TWITTER_URL':
      return { ...prevProfile, twitterUrl: action.twitterUrl || undefined };
    case 'PROFILE_SET_INSTAGRAM_URL':
      return { ...prevProfile, instagramUrl: action.instagramUrl || undefined };
    case 'PROFILE_SET_YOUTUBE_URL':
      return { ...prevProfile, youtubeUrl: action.youtubeUrl || undefined };
    case 'PROFILE_SET_STREAM_URL':
      return { ...prevProfile, streamUrl: action.streamUrl || undefined };
    case 'PROFILE_SET_DISCORD_USERNAME':
      return { ...prevProfile, discordUsername: action.discordUsername || undefined };

    case 'PROFILE_GAME_ADD':
      return { ...prevProfile, games: prevProfile.games ? [...prevProfile.games, new Game()] : [new Game()] };
    case 'PROFILE_GAME_REMOVE':
      return { ...prevProfile, games: prevProfile.games?.filter((game) => game !== action.game) };
    case 'PROFILE_GAME_UP':
      if (prevProfile.games) {
        const index = prevProfile.games.indexOf(action.game);

        if (index !== 0 && index !== -1) {
          const gamesCopy = [...prevProfile.games];

          [gamesCopy[index - 1], gamesCopy[index]] = [gamesCopy[index], gamesCopy[index - 1]];

          return { ...prevProfile, games: gamesCopy };
        }
      }
      return prevProfile;
    case 'PROFILE_GAME_DOWN':
      if (prevProfile.games) {
        const index = prevProfile.games.indexOf(action.game);

        if (index !== prevProfile.games.length - 1 && index !== -1) {
          const gamesCopy = [...prevProfile.games];

          [gamesCopy[index], gamesCopy[index + 1]] = [gamesCopy[index + 1], gamesCopy[index]];

          return { ...prevProfile, games: gamesCopy };
        }
      }
      return prevProfile;

    case 'GAME_SET_NAME':
    case 'GAME_SET_PLATFORM':
    case 'GAME_SET_USERNAME':
    case 'GAME_SET_TRACKER':
      return { ...prevProfile, games: prevProfile.games?.map((game) => (game === action.game ? gameReducer(game, action) : game)) };

    default:
      return prevProfile;
  }
};

export default profileReducer;
