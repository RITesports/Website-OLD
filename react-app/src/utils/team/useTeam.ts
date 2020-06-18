import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

import teamReducer from './teamReducer';
import Team from '../../models/team';

interface TeamRes {
  status: number;
  team: Team;
  canDelete: boolean;
  canEdit: boolean;
  message: string;
}

const useTeam = (identifierOrId?: string) => {
  const [team, teamDispatch] = useReducer(teamReducer, new Team());
  const [error, setError] = useState<string>();

  const [canDelete, setCanDelete] = useState(false);
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    if (identifierOrId) {
      axios.get<TeamRes>(`/api/teams/${identifierOrId}`)
        .then(({ data }) => {
          teamDispatch({ type: 'SET_TEAM', team: data.team });

          setCanDelete(data.canDelete);
          setCanEdit(data.canEdit);
        })
        .catch((e) => setError(e.response.data.message || e.response.statusText));
    }
  }, [identifierOrId]);

  return {
    team, error, teamDispatch, canDelete, canEdit,
  };
};

export default useTeam;
