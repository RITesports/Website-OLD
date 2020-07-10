import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import Game from '../../../models/profile/game';

const useStyles = makeStyles({
  cardTransition: {
    transition: '.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
});

type Props = {
  game: Game;
};
const PlayerCard: React.FC<Props> = ({ game }) => {
  const classes = useStyles();

  const theme = useTheme();
  const xsScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Card raised className={`${game?.tracker ? classes.cardTransition : ''}`}>
      <CardContent>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item xs={12} sm={4}>
            <Typography align={xsScreen ? 'center' : 'left'} noWrap>{game.name}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography align="center" noWrap>{game.platform}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography align={xsScreen ? 'center' : 'right'} noWrap>{game.username}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
