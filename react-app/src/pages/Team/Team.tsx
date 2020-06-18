import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Alert from '@material-ui/lab/Alert';

import TeamCard from '../../components/cards/Team';
import TeamDetails from '../../components/details/Team';
import { useTeam } from '../../utils/team';

const useStyles = makeStyles((theme) => createStyles({
  top: {
    marginTop: theme.spacing(3),
  },
}));

type Params = {
  identifierOrId: string;
};
const Team: React.FC = () => {
  const { identifierOrId } = useParams<Params>();

  const classes = useStyles();
  const { team, error, canEdit } = useTeam(identifierOrId);

  return (
    <>
      {error
        ? <Alert severity="error">{error}</Alert>
        : (
          <Grid container direction="column" alignItems="center" spacing={3}>
            <Grid item className={classes.top}>
              <TeamDetails team={team} />
            </Grid>
            {canEdit && (
              <Grid item>
                <Link component={RouterLink} to={`/teams/${identifierOrId}/edit`} underline="none">
                  <TeamCard>
                    <Typography variant="h5" align="center" color="primary">Edit Team</Typography>
                  </TeamCard>
                </Link>
              </Grid>
            )}
          </Grid>
        )}
    </>
  );
};

export default Team;
