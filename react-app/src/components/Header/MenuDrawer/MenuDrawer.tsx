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
      <ListItem button component={RouterLink} to="/">
        <ListItemIcon><GamepadSquare /></ListItemIcon>
        <ListItemText>Teams</ListItemText>
      </ListItem>
      <Divider />
      <ListItem button component={RouterLink} to="/">
        <ListItemIcon><Cart /></ListItemIcon>
        <ListItemText>Sports Wear</ListItemText>
      </ListItem>
      <ListItem button component={RouterLink} to="/">
        <ListItemIcon><Cart /></ListItemIcon>
        <ListItemText>Casual Wear</ListItemText>
      </ListItem>
      <Divider />
      <ListItem button component={RouterLink} to="/">
        <ListItemIcon><Facebook /></ListItemIcon>
        <ListItemText>Facebook</ListItemText>
      </ListItem>
      <ListItem button component={RouterLink} to="/">
        <ListItemIcon><Twitter /></ListItemIcon>
        <ListItemText>Twitter</ListItemText>
      </ListItem>
      <ListItem button component={RouterLink} to="/">
        <ListItemIcon><Instagram /></ListItemIcon>
        <ListItemText>Instagram</ListItemText>
      </ListItem>
      <ListItem button component={RouterLink} to="/">
        <ListItemIcon><Twitch /></ListItemIcon>
        <ListItemText>Twitch</ListItemText>
      </ListItem>
      <ListItem button component={RouterLink} to="/">
        <ListItemIcon><Discord /></ListItemIcon>
        <ListItemText>Discord</ListItemText>
      </ListItem>
    </List>
  </Drawer >
);

export default MenuDrawer;