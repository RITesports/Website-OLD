import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Alert from '@material-ui/lab/Alert';

import TeamForm from '../../components/forms/Team';
import { useTeam } from '../../utils/team';

const useStyles = makeStyles((theme) => createStyles({
  top: {
    marginTop: theme.spacing(3),
  },
}));

type Params = {
  identifierOrId: string | undefined
};
const TeamEdit: React.FC = () => {
  const classes = useStyles();

  const history = useHistory();
  const { identifierOrId } = useParams<Params>();

  const { team, teamDispatch, canDelete } = useTeam(identifierOrId);
  const [error, setError] = useState<string>();

  const [confirmDelete, setConfirmDelete] = useState(false);

  const newTeam = !identifierOrId;

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity()) {
      if (newTeam) {
        axios.post('/api/teams/', team)
          .then(() => history.push(`/teams/${team.identifier}`))
          .catch((e) => setError(e.response.data.message || e.response.statusText));
      }
      else {
        axios.put(`/api/teams/${team._id}`, team)
          .then(() => history.push(`/teams/${team.identifier}`))
          .catch((e) => setError(e.response.data.message || e.response.statusText));
      }
    }
  };

  const handleDelete = () => {
    if (!newTeam && canDelete && confirmDelete) {
      axios.delete(`/api/teams/${team._id}`)
        .then(() => history.replace('/teams'))
        .catch((e) => setError(e.response.data.message || e.response.statusText));
    }
    else {
      setConfirmDelete(true);
    }
  };

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      <form noValidate autoComplete="off" onSubmit={handleSumbit}>
        <Grid container direction="column" alignItems="center" spacing={5}>
          <Grid item className={classes.top}>
            <Button type="submit" size="large" variant="contained" color="primary">Save Team</Button>
          </Grid>
          <Grid item>
            <TeamForm team={team} dispatch={teamDispatch} />
          </Grid>
          {!newTeam && canDelete && (
            <Grid item>
              <Button size="large" variant="contained" color="secondary" onClick={handleDelete}>{confirmDelete ? 'Confirm Delete' : 'Delete Team'}</Button>
            </Grid>
          )}
        </Grid>
      </form>
    </>
  );
};

export default TeamEdit;
