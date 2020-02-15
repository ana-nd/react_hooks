import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login/index';
import Stories from './Stories/index';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/stories" component={Stories} />
    </Switch>
  )

};

export default App;
