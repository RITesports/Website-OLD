import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DivisionDetails from './Division';
import Team from '../../../models/team';

type Props = {
  team: Team;
};
const TeamDetails: React.FC<Props> = ({ team }) => (
  <Grid container direction="column" alignItems="center" spacing={3}>
    <Grid item>
      <Typography variant="h3" align="center">{team.name}</Typography>
    </Grid>
    {team.divisions?.map((division) => (
      <Grid item key={division._id}>
        <DivisionDetails division={division} />
      </Grid>
    ))}
  </Grid>
);

export default TeamDetails;
