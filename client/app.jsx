import React from 'react';
import ReactDOM from 'react-dom';
// global.Tether = tether;
// import tether from 'tether';
window.Popper = Popper;
import Popper from 'popper.js';
import { AppContainer } from "react-hot-loader";
//bootstrap = require('bootstrap');

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (

      <div className="container-fluid">
        <div className="row no-gutters">
          <p className="col-12 text-right">Hello React2</p>
        </div>
      </div>

    )
  }
}


ReactDOM.render(
   <App/>,
  document.getElementById('app')
);
