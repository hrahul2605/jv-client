/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { lazy, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import {
  CREATE_POLL,
  SET_NEW_POLL_DETAILS,
  SET_NEW_POLL_RIVALS,
} from '../../../actions/actionTypes';
import { useTypedSelector } from '../../../reducers';
import { Button, Icon, Text } from '../../atoms';

const PollDetails = lazy(() => import('./components/PollDetails'));
const Review = lazy(() => import('./components/Review'));
const RivalDetails = lazy(() => import('./components/RivalDetails'));
const Success = lazy(() => import('./components/Success'));

const Create: React.FC = (): React.ReactElement => {
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const { newPoll } = useTypedSelector(state => state.polls);

  const methods = useForm({
    defaultValues: {
      rivals: newPoll?.rivals,
      title: newPoll?.title,
      description: newPoll?.description,
    },
  });

  const [show, setShow] = useState(false);

  const onEditClick = () => {
    history.go(-1);
  };

  const onSubmit = (data: any) => {
    if (data.title) {
      dispatch({ type: SET_NEW_POLL_DETAILS, details: { ...data } });
      history.push('/create/rivals');
    } else {
      const rivals = data.rivals.map((item: any, index: number) => {
        return { key: index.toString(), title: item.title };
      });
      dispatch({ type: SET_NEW_POLL_RIVALS, rivals });
      history.push('/create/publish');
    }
  };

  useEffect(() => {
    methods.reset({
      rivals: newPoll?.rivals,
      title: newPoll?.title,
      description: newPoll?.description,
    });
    if (
      location.pathname !== '/create/publish' &&
      location.pathname !== '/create/success'
    ) {
      setShow(true);
    } else setShow(false);
  }, [location.pathname]);

  const handlePublish = () => {
    dispatch({ type: CREATE_POLL });
  };

  return (
    <>
      {newPoll?.id && <Redirect to="/create/success" />}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-1 flex-col h-screen bg-background items-center">
            {show && (
              <Text
                type="display"
                family="serif"
                size="sm"
                className="mt-44 mb-14"
              >
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
                type="submit"
              />
            )}
            {location.pathname === '/create/publish' && (
              <>
                <Button size="lg" className="mt-12" onClick={handlePublish}>
                  Publish
                </Button>
                <Button theme="text" onClick={onEditClick}>
                  <Text
                    className="text-label underline"
                    weight="medium"
                    size="xs"
                  >
                    Back to edit
                  </Text>
                </Button>
              </>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default Create;
