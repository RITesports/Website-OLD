import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Member_No_Photo } from '../../../assets';
import Player from '../../../models/team/division/player';

const useStyles = makeStyles({
  card: {
    minHeight: '26rem',
    width: '18rem',
  },
  cardTransition: {
    transition: '.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
});

type Props = {
  player?: Player;
};
const PlayerCard: React.FC<Props> = ({ player, children }) => {
  const classes = useStyles();

  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.currentTarget.src !== Member_No_Photo) {
      e.currentTarget.src = Member_No_Photo;
    }
  };

  return (
    <Card raised className={`${classes.card} ${(player?.profileId && !children) ? classes.cardTransition : ''}`}>
      <CardMedia component="img" src={player?.imageUrl || Member_No_Photo} onError={onError} />
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
