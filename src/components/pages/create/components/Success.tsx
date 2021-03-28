import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { RESET_NEW_POLL } from '../../../../actions/actionTypes';
import { useTypedSelector } from '../../../../reducers';
import { Button, ProgressBar, Text } from '../../../atoms';

let timeout: null | NodeJS.Timeout = null;

// in seconds
const REDIRECTION_TIME = 10;

const Success: React.FC = (): React.ReactElement => {
  const { newPoll } = useTypedSelector(state => state.polls);
  const history = useHistory();
  const dispatch = useDispatch();

  const [timer, setTimer] = useState(REDIRECTION_TIME);
  const handleRedirection = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    history.replace(`/polls/${newPoll?.id}`);
    dispatch({ type: RESET_NEW_POLL });
  };

  useEffect(() => {
    if (newPoll?.id) {
      timeout = setInterval(
        () => setTimer(prev => (prev - 1 < 0 ? 0 : prev - 1)),
        1000,
      );
    }
  }, [newPoll?.id]);

  return (
    <>
      {!newPoll?.id && <Redirect to="/" />}
      <div className="absolute mt-24">
        <ProgressBar
          loading={timer !== 0}
          onFinish={handleRedirection}
          label={`You will be redirected in ${timer}s`}
          interval={100}
          center
        />
      </div>
      <div className="flex flex-col h-full justify-center items-center">
        <Text family="serif" type="display" size="lg" className="mb-12">
          Cnorsgatsluaitons!
        </Text>
        <Button onClick={handleRedirection} size="lg">
          View Poll
        </Button>
        <Text size="sm" weight="light" className="mt-8">
          Please make sure to copy the poll id to share it later
        </Text>
        <Text size="sm" weight="medium">
          {newPoll?.id}
        </Text>
      </div>
    </>
  );
};

export default Success;
