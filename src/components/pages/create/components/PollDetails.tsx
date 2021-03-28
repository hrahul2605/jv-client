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
        className="mb-2"
      />
      <Input
        name="startTime"
        ref={register({ required: true })}
        label="Starting at"
        caption="(MM-DD-YYYY HH:mm:ss)"
      />
      <Input
        className="mt-2"
        name="endTime"
        ref={register({ required: true })}
        label="Ending at"
        caption="~same format as above~"
      />
    </CreateTemplate>
  );
};

export default PollDetails;
