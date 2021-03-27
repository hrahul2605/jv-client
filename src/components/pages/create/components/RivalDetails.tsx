import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { useTypedSelector } from '../../../../reducers';
import { RivalInput } from '../../../molecules';
import { CreateTemplate } from '../../../templates';

const RivalDetails: React.FC = (): React.ReactElement => {
  const { register } = useFormContext();
  const { newPoll } = useTypedSelector(state => state.polls);
  const { fields, append, remove } = useFieldArray({
    name: 'rivals',
  });

  const onAdd = () => {
    append({ key: Date.now().toString(), title: '' });
  };
  const onRemove = (index: number) => {
    remove(index);
  };

  return (
    <>
      {!newPoll?.title && <Redirect to="/create" />}
      <CreateTemplate
        title="Whattovoteto"
        subtitle="Enter any name, place, animal or thing"
      >
        <div className="rivals-input-container">
          {fields.map((item, index) => (
            <RivalInput
              key={item.key}
              type={index === fields.length - 1 ? 'add' : 'remove'}
              onAdd={onAdd}
              onRemove={() => onRemove(index)}
              ref={register({
                required: index !== fields.length - 1,
                minLength: 3,
              })}
              name={`rivals[${index}].title`}
              defaultValue={item.title}
            />
          ))}
        </div>
      </CreateTemplate>
    </>
  );
};

export default RivalDetails;
