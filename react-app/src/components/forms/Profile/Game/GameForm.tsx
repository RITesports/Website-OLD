import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import Game from '../../../../models/profile/game';
import { GameActions } from '../../../../utils/profile';

const useStyles = makeStyles((theme) => createStyles({
  selectField: {
    width: '100%',
  }
}));

type Props = {
  game: Game,
  dispatch: React.Dispatch<GameActions>,
};
const GameForm: React.FC<Props> = ({ game, dispatch }) => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs={3}>
        <TextField
          required
          value={game.name || ''}
          error={!game.name}
          helperText={!game.name && 'Game Title Required'}
          label="Game Title"
          variant="outlined"
          margin="normal"
          onChange={(e) => dispatch({ type: 'GAME_SET_NAME', game: game, name: e.target.value })}
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          required
          value={game.platform || ''}
          error={!game.platform}
          helperText={!game.platform && 'Platform Required'}
          id="select"
          label="Platform"
          variant="outlined"
          margin="normal"
          onChange={(e) => dispatch({ type: 'GAME_SET_PLATFORM', game, platform: e.target.value as "PC" | "PlayStation" | "Xbox" | "Switch" | "Other" })}
          select
          fullWidth
        >
          {["PC", "PlayStation", "Xbox", "Switch", "Other"].map((platform) => (
            <MenuItem key={platform} value={platform}>{platform}</MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={3}>
        <TextField
          required
          value={game.username || ''}
          error={!game.username}
          helperText={!game.username && 'Username Required'}
          label="Username"
          variant="outlined"
          margin="normal"
          onChange={(e) => dispatch({ type: 'GAME_SET_USERNAME', game: game, username: e.target.value })}
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          value={game.tracker || ''}
          label="Statistics Tracker Url"
          variant="outlined"
          margin="normal"
          onChange={(e) => dispatch({ type: 'GAME_SET_TRACKER', game: game, tracker: e.target.value })}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default GameForm;