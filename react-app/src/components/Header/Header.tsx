import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from 'mdi-material-ui/AccountCircle';
import MenuIcon from 'mdi-material-ui/Menu';

import MenuDrawer from './MenuDrawer';
import { RITEsportsWordmarkLongWhite } from '../../assets/images';
import useUser from '../../utils/user';

const useStyles = makeStyles({
  wordMark: {
    width: '20vh',
  },
  separator: {
    flexGrow: 1,
  },
  avatar: {
    background: '#F25822',
    marginLeft: 'auto',
    marginRight: -12,
    width: '3vh',
    height: '3vh',
    fontSize: '1.5vh',
  },
  avatarSized: {
    marginLeft: 'auto',
    marginRight: -12,
    width: '3vh',
    height: '3vh',
    fontSize: '1.5vh',
  },
});

const Header: React.FC = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen((pOpen) => !pOpen);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const openMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  const user = useUser();
  return (
    <header>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open menu drawer" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <img src={RITEsportsWordmarkLongWhite} alt="RIT Esports Wordmark Long White" className={classes.wordMark} />
          <div className={classes.separator} />
          <IconButton edge="end" color="inherit" aria-label="open user menu" onClick={openMenu} className={classes.avatarSized}>
            {user ? <Avatar alt={user.name} className={classes.avatar}>{user.name.split(' ').map((n, i, a) => (i === 0 || i + 1 === a.length ? n[0] : null)).join('').toUpperCase()}</Avatar> : <AccountCircleIcon fontSize="large" className={classes.avatarSized} />}
          </IconButton>
          <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={closeMenu}>
            {user && <MenuItem>{`Hey, ${user.name.split(' ')[0]}!`}</MenuItem>}
            {user && <Divider />}
            <MenuItem component="a" href={user ? '/auth/logout' : '/auth/google'} onClick={closeMenu}>{user ? 'Log Out' : 'Log In'}</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <MenuDrawer open={open} onClose={toggleDrawer} />
    </header>
  );
};

export default Header;
