import React from 'react';
import { HashRouter,Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NewGame from './pages/NewGame';
import Login from './pages/Login';
import Signup from './pages/Signup';


export default class App extends React.Component {

  render () {
  return (
    <HashRouter>
    <Switch>
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/" component={Login} />
      <Route exact path="/home" component={HomePage} />
      <Route path="/new-game/:handle" component={NewGame} />
    </Switch>
    </HashRouter>
  )
}
}

