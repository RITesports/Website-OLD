import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Alert from '@material-ui/lab/Alert';

import TeamCard from '../../components/cards/Team';
import { useTeams } from '../../utils/team';

const useStyles = makeStyles((theme) => createStyles({
  title: {
    margin: theme.spacing(3),
  },
}));

const Teams: React.FC = () => {
  const classes = useStyles();
  const { teams, error, canCreate } = useTeams();

  return (
    <>
      {error
        ? <Alert severity="error">{error}</Alert>
        : (
          <>
            <Typography variant="h3" align="center" className={classes.title}>Teams</Typography>
            <Grid container justify="center" spacing={5}>
              {teams.map((team) => (
                <Grid key={team._id} item>
                  <Link component={RouterLink} to={`/teams/${team.identifier}`}>
                    <TeamCard team={team} />
                  </Link>
                </Grid>
              ))}
              {canCreate && (
                <Grid item>
                  <Link component={RouterLink} to="/teams/createTeam" underline="none">
                    <TeamCard>
                      <Typography variant="h5" align="center" color="primary">Create Team</Typography>
                    </TeamCard>
                  </Link>
                </Grid>
              )}
            </Grid>
          </>
        )}
    </>
  );
};

export default Teams;
