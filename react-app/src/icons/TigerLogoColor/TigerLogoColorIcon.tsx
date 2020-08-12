import React from 'react';

import IconFromLink, { IconFromLinkProps } from '../FromLink';
import { TigerLogo_Color } from '../../assets';

const TigerLogoColorIcon: React.FC<IconFromLinkProps> = ({ ...props }) => (
  <IconFromLink src={TigerLogo_Color} alt="Tiger Logo Color" {...props} />
);

export default TigerLogoColorIcon;
