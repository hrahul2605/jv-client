import React from 'react';
import { Button, Icon, Text } from '../../atoms';
import { getServer } from '../../../utils';
import { useTypedSelector } from '../../../reducers';

const Login: React.FC = (): React.ReactElement => {
  const onClick = () => {
    window.location.href = `${getServer()}/auth/google`;
  };
  const { user } = useTypedSelector(state => state.user);
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
        {user && (
          <div className="mt-2 flex flex-row">
            <Text size="xs" weight="light" className="mr-1">
              You&apos;re already logged in using
            </Text>
            <Text size="xs" weight="medium">
              {user.email}
            </Text>
          </div>
        )}
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
