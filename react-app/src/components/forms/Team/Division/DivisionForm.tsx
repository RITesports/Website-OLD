import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ArrowLeftBoldIcon from 'mdi-material-ui/ArrowLeftBold';
import ArrowRightBoldIcon from 'mdi-material-ui/ArrowRightBold';
import DeleteIcon from 'mdi-material-ui/Delete';

import PlayerForm from './Player';
import PlayerCard from '../../../cards/Player';
import Division from '../../../../models/team/division';
import { DivisionActions } from '../../../../utils/team';

const useStyles = makeStyles((theme) => createStyles({
  buttonGroup: {
    marginTop: theme.spacing(1),
  },
  card: {
    textAlign: 'center',
  },
}));

type Props = {
  division: Division,
  dispatch: React.Dispatch<DivisionActions>
};
const DivisionForm: React.FC<Props> = ({ division, dispatch }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <TextField value={division.name || ''} label="Division Name" variant="outlined" margin="normal" onChange={(e) => dispatch({ type: 'DIVISION_SET_NAME', division, name: e.target.value })} />
      </Grid>
      <Grid item container justify="center" spacing={5}>
        {division.players?.map((player, index, playerArr) => (
          <Grid key={player._id} item>
            <PlayerCard player={player}>
              <PlayerForm division={division} player={player} dispatch={dispatch} />
              <ButtonGroup fullWidth className={classes.buttonGroup}>
                <Button color="secondary" onClick={() => dispatch({ type: 'DIVISION_PLAYER_REMOVE', division, player })}><DeleteIcon /></Button>
                <Button color="primary" disabled={index === 0} onClick={() => dispatch({ type: 'DIVISION_PLAYER_UP', division, player })}><ArrowLeftBoldIcon /></Button>
                <Button color="primary" disabled={index === playerArr.length - 1} onClick={() => dispatch({ type: 'DIVISION_PLAYER_DOWN', division, player })}><ArrowRightBoldIcon /></Button>
              </ButtonGroup>
            </PlayerCard>
          </Grid>
        ))}
        <Grid item className={classes.card}>
          <PlayerCard>
            <Button size="large" variant="outlined" color="primary" onClick={() => dispatch({ type: 'DIVISION_PLAYER_ADD', division })}>Add Player</Button>
          </PlayerCard>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DivisionForm;
