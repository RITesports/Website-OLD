import { useEffect, useState } from 'react';
import axios from 'axios';

import Team from '../../models/team';

interface TeamsRes {
  status: number;
  teams: Team[];
  canCreate: boolean;
  canDelete: boolean;
  message: string;
}

const useTeams = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [error, setError] = useState<string>();

  const [canCreate, setCanCreate] = useState(false);
  const [canDelete, setCanDelete] = useState(false);

  useEffect(() => {
    axios.get<TeamsRes>('/api/teams')
      .then(({ data }) => {
        setTeams(data.teams);

        setCanCreate(data.canCreate);
        setCanDelete(data.canDelete);
      })
      .catch((e) => setError(e.response.data.message));
  }, []);

  return {
    teams, error, canCreate, canDelete,
  };
};

export default useTeams;
