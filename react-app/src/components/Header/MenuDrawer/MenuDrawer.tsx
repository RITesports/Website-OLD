import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCashIcon from 'mdi-material-ui/AccountCash';
import FacebookIcon from 'mdi-material-ui/Facebook';
import FileDocumentOutlineIcon from 'mdi-material-ui/FileDocumentOutline';
import DiscordIcon from 'mdi-material-ui/Discord';
import GamepadSquareIcon from 'mdi-material-ui/GamepadSquare';
import GithubIcon from 'mdi-material-ui/Github';
import InstagramIcon from 'mdi-material-ui/Instagram';
import TshirtCrewIcon from 'mdi-material-ui/TshirtCrew';
import TwitchIcon from 'mdi-material-ui/Twitch';
import TwitterIcon from 'mdi-material-ui/Twitter';
import YouTubeIcon from 'mdi-material-ui/Youtube';
import WaveIcon from 'mdi-material-ui/Hail';

import TigerLogoColorIcon from '../../../icons/TigerLogoColor';
import useUser from '../../../utils/user';

const routes = [
  { text: 'Home', to: '/', icon: <TigerLogoColorIcon /> },
  { text: 'Teams', to: '/teams', icon: <GamepadSquareIcon /> },
  { text: 'Founders', to: '/founders', icon: <AccountCashIcon /> },
];
const merch = [
  { text: 'Sports Wear', href: 'https://metathreads.com/collections/rit-esports', icon: <TshirtCrewIcon htmlColor="#f25822" /> },
  { text: 'Casual Wear', href: 'https://teamstore.gtmsportswear.com/ritesports', icon: <TshirtCrewIcon htmlColor="#000" /> },
];
const socials = [
  { text: 'Facebook', href: 'https://www.facebook.com/esportsrit', icon: <FacebookIcon htmlColor="#3b5998" /> },
  { text: 'Twitter', href: 'https://twitter.com/RITesports', icon: <TwitterIcon htmlColor="#1da1f2" /> },
  { text: 'Instagram', href: 'https://www.instagram.com/ritesports', icon: <InstagramIcon htmlColor="#e1306c" /> },
  { text: 'YouTube', href: 'https://www.youtube.com/c/RITEsports', icon: <YouTubeIcon htmlColor="#ff0000" /> },
  { text: 'Twitch', href: 'https://www.twitch.tv/ritesports', icon: <TwitchIcon htmlColor="#6441a5" /> },
  { text: 'Discord', href: 'https://discordapp.com/invite/ritesports', icon: <DiscordIcon htmlColor="#7289da" /> },
  { text: 'Github', href: 'https://github.com/RITesports', icon: <GithubIcon htmlColor="#333" /> },
];
const files = [
  { text: 'Branding', href: '/RITEsports_BrandingGuide_7.pdf', icon: <FileDocumentOutlineIcon htmlColor="#505050" /> },
];

type Props = {
  open: boolean;
  onClose: () => void;
};
const MenuDrawer: React.FC<Props> = ({ open, onClose }) => {
  const user = useUser();

  return (
    <Drawer open={open} onClose={onClose}>
      <List onClick={onClose}>
        {routes.map(({ to, icon, text }) => (
          <ListItem key={text} button component={RouterLink} to={to}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItem>
        ))}
        <Divider />
        {merch.map(({ href, icon, text }) => (
          <ListItem key={text} button component="a" href={href} target="_blank" rel="noopener noreferrer">
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItem>
        ))}
        <Divider />
        {socials.map(({ href, icon, text }) => (
          <ListItem key={text} button component="a" href={href} target="_blank" rel="noopener noreferrer">
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItem>
        ))}
        <Divider />
        {files.map(({ href, icon, text }) => (
          <ListItem key={text} button component="a" href={href} target="_blank" rel="noopener noreferrer">
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItem>
        ))}
        {user && (
          <>
            <Divider />
            <ListItem>
              <ListItemIcon><WaveIcon /></ListItemIcon>
              <ListItemText>{`Hey, ${user.name.split(' ')[0]}!`}</ListItemText>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
