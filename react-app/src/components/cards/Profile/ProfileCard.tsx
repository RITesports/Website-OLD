import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Member_No_Photo } from '../../../assets';
import Profile from '../../../models/profile';

const useStyles = makeStyles((theme) => createStyles({
  card: {
    minHeight: '26rem',
    width: '18rem',
  },
  username: {
    marginBottom: theme.spacing(1),
  },
  bio: {
    marginTop: theme.spacing(1),
  },
  chip: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(.5),
    borderWidth: '2px',
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
            {profile.chips?.map((chip) => (
              <Chip label={chip.text} style={{ borderColor: chip.color }} variant="outlined" className={classes.chip} />
            ))}
          </>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
