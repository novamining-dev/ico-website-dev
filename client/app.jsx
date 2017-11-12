import React from 'react';
import ReactDOM from 'react-dom';
// global.Tether = tether;
// import tether from 'tether';
// window.Popper = Popper;
// import Popper from 'popper.js';
//bootstrap = require('bootstrap');
import { BrowserRouter, Route, Link , Switch} from 'react-router-dom';
import { AppContainer } from "react-hot-loader";
import Index from './renderings/index.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (

        <BrowserRouter>

          <Switch>

            <Route exact path="/" component={Index}/>

          </Switch>

        </BrowserRouter>

    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')

);
