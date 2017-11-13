import React from 'react';
import ReactDOM from 'react-dom';

export default class Separator extends React.Component{

  render(){
    return(
      <section className="col-12" id="separator">

          <div className="row no-gutters">
            <h2 className="col-12 text-center">{this.props.text}</h2>
          </div>

      </section>
    )
  }
}
