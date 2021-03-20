import React, { lazy, useEffect, useState } from 'react';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import { Button, Icon, Text } from '../../atoms';

const PollDetails = lazy(() => import('./components/PollDetails'));
const Review = lazy(() => import('./components/Review'));
const RivalDetails = lazy(() => import('./components/RivalDetails'));
const Success = lazy(() => import('./components/Success'));

const Create: React.FC = (): React.ReactElement => {
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const [show, setShow] = useState(false);

  const onButtonClick = () => {
    if (location.pathname === '/create') {
      history.push('/create/rivals');
    } else if (location.pathname === '/create/rivals') {
      history.push('/create/publish');
    } else if (location.pathname === '/create/publish') {
      history.push('/');
    }
  };

  const onEditClick = () => {
    history.go(-2);
  };

  useEffect(() => {
    if (
      location.pathname !== '/create/publish' &&
      location.pathname !== '/create/success'
    ) {
      setShow(true);
    } else setShow(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-1 flex-col h-screen bg-background items-center">
      {show && (
        <Text type="display" family="serif" size="sm" className="mt-44 mb-14">
          ({location.pathname === match.path ? '1' : '2'}/2)
        </Text>
      )}
      <Switch>
        <Route exact path={match.path} component={PollDetails} />
        <Route path={`${match.path}/rivals`} component={RivalDetails} />
        <Route path={`${match.path}/publish`} component={Review} />
        <Route path={`${match.path}/success`} component={Success} />
        <Route>
          <Redirect to="/create" />
        </Route>
      </Switch>
      {show && (
        <Button
          size="icon"
          icon={<Icon type="forward" />}
          className="mt-12"
          onClick={onButtonClick}
        />
      )}
      {location.pathname === '/create/publish' && (
        <>
          <Button size="lg" className="mt-12">
            Publish
          </Button>
          <Button theme="text" onClick={onEditClick}>
            <Text className="text-label underline" weight="medium" size="xs">
              Back to edit
            </Text>
          </Button>
        </>
      )}
    </div>
  );
};

export default Create;
