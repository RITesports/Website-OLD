import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { controller } from '../../../assets/images';
import Team from '../../../models/team';

const useStyles = makeStyles({
  card: {
    minHeight: '26rem',
    width: '18rem',

    transition: '.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
});

type Props = {
  team?: Team;
};
const TeamCard: React.FC<Props> = ({ team, children }) => {
  const classes = useStyles();

  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.currentTarget.src !== controller) {
      e.currentTarget.src = controller;
    }
  };

  return (
    <Card raised className={classes.card}>
      <CardMedia component="img" src={team?.imageUrl || controller} onError={onError} />
      <CardContent>
        {children || (team && <Typography variant="h5" align="center">{team.name}</Typography>)}
      </CardContent>
    </Card>
  );
};

export default TeamCard;
