import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { RESET_NEW_POLL } from '../../../../actions/actionTypes';
import { useTypedSelector } from '../../../../reducers';
import { Button, Text } from '../../../atoms';

const Success: React.FC = (): React.ReactElement => {
  const { newPoll } = useTypedSelector(state => state.polls);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleRedirection = () => {
    history.replace(`/polls/${newPoll?.id}`);
    dispatch({ type: RESET_NEW_POLL });
  };

  useEffect(() => {
    if (newPoll?.id) {
      setTimeout(handleRedirection, 1000);
    }
  }, [newPoll?.id]);

  return (
    <>
      {!newPoll?.id && <Redirect to="/" />}
      <div className="flex flex-col h-full justify-center items-center">
        <Text family="serif" type="display" size="lg" className="mb-12">
          Cnorsgatsluaitons!
        </Text>
        <Button onClick={handleRedirection} size="lg">
          View Poll
        </Button>
      </div>
    </>
  );
};

export default Success;
