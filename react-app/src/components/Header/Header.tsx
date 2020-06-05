import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import MenuDrawer from './MenuDrawer';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen((pOpen) => !pOpen);

  return (
    <header>
      <AppBar color="secondary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">RIT Esports</Typography>
        </Toolbar>
      </AppBar>
      <MenuDrawer open={open} onClose={toggleDrawer} />
    </header>
  );
};

export default Header;