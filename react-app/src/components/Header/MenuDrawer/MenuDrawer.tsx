import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Cart from 'mdi-material-ui/Cart';
import GamepadSquare from 'mdi-material-ui/GamepadSquare';
import HomeVariant from 'mdi-material-ui/HomeVariant';
import Facebook from 'mdi-material-ui/Facebook';
import Twitter from 'mdi-material-ui/Twitter';
import Instagram from 'mdi-material-ui/Instagram';
import Twitch from 'mdi-material-ui/Twitch';
import Discord from 'mdi-material-ui/Discord';

type Props = {
  open: boolean;
  onClose: () => void;
};
const MenuDrawer: React.FC<Props> = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose}>
    <List>
      <ListItem button component={RouterLink} to="/">
        <ListItemIcon><HomeVariant /></ListItemIcon>
        <ListItemText>Home</ListItemText>
      </ListItem>
      <ListItem button component={RouterLink} to="/teams">
        <ListItemIcon><GamepadSquare /></ListItemIcon>
        <ListItemText>Teams</ListItemText>
      </ListItem>
      <Divider />
      <ListItem button component="a" href="https://metathreads.com/collections/rit-esports">
        <ListItemIcon><Cart /></ListItemIcon>
        <ListItemText>Sports Wear</ListItemText>
      </ListItem>
      <ListItem button component="a" href="https://teamstore.gtmsportswear.com/ritesports">
        <ListItemIcon><Cart /></ListItemIcon>
        <ListItemText>Casual Wear</ListItemText>
      </ListItem>
      <Divider />
      <ListItem button component="a" href="https://www.facebook.com/esportsrit">
        <ListItemIcon><Facebook /></ListItemIcon>
        <ListItemText>Facebook</ListItemText>
      </ListItem>
      <ListItem button component="a" href="https://twitter.com/RITesports">
        <ListItemIcon><Twitter /></ListItemIcon>
        <ListItemText>Twitter</ListItemText>
      </ListItem>
      <ListItem button component="a" href="https://www.instagram.com/ritesports">
        <ListItemIcon><Instagram /></ListItemIcon>
        <ListItemText>Instagram</ListItemText>
      </ListItem>
      <ListItem button component="a" href="https://www.twitch.tv/ritesports">
        <ListItemIcon><Twitch /></ListItemIcon>
        <ListItemText>Twitch</ListItemText>
      </ListItem>
      <ListItem button component="a" href="https://discordapp.com/invite/ritesports">
        <ListItemIcon><Discord /></ListItemIcon>
        <ListItemText>Discord</ListItemText>
      </ListItem>
    </List>
  </Drawer >
);

export default MenuDrawer;