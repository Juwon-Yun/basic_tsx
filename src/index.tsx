import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './Styles/GlobalStyle';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "./Modules/index"
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode> 
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle/>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
