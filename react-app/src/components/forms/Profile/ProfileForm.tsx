import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ArrowDownBoldIcon from 'mdi-material-ui/ArrowDownBold';
import ArrowUpBoldIcon from 'mdi-material-ui/ArrowUpBold';
import ChevronDownIcon from 'mdi-material-ui/ChevronDown';
import DeleteIcon from 'mdi-material-ui/Delete';
import DiscordIcon from 'mdi-material-ui/Discord';
import FacebookIcon from 'mdi-material-ui/Facebook';
import InstagramIcon from 'mdi-material-ui/Instagram';
import TelevisionIcon from 'mdi-material-ui/Television';
import TwitterIcon from 'mdi-material-ui/Twitter';
import YoutubeIcon from 'mdi-material-ui/Youtube';

import GameForm from './Game';
import ProfileCard from '../../cards/Profile';
import Profile from '../../../models/profile';
import { ProfileActions } from '../../../utils/profile';

const useStyles = makeStyles((theme) => createStyles({
  profileInput: {
    display: 'block',
  },
  accordion: {
    flexDirection: 'column',
  },
  gameAccounts: {
    marginTop: theme.spacing(3),
  },
  buttonGroup: {
    marginTop: theme.spacing(1),
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
      <Grid container justify="center" spacing={3}>
        <Grid item>
          <ProfileCard>
            <TextField
              label="Name"
              value={profile.name || ''}
              helperText={`${(profile.name?.length) || 0} / 32`}
              variant="outlined"
              margin="normal"
              onChange={(e) => dispatch({ type: 'PROFILE_SET_NAME', name: e.target.value })}
              fullWidth
              className={classes.profileInput}
            />
            <TextField
              multiline
              label="Bio"
              value={profile.bio || ''}
              helperText={`${(profile.bio?.length === 69 ? 'Nice' : profile.bio?.length) || 0} / 160`}
              variant="outlined"
              margin="normal"
              onChange={(e) => dispatch({ type: 'PROFILE_SET_BIO', bio: e.target.value })}
              fullWidth
              className={classes.profileInput}
            />
          </ProfileCard>
        </Grid>
        <Grid item>
          <Typography variant="h4" align="center">Social Media</Typography>
          <TextField
            type="url"
            label="Facebook URL"
            value={profile.facebookUrl || ''}
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FacebookIcon htmlColor="#3b5998" />
                </InputAdornment>
              ),
            }}
            onChange={(e) => dispatch({ type: 'PROFILE_SET_FACEBOOK_URL', facebookUrl: e.target.value })}
            className={classes.profileInput}
          />
          <TextField
            type="url"
            label="Twitter URL"
            value={profile.twitterUrl || ''}
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TwitterIcon htmlColor="#1da1f2" />
                </InputAdornment>
              ),
            }}
            onChange={(e) => dispatch({ type: 'PROFILE_SET_TWITTER_URL', twitterUrl: e.target.value })}
            className={classes.profileInput}
          />
          <TextField
            type="url"
            label="Instagram URL"
            value={profile.instagramUrl || ''}
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InstagramIcon htmlColor="#e1306c" />
                </InputAdornment>
              ),
            }}
            onChange={(e) => dispatch({ type: 'PROFILE_SET_INSTAGRAM_URL', instagramUrl: e.target.value })}
            className={classes.profileInput}
          />
          <TextField
            type="url"
            label="Youtube URL"
            value={profile.youtubeUrl || ''}
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <YoutubeIcon htmlColor="#FF0000" />
                </InputAdornment>
              ),
            }}
            onChange={(e) => dispatch({ type: 'PROFILE_SET_YOUTUBE_URL', youtubeUrl: e.target.value })}
            className={classes.profileInput}
          />
          <TextField
            type="url"
            label="Stream URL"
            value={profile.streamUrl || ''}
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TelevisionIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => dispatch({ type: 'PROFILE_SET_STREAM_URL', streamUrl: e.target.value })}
            className={classes.profileInput}
          />
          <TextField
            label="Discord Username"
            value={profile.discordUsername || ''}
            error={!!profile.discordUsername && !/.+#\d{4}/i.exec(profile.discordUsername)}
            helperText={!!profile.discordUsername && !/.+#\d{4}/i.exec(profile.discordUsername) && 'Invalid Discord Username'}
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DiscordIcon htmlColor="#7289da" />
                </InputAdornment>
              ),
            }}
            onChange={(e) => dispatch({ type: 'PROFILE_SET_DISCORD_USERNAME', discordUsername: e.target.value })}
            className={classes.profileInput}
          />
        </Grid>
      </Grid>
      <Grid container direction="column" alignItems="center" spacing={3} className={classes.gameAccounts}>
        <Grid item>
          <Typography variant="h4">{`Game Accounts ${profile.games?.length || 0} / 20`}</Typography>
        </Grid>
        {profile.games?.map((game, index, gamesArr) => (
          <Grid key={game._id} item>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ChevronDownIcon />}><Typography>{game.name ? `Game #${index + 1}` : 'No Game Name*'}</Typography></AccordionSummary>
              <AccordionDetails classes={{ root: classes.accordion }}>
                <GameForm game={game} dispatch={dispatch} />
                <ButtonGroup fullWidth className={classes.buttonGroup}>
                  <Button variant="contained" color="secondary" onClick={() => dispatch({ type: 'PROFILE_GAME_REMOVE', game })}><DeleteIcon /></Button>
                  <Button variant="contained" color="primary" disabled={index === 0} onClick={() => dispatch({ type: 'PROFILE_GAME_UP', game })}><ArrowUpBoldIcon /></Button>
                  <Button variant="contained" color="primary" disabled={index === gamesArr.length - 1} onClick={() => dispatch({ type: 'PROFILE_GAME_DOWN', game })}><ArrowDownBoldIcon /></Button>
                </ButtonGroup>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
        {profile.games && profile.games.length < 20 && (
          <Grid item>
            <Button variant="outlined" size="large" color="primary" onClick={() => dispatch({ type: 'PROFILE_GAME_ADD' })}>Add Game</Button>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default ProfileForm;
