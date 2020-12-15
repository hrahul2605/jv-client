import React from 'react';
import './App.css';
import { Button, Text } from './components/atoms';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="m-12">
      <Button size="md" theme="subtle">
        Button
      </Button>
      <Text
        type="display"
        size="lg"
        family="sans"
        weight="bold"
        className="text-body"
      >
        The future is in our hands to shape.
      </Text>
    </div>
  );
};

export default App;
