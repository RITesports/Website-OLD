import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from 'mdi-material-ui/Menu';

import MenuDrawer from './MenuDrawer';
import { RITEsportsWordmarkLongWhite } from '../../assets/images';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen((pOpen) => !pOpen);

  return (
    <header>
      <AppBar color="secondary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open menu drawer" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <img src={RITEsportsWordmarkLongWhite} alt="RIT Esports Wordmark Long White" style={{ width: '20vh' }} />
        </Toolbar>
      </AppBar>
      <MenuDrawer open={open} onClose={toggleDrawer} />
    </header>
  );
};

export default Header;
