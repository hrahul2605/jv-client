import React from 'react';
import { PollTemplate } from '../../../templates';

const Review: React.FC = (): React.ReactElement => {
  return (
    <PollTemplate
      mode="review"
      title="Poll Title"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor nibh, laoreet eget justo vel, interdum vestibulum neque. "
      rivals={[
        { name: 'Rahul', id: '1' },
        { name: 'Anik', id: '2' },
      ]}
    />
  );
};

export default Review;
