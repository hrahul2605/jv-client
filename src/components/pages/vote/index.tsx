import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { Button, Icon, Input, Text } from '../../atoms';

const Vote: React.FC = (): React.ReactElement => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const onSubmit = (data: { pollID: string }) => {
    history.replace(`/polls/${data.pollID}`);
  };

  useEffect(() => {
    if (errors.pollID) {
      toast.error('Poll ID not valid', { duration: 2000 });
    }
  }, [errors]);
  return (
    <div className="page-container">
      <Text
        size="lg"
        type="display"
        weight="semibold"
        family="serif"
        className="mb-4"
      >
        Vote
      </Text>
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <Input
          autoFocus
          name="pollID"
          ref={register({
            required: true,
            pattern: {
              value: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
              message: 'Poll ID is not valid',
            },
          })}
          label="Enter Poll ID"
          caption="You'll be redirected to the voting page"
        />
        <Button
          type="submit"
          size="s-icon"
          className="absolute top-4 -right-12"
          icon={<Icon type="forward" />}
        />
      </form>
    </div>
  );
};

export default Vote;
