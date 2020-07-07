import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { logoCardMeme } from '../../assets/images';

const useStyles = makeStyles((theme) => createStyles({
  title: {
    margin: theme.spacing(3),
  },
  tiger: {
    display: 'block',

    height: 'auto',
    maxWidth: '90%',

    margin: 'auto',
  },
}));

const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h1" align="center" className={classes.title}>404: Page Not Found</Typography>
      <img src={logoCardMeme} alt="Neil's Placeholder Tiger Logo" className={classes.tiger} />
    </>
  );
};

export default NotFound;
