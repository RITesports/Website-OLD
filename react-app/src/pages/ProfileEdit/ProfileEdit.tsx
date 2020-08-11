import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import copy from 'clipboard-copy';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Alert from '@material-ui/lab/Alert';

import { Banner_Profile } from '../../assets';
import ProfileForm from '../../components/forms/Profile';
import useProfile from '../../utils/profile';

const useStyles = makeStyles((theme) => createStyles({
  top: {
    marginTop: theme.spacing(3),
  },
  title: {
    color: 'white',
    marginLeft: theme.spacing(1),
  },
  banner: {
    height: theme.spacing(20),

    background: `url(${Banner_Profile}) 50% 65% / cover`,
  },
}));

type Params = {
  id: string
};
const ProfileEdit: React.FC = () => {
  const classes = useStyles();

  const history = useHistory();
  const { id } = useParams<Params>();

  const { profile, profileDispatch } = useProfile(id);
  const [error, setError] = useState<string>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity()) {
      axios.put(`/api/profiles/${profile._id}`, profile)
        .then(() => history.push(`/profiles/${profile._id}`))
        .catch((e) => setError(e.response.data.message || e.response.statusText));
    }
  };

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container alignItems="center" className={classes.banner}>
        <Grid item className={classes.title}>
          <Typography variant="h3">User Profile</Typography>
          <Button variant="contained" color="primary" onClick={() => copy(profile._id)}>Copy Profile ID</Button>
        </Grid>
      </Grid>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container direction="column" alignItems="center" spacing={5}>
          <Grid item className={classes.top}>
            <Button type="submit" size="large" variant="contained" color="primary">Save Profile</Button>
          </Grid>
          <Grid item>
            <ProfileForm profile={profile} dispatch={profileDispatch} />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ProfileEdit;
