import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Index from './pages/Index/App';
import Detail from './pages/Detail/App';
import reportWebVitals from './reportWebVitals';
import adapter from "screen-adapter";
import { BrowserRouter, Switch, Route, } from "react-router-dom";

adapter(750);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Index />
        </Route>
        <Route exact path="/detail" >
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
