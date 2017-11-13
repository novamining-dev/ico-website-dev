import React from 'react';
import ReactDOM from 'react-dom';

import Header from './destructures/header.jsx'
import Separator from './destructures/separator.jsx';
import Crowdsale from './destructures/crowdsale.jsx'

class Index extends React.Component{



  render(){
    return(

      <div>




      <Header/>
      <Separator text="Recent News"/>
      <Crowdsale/>
      <Separator text="How it works"/>





</div>


    )
  }
}

export default Index;
