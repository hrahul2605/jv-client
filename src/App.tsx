import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing } from './components/pages';

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
