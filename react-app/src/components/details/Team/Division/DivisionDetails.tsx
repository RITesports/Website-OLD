import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import Division from '../../../../models/team/division';
import MemberCard from '../../../cards/Member';

type Props = {
  division: Division;
};
const DivisionDetails: React.FC<Props> = ({ division }) => (
  <Grid container direction="column" alignItems="center" spacing={3}>
    {division.name && (
      <Grid item>
        <Typography variant="h4" align="center">{division.name}</Typography>
      </Grid>
    )}
    {!!division.members?.length && (
      <Grid item container justify="center" spacing={3}>
        {division.members.map((member) => (
          <Grid item key={member._id}>
            {member.profileId
              ? (
                <Link component={RouterLink} to={`/profiles/${member.profileId}`}>
                  <MemberCard member={member} />
                </Link>
              )
              : <MemberCard member={member} />}
          </Grid>
        ))}
      </Grid>
    )}
  </Grid>
);

export default DivisionDetails;
