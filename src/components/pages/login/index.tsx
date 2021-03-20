import React from 'react';
import { Button, Icon, Text } from '../../atoms';
import { getServer } from '../../../utils';

const Login: React.FC = (): React.ReactElement => {
  const onClick = () => {
    window.location.href = `${getServer()}/auth/google`;
  };
  return (
    <div className="page-container">
      <div className="flex items-center" style={{ flex: 1 }} />
      <div
        className="flex flex-col justify-center items-center"
        style={{ flex: 12 }}
      >
        <Text
          family="serif"
          className="mb-8"
          type="display"
          size="lg"
          weight="bold"
        >
          Login
        </Text>
        <Button onClick={onClick} size="md" theme="subtle">
          <Icon type="google" width={24} />
        </Button>
      </div>
      <div className="flex items-center" style={{ flex: 1 }}>
        <Text family="serif" size="xs">
          ez sign in bruh me lazy for usrenmae passowrd
        </Text>
      </div>
    </div>
  );
};

export default Login;
