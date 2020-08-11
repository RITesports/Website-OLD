import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Member_No_Photo } from '../../../assets';
import Member from '../../../models/team/division/member';

const useStyles = makeStyles((theme) => createStyles({
  card: {
    minHeight: theme.spacing(52),
    width: theme.spacing(36),
  },
}));

type Props = {
  member?: Member;
};
const MemberCard: React.FC<Props> = ({ member, children }) => {
  const classes = useStyles();

  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.currentTarget.src !== Member_No_Photo) {
      e.currentTarget.src = Member_No_Photo;
    }
  };

  return (
    <Card raised className={classes.card}>
      <CardMedia component="img" src={member?.imageUrl || Member_No_Photo} alt={member?.imageUrl ? `${member.username}'s Photo` : 'No Member Photo'} onError={onError} />
      <CardContent>
        {children || (member && (
          <>
            <Typography variant="h5" align="center">{member.username}</Typography>
            <Typography variant="h6" align="center">{member.role}</Typography>
          </>
        ))}
      </CardContent>
    </Card>
  );
};

export default MemberCard;
