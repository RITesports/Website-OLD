import { useEffect, useState } from 'react';
import axios from 'axios';

import Team from '../../models/team';

interface TeamRes {
  status: number;
  team: Team;
  canDelete: boolean;
  canEdit: boolean;
  message: string;
}

const useTeam = (identifierOrId?: string) => {
  const [team, setTeam] = useState(new Team());
  const [error, setError] = useState<string>();

  const [canDelete, setCanDelete] = useState(false);
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    if (identifierOrId) {
      axios.get<TeamRes>(`/api/teams/${identifierOrId}`)
        .then(({ data }) => {
          setTeam(data.team);

          setCanDelete(data.canDelete);
          setCanEdit(data.canEdit);
        })
        .catch((e) => setError(e.message));
    }
  }, [identifierOrId]);

  return {
    team, error, canDelete, canEdit,
  };
};

export default useTeam;
