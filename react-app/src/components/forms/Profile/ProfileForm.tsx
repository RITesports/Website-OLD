import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

import DeleteIcon from 'mdi-material-ui/Delete';
import DiscordIcon from 'mdi-material-ui/Discord';
import FacebookIcon from 'mdi-material-ui/Facebook';
import InstagramIcon from 'mdi-material-ui/Instagram';
import TelevisionIcon from 'mdi-material-ui/Television';
import TwitterIcon from 'mdi-material-ui/Twitter';
import YoutubeIcon from 'mdi-material-ui/Youtube';
import WaveIcon from 'mdi-material-ui/Hail';
import CrownIcon from 'mdi-material-ui/CrownOutline';

import { playerNoPhoto } from '../../../assets/images';
import { banner } from '../../../assets/images';
import GameForm from './Game';
import Profile from '../../../models/profile';
import { ProfileActions } from '../../../utils/profile';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  profileInputs: {
    paddingBottom: '0 !important',
  },
  profileInput: {
    display: 'block',
  },
  title: {
    color: 'white',
    padding: theme.spacing(6),
  },
  detailsGrid: {
    padding: theme.spacing(3),
  },
  card: {
    minHeight: '26rem',
    width: '18rem',
  },
  bio: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  gameCard: {
    height: '4rem',
    width: '25rem',
  },
  cardTransition: {
    transition: '.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  gameTextContainer: {
    height: '100%',
  },
}));

type Props = {
  profile: Profile,
  dispatch: React.Dispatch<ProfileActions>,
};
const ProfileForm: React.FC<Props> = ({ profile, dispatch }) => {
  const classes = useStyles();

  return (
    <>
      <>
        <Grid container direction="row" justify="center" alignItems="center" spacing={3} className={classes.detailsGrid}>
          <Grid item>
            <Card raised className={classes.card}>
              <CardMedia component="img" src={playerNoPhoto} />
              <CardContent>
                <TextField
                  label="Name"
                  value={profile.name || ''}
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <WaveIcon />
                      </InputAdornment>
                    )
                  }}
                  onChange={(e) => dispatch({ type: 'PROFILE_SET_NAME', name: e.target.value })}
                  className={classes.profileInput}
                />
                <Divider />
                <TextField
                  multiline
                  label="Bio"
                  value={profile.bio || ''}
                  helperText={` ${profile.bio?.length === 69 ? 'Nice' : (profile.bio?.length || 0)} / 160`}
                  variant="outlined"
                  margin="normal"
                  onChange={(e) => dispatch({ type: 'PROFILE_SET_BIO', bio: e.target.value })}
                  className={classes.profileInput}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <TextField
              label="Facebook Url"
              value={profile.facebookUrl || ''}
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FacebookIcon htmlColor="#3b5998" />
                  </InputAdornment>
                )
              }}
              onChange={(e) => dispatch({ type: 'PROFILE_SET_FACEBOOK_URL', facebookUrl: e.target.value })}
              className={classes.profileInput}
            />
            <TextField
              label="Twitter Url"
              value={profile.twitterUrl || ''}
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TwitterIcon htmlColor="#1da1f2" />
                  </InputAdornment>
                )
              }}
              onChange={(e) => dispatch({ type: 'PROFILE_SET_TWITTER_URL', twitterUrl: e.target.value })}
              className={classes.profileInput}
            />
            <TextField
              label="Instagram Url"
              value={profile.instagramUrl || ''}
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InstagramIcon htmlColor="#e1306c" />
                  </InputAdornment>
                )
              }}
              onChange={(e) => dispatch({ type: 'PROFILE_SET_INSTAGRAM_URL', instagramUrl: e.target.value })}
              className={classes.profileInput}
            />
            <TextField
              label="Youtube Url"
              value={profile.youtubeUrl || ''}
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <YoutubeIcon htmlColor="#FF0000" />
                  </InputAdornment>
                )
              }}
              onChange={(e) => dispatch({ type: 'PROFILE_SET_YOUTUBE_URL', youtubeUrl: e.target.value })}
              className={classes.profileInput}
            />
            <TextField
              label="Stream Url"
              value={profile.streamUrl || ''}
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TelevisionIcon />
                  </InputAdornment>
                )
              }}
              onChange={(e) => dispatch({ type: 'PROFILE_SET_STREAM_URL', streamUrl: e.target.value })}
              className={classes.profileInput}
            />
            <TextField
              label="Discord Username"
              value={profile.discordUsername || ''}
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DiscordIcon htmlColor="#7289da" />
                  </InputAdornment>
                )
              }}
              onChange={(e) => dispatch({ type: 'PROFILE_SET_DISCORD_USERNAME', discordUsername: e.target.value })}
              className={classes.profileInput}
            />
          </Grid>
        </Grid>
      </>
      <Grid container direction="column" alignItems="center" spacing={5}>
        <Grid item>
          <Typography variant="h4">Game Accounts</Typography>
        </Grid>
        {profile.games?.map((game) => (
          <Grid item>
            <GameForm game={game} dispatch={dispatch} />
            <Button variant="contained" color="secondary" onClick={() => dispatch({ type: 'PROFILE_GAME_REMOVE', game: game })}><DeleteIcon /></Button>
          </Grid>
        ))}
        <Grid item>
          <Button variant="outlined" size="large" color="primary" onClick={() => dispatch({ type: 'PROFILE_GAME_ADD' })}>Add a Game</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileForm;