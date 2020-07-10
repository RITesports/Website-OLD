import Profile from '../../models/profile';
import Game from '../../models/profile/game';

export type ProfileActions =
  | { type: 'SET_PROFILE', profile: Profile }

  | { type: 'PROFILE_SET_NAME', name: string }
  | { type: 'PROFILE_SET_BIO', bio: string }

  | { type: 'PROFILE_SET_FACEBOOK_URL', facebookUrl: string }
  | { type: 'PROFILE_SET_TWITTER_URL', twitterUrl: string }
  | { type: 'PROFILE_SET_INSTAGRAM_URL', instagramUrl: string }
  | { type: 'PROFILE_SET_YOUTUBE_URL', youtubeUrl: string }
  | { type: 'PROFILE_SET_STREAM_URL', streamUrl: string }
  | { type: 'PROFILE_SET_DISCORD_USERNAME', discordUsername: string }

  | { type: 'PROFILE_GAME_ADD' }
  | { type: 'PROFILE_GAME_REMOVE', game: Game }
  | { type: 'PROFILE_GAME_UP', game: Game }
  | { type: 'PROFILE_GAME_DOWN', game: Game }

  | GameActions;

export type GameActions =
  | { type: 'GAME_SET_NAME', game: Game, name: string }
  | { type: 'GAME_SET_PLATFORM', game: Game, platform: 'PC' | 'PlayStation' | 'Xbox' | 'Switch' | 'Other' }

  | { type: 'GAME_SET_USERNAME', game: Game, username: string }
  | { type: 'GAME_SET_TRACKER', game: Game, tracker: string };
