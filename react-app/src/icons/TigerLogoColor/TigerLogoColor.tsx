import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

import { ReactComponent as TigerLogoColorSvg } from './RITEsports_TigerLogo_Color.svg';

const TigerLogoColor: React.FC<SvgIconProps> = ({ ...props }) => <SvgIcon component={TigerLogoColorSvg} {...props} viewBox="-0.03125 0 913.8359375 937.0078125" />;

export default TigerLogoColor;
