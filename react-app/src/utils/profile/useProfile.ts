import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

import profileReducer from './profileReducer';
import Profile from '../../models/profile';

interface ProfileRes {
  status: number;
  profile: Profile;
  canEdit: boolean;
  message: string;
}

const useProfile = (id: string) => {
  const [profile, profileDispatch] = useReducer(profileReducer, new Profile());
  const [error, setError] = useState<string>();

  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    axios.get<ProfileRes>(`/api/profiles/${id}`)
      .then(({ data }) => {
        profileDispatch({ type: 'SET_PROFILE', profile: data.profile });

        setCanEdit(data.canEdit);
      })
      .catch((e) => setError(e.response.data.message || e.response.statusText));
  }, [id]);

  return {
    profile, error, profileDispatch, canEdit,
  };
};

export default useProfile;
