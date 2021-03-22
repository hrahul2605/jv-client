import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getPoll } from '../../../api/polls';
import { Rival } from '../../../reducers/types';
import { PollTemplate } from '../../templates';

// http://localhost:3000/polls/90b6edfb-8983-4aee-9045-ccf7d4906d95

interface Poll {
  userID: string;
  title: string;
  description: string;
  rivals: Rival[];
}

const Polls: React.FC = (): React.ReactElement => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [poll, setPoll] = useState<Poll | null>(null);
  const history = useHistory();

  const fetchPoll = async () => {
    const res = await getPoll(id);
    if (res && res.data) {
      setPoll(res.data);
      setLoading(false);
    } else {
      history.replace('/');
    }
  };

  useEffect(() => {
    fetchPoll();
  }, []);

  return (
    <div className="flex flex-1 flex-col h-screen bg-background items-center">
      {loading && <p>Loading</p>}
      {!loading && poll !== null && <PollTemplate mode="vote" {...poll} />}
    </div>
  );
};

export default Polls;
