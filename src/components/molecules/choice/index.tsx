import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Text } from '../../atoms';
import './styles.css';

const Choice: React.FC = (): JSX.Element => {
  return (
    <div className="choice-container">
      <div className="choice-text-container">
        <Text family="serif" weight="bold" type="display" size="lg">
          I’m here to
        </Text>
      </div>
      <div className="choice-btn-container">
        <Link to="/vote">
          <Button>Vote</Button>
        </Link>
        <Link to="/create">
          <Button theme="subtle">Create Poll</Button>
        </Link>
      </div>
    </div>
  );
};

export default Choice;
