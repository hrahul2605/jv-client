import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'socket.io-client';

import { getPoll } from '../../../api/polls';
import { useTypedSelector } from '../../../reducers';
import { Rival } from '../../../reducers/types';
import { PollTemplate } from '../../templates';

// http://localhost:3000/polls/90b6edfb-8983-4aee-9045-ccf7d4906d95

const socket: SocketIOClient.Socket = connect('http://localhost:5000', {
  reconnectionDelayMax: 10000,
  transports: ['websocket'],
});

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
  const { user } = useTypedSelector(state => state.user);

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
    socket.emit('joinRoom', id);
    return () => {
      socket.removeAllListeners();
    };
  }, []);

  const handleVote = (voteID: string) => {
    socket.emit('addVote', { roomID: id, voteID, googleID: user?.googleID });
  };

  return (
    <div className="flex flex-1 flex-col h-screen bg-background items-center">
      {loading && <p>Loading</p>}
      {!loading && poll !== null && (
        <PollTemplate mode="vote" {...poll} onVote={handleVote} />
      )}
    </div>
  );
};

export default Polls;
