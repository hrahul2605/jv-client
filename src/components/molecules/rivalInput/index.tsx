import React from 'react';
import { Button, Icon, Input } from '../../atoms';

interface Props {
  type: 'add' | 'remove';
}

const RivalInput: React.FC<Props> = (props): React.ReactElement => {
  const { type } = props;
  return (
    <div className="flex flex-row mb-2 relative items-center">
      <Input label="Add Rival" />
      <Button
        size="s-icon"
        theme="subtle"
        className="absolute -right-12"
        icon={
          <Icon
            type={type === 'add' ? 'plus' : 'minus'}
            className={type === 'add' ? 'text-success' : 'text-error'}
            width={10}
          />
        }
      />
    </div>
  );
};

export default RivalInput;
