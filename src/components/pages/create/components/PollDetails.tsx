import React from 'react';
import { Input } from '../../../atoms';
import { CreateTemplate } from '../../../templates';

const PollDetails: React.FC = (): React.ReactElement => {
  return (
    <CreateTemplate title="Whereabouts">
      <Input autoFocus label="Enter Poll Title" className="mb-2" />
      <Input label="Tiny Description" type="area" />
    </CreateTemplate>
  );
};

export default PollDetails;
