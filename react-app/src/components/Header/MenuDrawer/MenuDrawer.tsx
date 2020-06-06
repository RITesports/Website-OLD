import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import TshirtCrewIcon from 'mdi-material-ui/TshirtCrew';
import GamepadSquareIcon from 'mdi-material-ui/GamepadSquare';
import HomeVariantIcon from 'mdi-material-ui/HomeVariant';
import FacebookIcon from 'mdi-material-ui/Facebook';
import TwitterIcon from 'mdi-material-ui/Twitter';
import InstagramIcon from 'mdi-material-ui/Instagram';
import TwitchIcon from 'mdi-material-ui/Twitch';
import DiscordIcon from 'mdi-material-ui/Discord';

type Props = {
  open: boolean;
  onClose: () => void;
};
const MenuDrawer: React.FC<Props> = ({ open, onClose }) => (
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
        <ListItemIcon><TshirtCrewIcon /></ListItemIcon>
        <ListItemText>Sports Wear</ListItemText>
      </ListItem>
      <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://teamstore.gtmsportswear.com/ritesports">
        <ListItemIcon><TshirtCrewIcon /></ListItemIcon>
        <ListItemText>Casual Wear</ListItemText>
      </ListItem>
      <Divider />
      <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/esportsrit">
        <ListItemIcon><FacebookIcon /></ListItemIcon>
        <ListItemText>Facebook</ListItemText>
      </ListItem>
      <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://twitter.com/RITesports">
        <ListItemIcon><TwitterIcon /></ListItemIcon>
        <ListItemText>Twitter</ListItemText>
      </ListItem>
      <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ritesports">
        <ListItemIcon><InstagramIcon /></ListItemIcon>
        <ListItemText>Instagram</ListItemText>
      </ListItem>
      <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/ritesports">
        <ListItemIcon><TwitchIcon /></ListItemIcon>
        <ListItemText>Twitch</ListItemText>
      </ListItem>
      <ListItem button component="a" target="_blank" rel="noopener noreferrer" href="https://discordapp.com/invite/ritesports">
        <ListItemIcon><DiscordIcon /></ListItemIcon>
        <ListItemText>Discord</ListItemText>
      </ListItem>
      <Divider />
    </List>
  </Drawer>
);

export default MenuDrawer;
