import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MenuIcon from 'mdi-material-ui/Menu';

import MenuDrawer from './MenuDrawer';
import { RITEsportsWordmarkLongWhite } from '../../assets/images';
import useUser from '../../utils/user';

const useStyles = makeStyles((theme) => createStyles({
  wordMark: {
    height: theme.spacing(2.5),
  },
  separator: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    background: theme.palette.primary.main,
  },
}));

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
          <Hidden xsDown>
            <img src={RITEsportsWordmarkLongWhite} alt="RIT Esports Wordmark Long White" className={classes.wordMark} />
          </Hidden>
          <div className={classes.separator} />
          {user
            ? (
              <IconButton edge="end" color="inherit" aria-label="open user menu" onClick={openMenu}>
                <Avatar alt={user.name} className={classes.avatar}>{user.name.split(' ').map((n) => n[0]).join('').toUpperCase()}</Avatar>
              </IconButton>
            )
            : <Button variant="contained" color="primary" href="/auth/google">Login</Button>}
          <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={closeMenu}>
            <MenuItem component="a" href="/auth/logout" onClick={closeMenu}>Log Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <MenuDrawer open={open} onClose={toggleDrawer} />
    </header>
  );
};

export default Header;
