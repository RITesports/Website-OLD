import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DiscordIcon from 'mdi-material-ui/Discord';
import FacebookIcon from 'mdi-material-ui/Facebook';
import InstagramIcon from 'mdi-material-ui/Instagram';
import TelevisionIcon from 'mdi-material-ui/Television';
import TwitterIcon from 'mdi-material-ui/Twitter';
import YoutubeIcon from 'mdi-material-ui/Youtube';

import Alert from '@material-ui/lab/Alert';

import { ritEsports8 } from '../../assets/images';
import GameCard from '../../components/cards/Game';
import ProfileCard from '../../components/cards/Profile';
import useProfile from '../../utils/profile';

const useStyles = makeStyles((theme) => createStyles({
  top: {
    marginTop: theme.spacing(3),
  },
  title: {
    color: 'white',
    marginLeft: theme.spacing(1),
  },
  banner: {
    backgroundImage: `url(${ritEsports8})`,
    backgroundPosition: '50% 65%',
    backgroundSize: 'cover',

    height: theme.spacing(20),
  },
  gameAccounts: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

type Params = {
  id: string;
};

const Profiles: React.FC = () => {
  const classes = useStyles();

  const { id } = useParams<Params>();
  const { profile, error, canEdit } = useProfile(id);

  return (
    <>
      {error
        ? <Alert severity="error">{error}</Alert>
        : (
          <>
            <Grid container alignItems="center" className={classes.banner}>
              <Grid item className={classes.title}>
                <Typography variant="h3">Player Profile</Typography>
                {canEdit && <Button component={RouterLink} to={`/profiles/${profile._id}/edit`} variant="contained" color="primary">Edit</Button>}
              </Grid>
            </Grid>
            <Container>
              <Grid container justify="center" alignItems="center" spacing={3} className={classes.top}>
                <Grid item>
                  <ProfileCard profile={profile} />
                </Grid>
                {(profile.facebookUrl || profile.twitterUrl || profile.instagramUrl || profile.youtubeUrl || profile.streamUrl || profile.discordUsername) && (
                  <Grid item>
                    <List>
                      {profile.facebookUrl && (
                        <ListItem component="a" button href={profile.facebookUrl} target="_blank" rel="noopener noreferrer">
                          <ListItemIcon><FacebookIcon htmlColor="#3b5998" fontSize="large" /></ListItemIcon>
                          <ListItemText>Facebook</ListItemText>
                        </ListItem>
                      )}
                      {profile.twitterUrl && (
                        <ListItem component="a" button href={profile.twitterUrl} target="_blank" rel="noopener noreferrer">
                          <ListItemIcon><TwitterIcon htmlColor="#1da1f2" fontSize="large" /></ListItemIcon>
                          <ListItemText>Twitter</ListItemText>
                        </ListItem>
                      )}
                      {profile.instagramUrl && (
                        <ListItem component="a" button href={profile.instagramUrl} target="_blank" rel="noopener noreferrer">
                          <ListItemIcon><InstagramIcon htmlColor="#e1306c" fontSize="large" /></ListItemIcon>
                          <ListItemText>Instagram</ListItemText>
                        </ListItem>
                      )}
                      {profile.youtubeUrl && (
                        <ListItem component="a" button href={profile.youtubeUrl} target="_blank" rel="noopener noreferrer">
                          <ListItemIcon><YoutubeIcon htmlColor="#FF0000" fontSize="large" /></ListItemIcon>
                          <ListItemText>YouTube</ListItemText>
                        </ListItem>
                      )}
                      {profile.streamUrl && (
                        <ListItem component="a" button href={profile.streamUrl} target="_blank" rel="noopener noreferrer">
                          <ListItemIcon><TelevisionIcon fontSize="large" /></ListItemIcon>
                          <ListItemText>Stream</ListItemText>
                        </ListItem>
                      )}
                      {profile.discordUsername && (
                        <ListItem>
                          <ListItemIcon><DiscordIcon htmlColor="#7289da" fontSize="large" /></ListItemIcon>
                          <ListItemText>{profile.discordUsername}</ListItemText>
                        </ListItem>
                      )}
                    </List>
                  </Grid>
                )}
              </Grid>
              {!!profile.games?.length && (
                <Grid container justify="center" alignItems="center" spacing={3} className={classes.gameAccounts}>
                  <Grid item xs={12}>
                    <Typography variant="h4" align="center">Game Accounts</Typography>
                  </Grid>
                  {profile.games?.map((game) => (
                    <Grid key={game._id} item xs={12} sm={8}>
                      {game.tracker
                        ? (
                          <Link href={game.tracker} component="a" target="_blank" rel="noopener noreferrer">
                            <GameCard game={game} />
                          </Link>
                        )
                        : <GameCard game={game} />}
                    </Grid>
                  ))}
                </Grid>
              )}
            </Container>
          </>
        )}
    </>
  );
};

export default Profiles;
