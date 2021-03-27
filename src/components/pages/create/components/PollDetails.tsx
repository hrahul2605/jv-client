import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input, TextArea } from '../../../atoms';
import { CreateTemplate } from '../../../templates';

const PollDetails: React.FC = (): React.ReactElement => {
  const { register } = useFormContext();
  return (
    <CreateTemplate title="Whereabouts">
      <Input
        name="title"
        ref={register({ required: true })}
        autoFocus
        label="Enter Poll Title"
        className="mb-2"
      />
      <TextArea
        name="description"
        ref={register({ required: true })}
        label="Tiny Description"
      />
    </CreateTemplate>
  );
};

export default PollDetails;
