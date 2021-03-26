import axios from '../interceptors/axios';

export const getUser = async () => {
  const res = await axios({
    method: 'GET',
    url: '/user',
  });

  return res.data;
};

export const logoutUser = async () => {
  await axios({
    method: 'GET',
    url: '/auth/logout',
  });
};
