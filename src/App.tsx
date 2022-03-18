import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../src/Assets/css/App.css';
import Login from './Pages/Login/index.Login'
import SignIn from './Pages/LoginTheme/SignIn';
import Home from './Pages/Home/index.Home';
import NotFound from './Pages/NotFound/index.NotFound'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './Modules';
import { Dispatch } from 'redux';

function App() {

  const state = useSelector((state: RootState) => state)
  const dispatch : Dispatch = useDispatch()

  console.log(state)


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
