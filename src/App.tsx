import React from 'react';
import './App.css';
import { Button } from './components/atoms';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="m-12">
      <Button size="md" theme="subtle">
        Button
      </Button>
    </div>
  );
};

export default App;
