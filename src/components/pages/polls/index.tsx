import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'socket.io-client';

import { getPoll } from '../../../api/polls';
import { useTypedSelector } from '../../../reducers';
import { Poll, Rival } from '../../../reducers/types';
import { ToastComponent } from '../../molecules';
import { PollTemplate } from '../../templates';

interface ArgType {
  id: string;
  title: string;
  votes: number;
  googleID: string;
  success: boolean;
  message: string;
}

const socket: SocketIOClient.Socket = connect(
  process.env.REACT_APP_SERVER_URL || 'http://localhost:5000',
  {
    reconnectionDelayMax: 10000,
    transports: ['websocket'],
  },
);

const Polls: React.FC = (): React.ReactElement => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [poll, setPoll] = useState<Poll | null>(null);
  const history = useHistory();
  const { user } = useTypedSelector(state => state.user);
  const [voted, setVoted] = useState('-1');

  const fetchPoll = async () => {
    const res = await getPoll(id);
    if (res && res.data) {
      const { rivals } = res.data;
      rivals?.sort((a: Rival, b: Rival) => {
        if (a.votes !== undefined && b.votes !== undefined)
          return b.votes - a.votes;
        return 0;
      });
      setPoll({
        description: res.data.description,
        id: res.data.id,
        title: res.data.title,
        rivals,
        endTime: res.data.endTime,
        startTime: res.data.startTime,
      });
      setLoading(false);
    } else {
      history.replace('/');
    }
  };

  useEffect(() => {
    fetchPoll();
    socket.emit('joinRoom', id);
    socket.on('voteUpdate', (args: ArgType) => {
      if (args.success) {
        if (args.googleID === user?.googleID) {
          toast.success(args.message, {
            duration: 4000,
          });
          setVoted(args.id);
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setPoll(prev => {
          const rivals = prev?.rivals.map(item => {
            if (item.id === args.id) return { ...item, ...args };
            return { ...item };
          });
          rivals?.sort((a, b) => {
            if (a.votes !== undefined && b.votes !== undefined)
              return b.votes - a.votes;
            return 0;
          });
          return {
            ...prev,
            rivals,
          };
        });
        setTimeout(() => setVoted('-1'), 2000);
      } else if (args.googleID === user?.googleID)
        toast.error(args.message, {
          duration: 4000,
        });
    });
    return () => {
      socket.removeAllListeners();
    };
  }, []);

  const handleVote = (voteID: string, title: string) => {
    if (user && user.googleID) {
      toast(
        t => (
          <ToastComponent
            id={t.id}
            handleSuccessClick={() => {
              toast.dismiss(t.id);
              setTimeout(
                () =>
                  socket.emit('addVote', {
                    roomID: id,
                    voteID,
                    googleID: user.googleID,
                  }),
                100,
              );
            }}
            text={`Are you sure you want to vote for ${title}?`}
          />
        ),
        {
          duration: 6000,
        },
      );
    } else {
      toast.error('Please sign in to vote.', {
        duration: 3000,
      });
    }
  };

  return (
    <div className="flex flex-1 flex-col pb-8 h-screen overflow-y-auto bg-background items-center">
      {loading && <p>Loading</p>}
      {!loading && poll !== null && (
        <PollTemplate mode="vote" {...poll} onVote={handleVote} voted={voted} />
      )}
    </div>
  );
};

export default Polls;
