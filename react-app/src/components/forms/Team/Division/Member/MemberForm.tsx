import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Division from '../../../../../models/team/division';
import Member from '../../../../../models/team/division/member';
import { MemberActions } from '../../../../../utils/team';

const useStyles = makeStyles({
  memberInput: {
    display: 'block',
  },
});

type Props = {
  division: Division
  member: Member,
  dispatch: React.Dispatch<MemberActions>
};
const MemberForm: React.FC<Props> = ({ division, member, dispatch }) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        required
        label="Member Username"
        value={member.username}
        error={!member.username}
        helperText={!member.username && 'Member Username Required'}
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(e) => dispatch({
          type: 'MEMBER_SET_USERNAME', division, member, username: e.target.value,
        })}
        className={classes.memberInput}
      />
      <TextField
        required
        label="Member Role"
        value={member.role}
        error={!member.role}
        helperText={!member.role && 'Member Role Required'}
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(e) => dispatch({
          type: 'MEMBER_SET_ROLE', division, member, role: e.target.value,
        })}
        className={classes.memberInput}
      />
      <TextField
        label="Member Profile ID"
        value={member.profileId || ''}
        error={!!member.profileId && !/^[a-f\d]{24}$/i.test(member.profileId)}
        helperText={!!member.profileId && !/^[a-f\d]{24}$/i.test(member.profileId) && 'Invalid Profile ID'}
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(e) => dispatch({
          type: 'MEMBER_SET_PROFILE_ID', division, member, profileId: e.target.value,
        })}
        className={classes.memberInput}
      />
      <TextField
        label="Member Image URL"
        value={member.imageUrl || ''}
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(e) => dispatch({
          type: 'MEMBER_SET_IMAGE_URL', division, member, imageUrl: e.target.value,
        })}
        className={classes.memberInput}
      />
    </>
  );
};

export default MemberForm;
