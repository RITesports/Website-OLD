import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from 'mdi-material-ui/Menu';

import MenuDrawer from './MenuDrawer';
import { RITEsportsWordmarkLongWhite } from '../../assets/images';

const useStyles = makeStyles({
  wordMark: {
    width: '20vh',
  },
});

const Header: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen((pOpen) => !pOpen);

  return (
    <header>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open menu drawer" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <img src={RITEsportsWordmarkLongWhite} alt="RIT Esports Wordmark Long White" className={classes.wordMark} />
        </Toolbar>
      </AppBar>
      <MenuDrawer open={open} onClose={toggleDrawer} />
    </header>
  );
};

export default Header;
