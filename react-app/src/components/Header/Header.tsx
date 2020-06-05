import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from 'mdi-material-ui/Menu';
import MenuDrawer from './MenuDrawer';
import { RITEsports_Wordmark_LongWhite } from "../../assets/images";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen((pOpen) => !pOpen);

  return (
    <header>
      <AppBar color="secondary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer}>
            <Menu />
          </IconButton>
          <img src={RITEsports_Wordmark_LongWhite} alt="RIT Esports Wordmark Long White" style={{ width: "20vh" }} />
        </Toolbar>
      </AppBar>
      <MenuDrawer open={open} onClose={toggleDrawer} />
    </header>
  );
};

export default Header;