import React from 'react';
import { Button, Icon, Input } from '../../atoms';

interface Props {
  type: 'add' | 'remove';
  name?: string;
  defaultValue?: string;
  ref?:
    | React.RefObject<HTMLInputElement>
    // eslint-disable-next-line no-unused-vars
    | ((instance: HTMLInputElement | null) => void)
    | null;
  onAdd?: () => void;
  onRemove?: () => void;
}

const RivalInput: React.FC<Props> = React.forwardRef(
  (props, ref): React.ReactElement => {
    const { type, onAdd, onRemove, name, defaultValue } = props;
    const onClick = () => {
      if (type === 'add' && onAdd) onAdd();
      else if (type === 'remove' && onRemove) onRemove();
    };
    return (
      <div className="flex flex-row mb-2 relative items-center">
        <Input
          label="Add Rival"
          ref={ref}
          name={name}
          autoFocus
          defaultValue={defaultValue}
        />
        <Button
          size="s-icon"
          theme="subtle"
          className="absolute right-2"
          onClick={onClick}
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
  },
);

export default RivalInput;
