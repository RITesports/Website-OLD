import React from 'react';
import { useParams } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { Button, CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import DiscordIcon from 'mdi-material-ui/Discord';
import FacebookIcon from 'mdi-material-ui/Facebook';
import InstagramIcon from 'mdi-material-ui/Instagram';
import TelevisionIcon from 'mdi-material-ui/Television';
import TwitterIcon from 'mdi-material-ui/Twitter';
import YoutubeIcon from 'mdi-material-ui/Youtube';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GameCard from '../../components/cards/Game';

import { playerNoPhoto } from '../../assets/images';
import { ritEsports8 } from '../../assets/images';
import useUser from '../../utils/user';
import useProfile from '../../utils/profile';

const useStyles = makeStyles((theme) => createStyles({
  banner: {
    backgroundImage: `url(${ritEsports8})`,
    backgroundPosition: '50% 65%',
    backgroundSize: 'cover',
    height: '10em',
    minHeight: '5em',
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

type Params = {
  id: string;
};

const Profiles: React.FC = () => {
  const classes = useStyles();

  const { id } = useParams<Params>();

  const { profile, error } = useProfile(id);

  const user = useUser();

  return (
    <>
      {error
        ? <Alert severity="error">{error}</Alert>
        : (
          <>
            <Grid container direction="column" justify="center" alignItems="flex-start" className={classes.banner}>
              <Grid item className={classes.title}>
                <Typography variant="h3">Player Profile {(user?.role === 'Admin' || user?.profileId === profile._id) && <Button variant="contained" color="primary" href={`/profiles/${profile._id}/edit`}>Edit</Button>}</Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" spacing={3} className={classes.detailsGrid}>
              <Grid item xs={12} sm={3}>
                <Card raised className={classes.card}>
                  <CardMedia component="img" src={playerNoPhoto} />
                  <CardContent>
                    <Typography variant="h5">{profile.name || 'About'}</Typography>
                    <Divider />
                    <Typography className={classes.bio}>{profile.bio || 'Player has no bio.'}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <List>
                  {profile.facebookUrl && (<ListItem component="a" button href={profile.facebookUrl} target="_blank" rel="noopener noreferrer">
                    <ListItemIcon><FacebookIcon htmlColor="#3b5998" fontSize="large" /></ListItemIcon>
                    <ListItemText>Facebook</ListItemText>
                  </ListItem>)}
                  {profile.twitterUrl && (<ListItem component="a" button href={profile.twitterUrl} target="_blank" rel="noopener noreferrer">
                    <ListItemIcon><TwitterIcon htmlColor="#1da1f2" fontSize="large" /></ListItemIcon>
                    <ListItemText>Twitter</ListItemText>
                  </ListItem>)}
                  {profile.instagramUrl && (<ListItem component="a" button href={profile.instagramUrl} target="_blank" rel="noopener noreferrer">
                    <ListItemIcon><InstagramIcon htmlColor="#e1306c" fontSize="large" /></ListItemIcon>
                    <ListItemText>Instagram</ListItemText>
                  </ListItem>)}
                  {profile.youtubeUrl && (<ListItem component="a" button href={profile.youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <ListItemIcon><YoutubeIcon htmlColor="#FF0000" fontSize="large" /></ListItemIcon>
                    <ListItemText>YouTube</ListItemText>
                  </ListItem>)}
                  {profile.streamUrl && (<ListItem component="a" button href={profile.streamUrl} target="_blank" rel="noopener noreferrer">
                    <ListItemIcon><TelevisionIcon fontSize="large" /></ListItemIcon>
                    <ListItemText>Stream</ListItemText>
                  </ListItem>)}
                  {profile.discordUsername && (<ListItem>
                    <ListItemIcon><DiscordIcon htmlColor="#7289da" fontSize="large" /></ListItemIcon>
                    <ListItemText>{profile.discordUsername}</ListItemText>
                  </ListItem>)}
                </List>
              </Grid>
              <Grid item container justify="space-evenly" alignItems="center" spacing={2} xs={12} sm={7}>
                <Grid item>
                  <Typography variant="h4">Game Accounts</Typography>
                </Grid>
                {profile.games?.map((game) => (
                  game.tracker ? (
                    <Grid item xs={12}>
                      <Link href={game.tracker} component="a" target="_blank" rel="noopener noreferrer">
                        <GameCard game={game} />
                      </Link>
                    </Grid>
                  ) : (
                      <Grid item xs={12}>
                        <GameCard game={game} />
                      </Grid>
                    )))}
              </Grid>
            </Grid>
          </>
        )}
    </>
  );
};

export default Profiles;
