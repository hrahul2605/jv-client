import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Text } from '../../atoms';
import { Choice } from '../../molecules';

const Landing: React.FC = (): JSX.Element => {
  useEffect(() => {
    toast('Welcome to Just Vote!', {
      duration: 3000,
    });
  }, []);

  return (
    <div className="page-container">
      <div className="flex items-center" style={{ flex: 1 }} />
      <div className="flex items-center" style={{ flex: 12 }}>
        <Choice />
      </div>
      <div className="flex items-center" style={{ flex: 1 }}>
        <Text family="serif" size="xs">
          All Right Reserved. All Wrong Reversed.
        </Text>
      </div>
    </div>
  );
};

export default Landing;
