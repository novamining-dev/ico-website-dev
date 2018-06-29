import React from 'react';
import ReactDOM from 'react-dom';
// global.Tether = tether;
// import tether from 'tether';
// window.Popper = Popper;
// import Popper from 'popper.js';
//bootstrap = require('bootstrap');
import { AppContainer } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch , Redirect } from "react-router-dom";
import Main from './renderings/index.jsx';
import Login from './renderings/login.jsx'
import Documentation from './renderings/documents.jsx'
class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (

        <Router>

          <Switch>

            <Route exact path="/" component={Main}/>
            <Route path="/Documentation" component={Main}/>

              <Redirect to="/"/>

          </Switch>

        </Router>

    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')

);
