import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Game from '../../../models/profile/game';

const useStyles = makeStyles({
  cardTransition: {
    transition: '.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  gameCard: {
    height: '4rem',
  },
});

type Props = {
  game: Game;
};
const PlayerCard: React.FC<Props> = ({ game }) => {
  const classes = useStyles();

  return (
    <Card raised className={`${classes.gameCard} ${game?.tracker ? classes.cardTransition : ''}`}>
      <CardContent>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item xs={4}>
            <Typography noWrap>{game.name}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography align="center" noWrap>{game.platform}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography noWrap>{game.username}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;