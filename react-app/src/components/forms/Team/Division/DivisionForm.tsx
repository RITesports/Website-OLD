import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ArrowLeftBoldIcon from 'mdi-material-ui/ArrowLeftBold';
import ArrowRightBoldIcon from 'mdi-material-ui/ArrowRightBold';
import DeleteIcon from 'mdi-material-ui/Delete';

import MemberForm from './Member';
import MemberCard from '../../../cards/Member';
import Division from '../../../../models/team/division';
import { DivisionActions } from '../../../../utils/team';

const useStyles = makeStyles({
  card: {
    textAlign: 'center',
  },
});

type Props = {
  division: Division,
  dispatch: React.Dispatch<DivisionActions>
};
const DivisionForm: React.FC<Props> = ({ division, dispatch }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <TextField
          value={division.name || ''}
          label="Division Name"
          variant="outlined"
          margin="normal"
          onChange={(e) => dispatch({ type: 'DIVISION_SET_NAME', division, name: e.target.value })}
        />
      </Grid>
      <Grid item container justify="center" alignItems="center" spacing={3}>
        {division.members?.map((member, index, memberArr) => (
          <Grid item key={member._id}>
            <MemberCard member={member}>
              <MemberForm division={division} member={member} dispatch={dispatch} />
              <ButtonGroup fullWidth>
                <Button color="secondary" onClick={() => dispatch({ type: 'DIVISION_MEMBER_REMOVE', division, member })}><DeleteIcon /></Button>
                <Button color="primary" disabled={index === 0} onClick={() => dispatch({ type: 'DIVISION_MEMBER_UP', division, member })}><ArrowLeftBoldIcon /></Button>
                <Button color="primary" disabled={index === memberArr.length - 1} onClick={() => dispatch({ type: 'DIVISION_MEMBER_DOWN', division, member })}><ArrowRightBoldIcon /></Button>
              </ButtonGroup>
            </MemberCard>
          </Grid>
        ))}
        <Grid item className={classes.card}>
          <MemberCard>
            <Button variant="outlined" size="large" color="primary" onClick={() => dispatch({ type: 'DIVISION_MEMBER_ADD', division })}>Add Member</Button>
          </MemberCard>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DivisionForm;
