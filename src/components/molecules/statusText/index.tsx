import classnames from 'classnames';
import React from 'react';
import { Text } from '../../atoms';

interface StatusTextProps {
  status: 'success' | 'error' | 'warning';
  text: string;
}

const StatusText: React.FC<StatusTextProps> = (props): React.ReactElement => {
  const { text, status } = props;
  const className = classnames([
    'w-4',
    'h-4',
    'rounded-full',
    'mr-2',
    `bg-${status}`,
  ]);
  return (
    <div className="flex flex-row items-center">
      <div className={className} />
      <Text weight="semibold" size="sm" className="text-body">
        {text}
      </Text>
    </div>
  );
};

export default StatusText;
