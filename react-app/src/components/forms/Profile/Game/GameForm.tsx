import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Game from '../../../../models/profile/game';
import { GameActions } from '../../../../utils/profile';

const useStyles = makeStyles({
  textInput: {
    display: 'block',
  },
});

type Props = {
  game: Game,
  dispatch: React.Dispatch<GameActions>,
};
const GameForm: React.FC<Props> = ({ game, dispatch }) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        required
        label="Game Title"
        value={game.name}
        error={!game.name}
        helperText={!game.name && 'Game Title Required'}
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(e) => dispatch({ type: 'GAME_SET_NAME', game, name: e.target.value })}
        className={classes.textInput}
      />
      <TextField
        select
        required
        label="Platform"
        value={game.platform}
        error={!game.platform}
        helperText={!game.platform && 'Platform Required'}
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(e) => dispatch({ type: 'GAME_SET_PLATFORM', game, platform: e.target.value as 'PC' | 'PlayStation' | 'Xbox' | 'Switch' | 'Other' })}
        className={classes.textInput}
      >
        {['PC', 'PlayStation', 'Xbox', 'Switch', 'Other'].map((platform) => (
          <MenuItem key={platform} value={platform}>{platform}</MenuItem>
        ))}
      </TextField>
      <TextField
        required
        label="Username"
        value={game.username}
        error={!game.username}
        helperText={!game.username && 'Username Required'}
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(e) => dispatch({ type: 'GAME_SET_USERNAME', game, username: e.target.value })}
        className={classes.textInput}
      />
      <TextField
        label="Statistics Tracker URL"
        value={game.tracker || ''}
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(e) => dispatch({ type: 'GAME_SET_TRACKER', game, tracker: e.target.value })}
        className={classes.textInput}
      />
    </>
  );
};

export default GameForm;
