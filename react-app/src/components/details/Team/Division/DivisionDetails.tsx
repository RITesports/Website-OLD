import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Division from '../../../../models/team/division';
import PlayerCard from '../../../cards/Player';

type Props = {
  division: Division
};
const DivisionDetails: React.FC<Props> = ({ division }) => (
  <Grid container direction="column" alignItems="center" spacing={5}>
    {division.name && (
      <Grid item>
        <Typography variant="h4">{division.name}</Typography>
      </Grid>
    )}
    <Grid item container justify="center" spacing={5}>
      {division.players?.map((player) => (
        <Grid key={player._id} item>
          <PlayerCard player={player} />
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default DivisionDetails;
