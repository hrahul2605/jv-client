import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Text } from '../../atoms';

import { useTypedSelector } from '../../../reducers';
import { GET_USER } from '../../../actions/actionTypes';

const Nav: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { user } = useTypedSelector(state => state.user);
  useEffect(() => {
    dispatch({ type: GET_USER });
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
