import React from 'react';
import { Button, Text } from '../../../atoms';

const Success: React.FC = (): React.ReactElement => {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <Text family="serif" type="display" size="lg" className="mb-12">
        Cnorsgatsluaitons!
      </Text>
      <Button size="lg">View Poll</Button>
    </div>
  );
};

export default Success;
