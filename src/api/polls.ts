import axios from '../interceptors/axios';

interface CreatePollData {
  title: string;
  description: string;
  rivals: { title: string }[];
  userID: string;
}
export const createPoll = async (data: CreatePollData) => {
  const res = await axios({
    method: 'POST',
    url: '/polls',
    data,
  });

  return res.data;
};
