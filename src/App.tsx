import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import toast from 'react-hot-toast';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Nav } from './components/organisms';
import ErrorBoundary from './ErrorBoundary';
import { Text } from './components/atoms';
import { useTypedSelector } from './reducers';

const Landing = lazy(() => import('./components/pages/landing'));
const Create = lazy(() => import('./components/pages/create'));
const Login = lazy(() => import('./components/pages/login'));
const Polls = lazy(() => import('./components/pages/polls'));

const App: React.FC = (): React.ReactElement => {
  const { authenticated } = useTypedSelector(state => state.global);
  useEffect(() => {
    toast('Welcome to Just Vote!', {
      duration: 3000,
    });
  }, []);
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Nav />
        <Suspense
          fallback={
            <div className="page-container">
              <Text className="text-label" size="md" weight="semibold">
                Loading
              </Text>
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/polls/:id" component={Polls} />
            {authenticated && <Route path="/create" component={Create} />}
            {!authenticated && <Redirect to="/login" />}
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
