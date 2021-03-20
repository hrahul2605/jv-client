import React, { useEffect, useState } from 'react';
import { Text } from '../../atoms';
import { getServer } from '../../../utils';

interface userType {
  id: number;
  googleID: string;
  name: string;
  picture: string;
  email: string;
}

const Nav: React.FC = (): React.ReactElement => {
  const [user, setUser] = useState<userType | null>(null);
  const fetchUser = async () => {
    try {
      const res = await (
        await fetch(`${getServer()}/user`, { credentials: 'include' })
      ).json();
      setUser(res);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <nav className="flex absolute w-screen p-4 h-16 justify-end">
      {user && (
        <div className="flex flex-row items-center">
          <Text size="xs" weight="medium">
            {user.name}
          </Text>
          <img
            src={user.picture}
            alt="profile"
            className="w-8 ml-2 rounded-full"
          />
        </div>
      )}
    </nav>
  );
};

export default Nav;
