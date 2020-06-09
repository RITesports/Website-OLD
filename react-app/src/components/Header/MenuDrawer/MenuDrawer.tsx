import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from 'mdi-material-ui/Facebook';
import DiscordIcon from 'mdi-material-ui/Discord';
import GamepadSquareIcon from 'mdi-material-ui/GamepadSquare';
import HomeVariantIcon from 'mdi-material-ui/HomeVariant';
import InstagramIcon from 'mdi-material-ui/Instagram';
import LoginIcon from 'mdi-material-ui/Login';
import LogoutIcon from 'mdi-material-ui/Logout';
import TshirtCrewIcon from 'mdi-material-ui/TshirtCrew';
import TwitchIcon from 'mdi-material-ui/Twitch';
import TwitterIcon from 'mdi-material-ui/Twitter';

import useUser from '../../../utils/user';

type Props = {
  open: boolean;
  onClose: () => void;
};
const MenuDrawer: React.FC<Props> = ({ open, onClose }) => {
  const user = useUser();

  return (
    <Drawer open={open} onClose={onClose}>
      <List onClick={onClose}>
        <ListItem button component={RouterLink} to="/">
          <ListItemIcon><HomeVariantIcon /></ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button component={RouterLink} to="/teams">
          <ListItemIcon><GamepadSquareIcon /></ListItemIcon>
          <ListItemText>Teams</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://metathreads.com/collections/rit-esports">
          <ListItemIcon><TshirtCrewIcon style={{ color: '#f25822' }} /></ListItemIcon>
          <ListItemText>Sports Wear</ListItemText>
        </ListItem>
        <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://teamstore.gtmsportswear.com/ritesports">
          <ListItemIcon><TshirtCrewIcon style={{ color: '#000' }} /></ListItemIcon>
          <ListItemText>Casual Wear</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/esportsrit">
          <ListItemIcon><FacebookIcon style={{ color: '#3b5998' }} /></ListItemIcon>
          <ListItemText>Facebook</ListItemText>
        </ListItem>
        <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://twitter.com/RITesports">
          <ListItemIcon><TwitterIcon style={{ color: '#1da1f2' }} /></ListItemIcon>
          <ListItemText>Twitter</ListItemText>
        </ListItem>
        <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ritesports">
          <ListItemIcon><InstagramIcon style={{ color: '#e1306c' }} /></ListItemIcon>
          <ListItemText>Instagram</ListItemText>
        </ListItem>
        <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/ritesports">
          <ListItemIcon><TwitchIcon style={{ color: '#6441a5' }} /></ListItemIcon>
          <ListItemText>Twitch</ListItemText>
        </ListItem>
        <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://discordapp.com/invite/ritesports">
          <ListItemIcon><DiscordIcon style={{ color: '#7289da' }} /></ListItemIcon>
          <ListItemText>Discord</ListItemText>
        </ListItem>
        <Divider />
        <ListItem button component="a" href={user ? '/auth/logout' : '/auth/google'}>
          <ListItemIcon>{user ? <LogoutIcon /> : <LoginIcon />}</ListItemIcon>
          <ListItemText>{user ? 'Log Out' : 'Log In'}</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
