import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Division from '../../../../../models/team/division';
import Player from '../../../../../models/team/division/player';
import { PlayerActions } from '../../../../../utils/team';

const useStyles = makeStyles({
  playerInput: {
    display: 'block',
  },
});

type Props = {
  division: Division
  player: Player,
  dispatch: React.Dispatch<PlayerActions>
};
const PlayerForm: React.FC<Props> = ({ division, player, dispatch }) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        required
        label="Player Username"
        value={player.username}
        error={!player.username}
        helperText={!player.username && 'Player Username Required'}
        variant="outlined"
        margin="normal"
        onChange={(e) => dispatch({
          type: 'PLAYER_SET_USERNAME', division, player, username: e.target.value,
        })}
        fullWidth
        className={classes.playerInput}
      />
      <TextField
        required
        label="Player Role"
        value={player.role}
        error={!player.role}
        helperText={!player.role && 'Player Role Required'}
        variant="outlined"
        margin="normal"
        onChange={(e) => dispatch({
          type: 'PLAYER_SET_ROLE', division, player, role: e.target.value,
        })}
        fullWidth
        className={classes.playerInput}
      />
      <TextField
        label="Player Profile ID"
        value={player.profileId || ''}
        error={!!player.profileId && !/^[a-f\d]{24}$/i.test(player.profileId)}
        helperText={!!player.profileId && !/^[a-f\d]{24}$/i.test(player.profileId) && 'Player Profile ID Must Be Valid ID'}
        variant="outlined"
        margin="normal"
        onChange={(e) => dispatch({
          type: 'PLAYER_SET_PROFILE_ID', division, player, profileId: e.target.value,
        })}
        fullWidth
        className={classes.playerInput}
      />
      <TextField
        label="Player Image URL"
        value={player.imageUrl || ''}
        variant="outlined"
        margin="normal"
        onChange={(e) => dispatch({
          type: 'PLAYER_SET_IMAGE_URL', division, player, imageUrl: e.target.value,
        })}
        fullWidth
        className={classes.playerInput}
      />
    </>
  );
};

export default PlayerForm;
