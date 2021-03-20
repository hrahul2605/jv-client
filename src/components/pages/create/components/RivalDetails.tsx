import React from 'react';
import { RivalInput } from '../../../molecules';
import { CreateTemplate } from '../../../templates';

const RivalDetails: React.FC = (): React.ReactElement => {
  return (
    <CreateTemplate
      title="Whattovoteto"
      subtitle="Enter any name, place, animal or thing"
    >
      <RivalInput type="remove" />
      <RivalInput type="add" />
    </CreateTemplate>
  );
};

export default RivalDetails;
