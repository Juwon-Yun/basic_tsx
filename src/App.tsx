import React, { useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../src/Assets/css/App.css';
import Login from './Pages/Login/index.Login'
import Home from './Pages/Home/index.Home';
import NotFound from './Pages/NotFound/index.NotFound'
import Detail from './Pages/Detail/index.Detail'
import { useSelector } from 'react-redux';
import { RootState } from './Modules';
import Menu from './Components/Menu/index.Menu'

function App() {

  const gridState = useSelector( (state:RootState) => state.grid )

  // const temp = useRef(gridState.id)
  
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Login></Login>
        </Route>

        <Route path={"/home"}>
          <Menu></Menu>
          <Home></Home>
        </Route>
        
        <Route path={"/detail"}>
          <Menu></Menu>
          <Detail></Detail>
        </Route>
{/* 
        <Route path={"/:id"}>
          <NotFound></NotFound>
        </Route> */}

      </Switch>
    </div>
  );
}

export default App;
