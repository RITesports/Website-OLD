import React from 'react';
import Icon, { IconProps } from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    height: '100%',
    width: '100%',
  },
});

type Props = {
  src: string;
  alt: string;
};
const FromLink: React.FC<Props & IconProps> = ({ src, alt, ...props }) => {
  const classes = useStyles();

  return (
    <Icon {...props}>
      <img src={src} alt={alt} className={classes.icon} />
    </Icon>
  );
};

export default FromLink;
