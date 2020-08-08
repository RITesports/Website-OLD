import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import Alert from '@material-ui/lab/Alert';

import { Controller } from '../../assets';
import TeamDetails from '../../components/details/Team';
import { FromLink } from '../../icons';
import { useTeams, useTeam } from '../../utils/team';

type Params = {
  identifierOrId?: string;
};
const Teams: React.FC = () => {
  const { identifierOrId } = useParams<Params>();

  const { teams, error: teamsError, canCreate } = useTeams();
  const { team, error: teamError, canEdit } = useTeam(identifierOrId || teams[0]?.identifier);

  return (
    teamsError
      ? <Alert severity="error">{teamsError}</Alert>
      : (
        <>
          <Tabs value={team.identifier || false} variant="scrollable" scrollButtons="on" indicatorColor="primary">
            {teams.map((tabTeam) => (
              <Tab value={tabTeam.identifier} icon={<FromLink src={tabTeam.imageUrl || Controller} alt={team.imageUrl ? `${team.name} Icon` : 'Controller Icon'} />} component={RouterLink} to={`/teams/${tabTeam.identifier}`} key={tabTeam._id} />
            ))}
            {canCreate && (
              <Tab label="Create Team" icon={<FromLink src={Controller} alt="Controller Icon" />} component={RouterLink} to="/teams/createTeam" />
            )}
          </Tabs>
          {teamError
            ? <Alert severity="error">{teamError}</Alert>
            : (
              <Container disableGutters maxWidth="xl">
                <Grid container direction="column" alignItems="center" spacing={3}>
                  <Grid item>
                    <TeamDetails team={team} />
                  </Grid>
                  {canEdit && (
                    <Grid item>
                      <Button variant="contained" color="primary" component={RouterLink} to={`/teams/${team.identifier}/edit`}>Edit Team</Button>
                    </Grid>
                  )}
                </Grid>
              </Container>
            )}
        </>
      )
  );
};

export default Teams;
