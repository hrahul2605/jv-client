import React from 'react';
import { Redirect } from 'react-router-dom';
import { useTypedSelector } from '../../../../reducers';
import { PollTemplate } from '../../../templates';

const Review: React.FC = (): React.ReactElement => {
  const { newPoll } = useTypedSelector(state => state.polls);
  const valid = newPoll?.title && newPoll?.rivals[0].title.length !== 0;
  return (
    <>
      {!valid && <Redirect to="/create" />}
      {valid && newPoll && <PollTemplate mode="review" {...newPoll} />}
    </>
  );
};

export default Review;
