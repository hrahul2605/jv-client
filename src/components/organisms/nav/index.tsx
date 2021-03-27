/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { Button, Icon, Text } from '../../atoms';

import { useTypedSelector } from '../../../reducers';
import { GET_USER, LOGOUT_USER } from '../../../actions/actionTypes';

const Nav: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useTypedSelector(state => state.user);

  useEffect(() => {
    dispatch({ type: GET_USER });
  }, []);

  const handleLogin = () => {
    history.replace('/login');
  };

  const handleSwitch = () => {
    history.replace('/login');
  };

  const handleLogout = () => {
    dispatch({ type: LOGOUT_USER });
  };

  const collapsable = useRef<HTMLDivElement>(null);

  const onClick = () => {
    collapsable.current?.classList.toggle('active');
  };

  return (
    <nav className="flex absolute w-screen p-6 h-16 justify-between items-center">
      <Link to="/">
        <Icon type="logo" />
      </Link>
      {user && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          onClick={onClick}
          className="cursor-pointer flex flex-row items-center relative"
        >
          <Text className="select-none" size="xs" weight="medium">
            {user.name}
          </Text>
          <img
            src={user.picture}
            alt="profile"
            className="w-8 ml-2 rounded-full"
          />
          <div ref={collapsable} className="collapsable-base">
            <Button
              className="mb-2"
              size="sm"
              theme="subtle"
              onClick={handleSwitch}
            >
              Switch
            </Button>
            <Button size="sm" theme="subtle" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      )}
      {!user && (
        <div className="flex flex-row items-center">
          <Button size="sm" theme="text" onClick={handleLogin}>
            Login
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
