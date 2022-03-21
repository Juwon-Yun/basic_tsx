import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../src/Assets/css/App.css';
import Login from './Pages/Login/index.Login'
import SignIn from './Pages/LoginTheme/SignIn';
import Home from './Pages/Home/index.Home';
import NotFound from './Pages/NotFound/index.NotFound'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Login></Login>
        </Route>

        <Route path={"/si"}>
          <SignIn></SignIn>
        </Route>

        <Route path={"/home"}>
          <Home></Home>
        </Route>

        <Route path={"*"}>
          <NotFound></NotFound>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
