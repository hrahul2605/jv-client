import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import toast from 'react-hot-toast';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Nav } from './components/organisms';
import ErrorBoundary from './ErrorBoundary';
import { Text } from './components/atoms';
import { useTypedSelector } from './reducers';
import useMediaQuery from './hooks/useMediaQuery';

const Landing = lazy(() => import('./components/pages/landing'));
const Create = lazy(() => import('./components/pages/create'));
const Login = lazy(() => import('./components/pages/login'));
const Polls = lazy(() => import('./components/pages/polls'));
const Vote = lazy(() => import('./components/pages/vote'));
const Incomplete = lazy(() => import('./components/pages/Incomplete'));

const App: React.FC = (): React.ReactElement => {
  const { authenticated } = useTypedSelector(state => state.global);
  useEffect(() => {
    toast('Welcome to Just Vote!', {
      duration: 3000,
    });
  }, []);

  const [matches] = useMediaQuery('(min-width:700px)');
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="page-container">
              <Text className="text-label" size="md" weight="semibold">
                Loading
              </Text>
            </div>
          }
        >
          {matches && (
            <>
              <Nav />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/polls/:id" component={Polls} />
                <Route path="/vote" component={Vote} />
                {authenticated && <Route path="/create" component={Create} />}
                {!authenticated && <Redirect to="/login" />}
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </>
          )}
          {!matches && <Route path="/" component={Incomplete} />}
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
