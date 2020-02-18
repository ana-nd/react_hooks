import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login/index';
import Stories from './Stories/index';
import StoryDetail from './StoryDetail/index';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/stories" component={Stories} />
      <Route exact path="/story/:id" component={StoryDetail} />
    </Switch>
  )

};

export default App;
