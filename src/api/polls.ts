import axios from '../interceptors/axios';

interface CreatePollData {
  title: string;
  description: string;
  rivals: { title: string }[];
  userId: string;
  startTime: string;
  endTime: string;
}
export const createPoll = async (data: CreatePollData) => {
  const res = await axios({
    method: 'POST',
    url: '/polls',
    data,
  });

  return res.data;
};

export const getPoll = async (id: string) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `/polls/${id}`,
    });

    return res.data;
  } catch (e) {
    return null;
  }
};
