import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Nav } from './components/organisms';
import ErrorBoundary from './ErrorBoundary';
import { Text } from './components/atoms';
import { useTypedSelector } from './reducers';

const Landing = lazy(() => import('./components/pages/landing'));
const Create = lazy(() => import('./components/pages/create'));
const Login = lazy(() => import('./components/pages/login'));

const App: React.FC = (): React.ReactElement => {
  const { authenticated } = useTypedSelector(state => state.global);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Nav />
        <Suspense
          fallback={
            <div className="h-screen flex flex-1 bg-background">
              <Text>Loading</Text>
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            {authenticated && <Route path="/create" component={Create} />}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
