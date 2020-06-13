import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { playerNoPhoto } from '../../../assets/images';
import Player from '../../../models/team/division/player';

const useStyles = makeStyles({
  card: {
    minHeight: '26rem',
    width: '18rem',
  },
});

type Props = {
  player?: Player;
};
const PlayerCard: React.FC<Props> = ({ player, children }) => {
  const classes = useStyles();

  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.currentTarget.src !== playerNoPhoto) {
      e.currentTarget.src = playerNoPhoto;
    }
  };

  return (
    <Card raised className={classes.card}>
      <CardMedia component="img" src={player?.imageUrl || playerNoPhoto} onError={onError} />
      <CardContent>
        {children || (player && (
          <>
            <Typography variant="h5" align="center">{player.username}</Typography>
            <Typography variant="h6" align="center">{player.role}</Typography>
          </>
        ))}
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
