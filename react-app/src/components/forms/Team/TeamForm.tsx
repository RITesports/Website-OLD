import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import ArrowDownBoldIcon from 'mdi-material-ui/ArrowDownBold';
import ArrowUpBoldIcon from 'mdi-material-ui/ArrowUpBold';
import DeleteIcon from 'mdi-material-ui/Delete';

import DivisionForm from './Division';
import Team from '../../../models/team';
import { TeamActions } from '../../../utils/team';

const useStyles = makeStyles((theme) => createStyles({
  teamInput: {
    display: 'block',
  },
  divisionActions: {
    marginTop: theme.spacing(1),

    display: 'flex',
    justifyContent: 'center',
  },
}));

type Props = {
  team: Team,
  dispatch: React.Dispatch<TeamActions>,
};
const TeamForm: React.FC<Props> = ({ team, dispatch }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid item>
        <TextField
          required
          label="Team Name"
          value={team.name}
          error={!team.name}
          helperText={!team.name && 'Team Name Required'}
          variant="outlined"
          margin="normal"
          onChange={(e) => dispatch({ type: 'TEAM_SET_NAME', name: e.target.value })}
          className={classes.teamInput}
        />
        <TextField
          required
          label="Team Identifier"
          value={team.identifier}
          error={!team.identifier}
          helperText={!team.identifier && 'Team Identifier Reqired'}
          variant="outlined"
          margin="normal"
          onChange={(e) => dispatch({ type: 'TEAM_SET_IDENTIFIER', identifier: e.target.value })}
          className={classes.teamInput}
        />
      </Grid>
      {team.divisions?.map((division, index, divisionArr) => (
        <Grid item key={division._id}>
          <DivisionForm division={division} dispatch={dispatch} />
          <ButtonGroup size="large" className={classes.divisionActions}>
            <Button variant="contained" color="secondary" onClick={() => dispatch({ type: 'TEAM_DIVISION_REMOVE', division })}><DeleteIcon /></Button>
            <Button variant="contained" color="primary" disabled={index === 0} onClick={() => dispatch({ type: 'TEAM_DIVISION_UP', division })}><ArrowUpBoldIcon /></Button>
            <Button variant="contained" color="primary" disabled={index === divisionArr.length - 1} onClick={() => dispatch({ type: 'TEAM_DIVISION_DOWN', division })}><ArrowDownBoldIcon /></Button>
          </ButtonGroup>
        </Grid>
      ))}
      <Grid item>
        <Button variant="outlined" size="large" color="primary" onClick={() => dispatch({ type: 'TEAM_DIVISION_ADD' })}>Add Division</Button>
      </Grid>
    </Grid>
  );
};
export default TeamForm;
