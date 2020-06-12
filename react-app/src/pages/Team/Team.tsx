import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const Team: React.FC = () => {
  const { identifierOrId } = useParams();

  return (
    <Typography variant="h1">
      {identifierOrId}
      {' '}
      Page
    </Typography>
  );
};

export default Team;
