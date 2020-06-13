import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Alert from '@material-ui/lab/Alert';

import PlayerCard from '../../components/cards/Player';
import TeamCard from '../../components/cards/Team';
import { useTeam } from '../../utils/team';

const useStyles = makeStyles((theme) => createStyles({
  title: {
    margin: theme.spacing(3),
  },
}));

const Team: React.FC = () => {
  const { identifierOrId } = useParams();

  const classes = useStyles();
  const { team, error, canEdit } = useTeam(identifierOrId);

  return (
    <>
      {error
        ? <Alert severity="error">{error}</Alert>
        : (
          <>
            <Typography variant="h3" align="center" className={classes.title}>{team.name}</Typography>
            <Grid container direction="column" alignItems="center" spacing={5}>
              {team.divisions?.map((division, index) => (
                <React.Fragment key={index}>
                  {division.name && <Grid item><Typography variant="h4">{division.name}</Typography></Grid>}
                  <Grid item container justify="center" spacing={5}>
                    {division.players?.map((player) => (
                      <Grid key={player.username} item>
                        <PlayerCard player={player} />
                      </Grid>
                    ))}
                  </Grid>
                </React.Fragment>
              ))}
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
          </>
        )}
    </>
  );
};

export default Team;
