import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

type Props = {
  open: boolean;
  onClose: () => void;
};
const MenuDrawer: React.FC<Props> = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose}>
    <List>
      <ListItem button component={RouterLink} to="/">
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText>Home</ListItemText>
      </ListItem>
      <ListItem button component={RouterLink} to="/">
        <ListItemIcon><SportsEsportsIcon /></ListItemIcon>
        <ListItemText>Teams</ListItemText>
      </ListItem>
      <Divider />
      <ListItem button component={RouterLink} to="/">
        <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
        <ListItemText>Sports Wear</ListItemText>
      </ListItem>
      <ListItem button component={RouterLink} to="/">
        <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
        <ListItemText>Casual Wear</ListItemText>
      </ListItem>
    </List>
  </Drawer>
);

export default MenuDrawer;