import React from 'react';
import { Text } from '../../atoms';

const Nopage: React.FC = (): React.ReactElement => {
  return (
    <div className="page-container">
      <Text weight="medium" size="md" className="text-center">
        Sorry, I&apos;m yet to complete writing css for smaller screens
      </Text>
    </div>
  );
};

export default Nopage;
