import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Member_No_Photo } from '../../../assets';
import Profile from '../../../models/profile';

const useStyles = makeStyles((theme) => createStyles({
  card: {
    minHeight: theme.spacing(52),
    width: theme.spacing(36),
  },
  username: {
    marginBottom: theme.spacing(1),
  },
  bio: {
    marginTop: theme.spacing(1),
  },
  awards: {
    marginTop: theme.spacing(1),
  },
}));

type Props = {
  profile?: Profile;
};
const ProfileCard: React.FC<Props> = ({ profile, children }) => {
  const classes = useStyles();

  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.currentTarget.src !== Member_No_Photo) {
      e.currentTarget.src = Member_No_Photo;
    }
  };

  return (
    <Card raised className={classes.card}>
      <CardMedia component="img" src={profile?.imageUrl || Member_No_Photo} alt={profile?.imageUrl ? `${profile.name || profile._id}'s Photo` : 'No Member Photo'} onError={onError} />
      <CardContent>
        {children || (profile && (
          <>
            <Typography variant="h5" align="center" className={classes.username}>{profile.name || 'About'}</Typography>
            <Divider />
            <Typography align="center" className={classes.bio}>{profile.bio || 'No Profile Bio'}</Typography>
            {!!profile.awards?.length && (
              <Grid container justify="center" spacing={1} className={classes.awards}>
                {profile.awards.map((award) => (
                  <Grid item key={award._id}>
                    <Chip label={award.text} variant="outlined" style={{ borderColor: award.color }} />
                  </Grid>
                ))}
              </Grid>
            )}
          </>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
