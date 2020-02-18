import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login/index';
import Stories from './Stories/index';
import StoryDetail from './StoryDetail/index';
import PrivateRoute from './PrivateRoute';
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/stories" component={Stories}  />
      <PrivateRoute exact path="/story/:id" component={StoryDetail} />
    </Switch>
  )

};

export default App;
