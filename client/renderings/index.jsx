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

        {/*         <Footer/>           */}



          <section className="col-12" id="footer">

            <div className="row no-gutters d-flex">

                <h3 className="col-12 text-center">
                  Contact Us
                </h3>

                <p className="col-12 text-center">contact@nova.mining</p>

                <label  className="col-6 mx-auto">
                <p className="col-12 text-center">Subscribe to the nova newsletter</p>

                  <span className="row no-gutters">
                    <input type="text" placeholder="Your email address" className="col-8 text-center"/>
                    <button className="col-4">Subscribe</button>
                  </span>
                </label>


                <div className="col-9 mx-auto">
                  <div className="row no-gutters">
                  <div className="col-4">
                    <div className="row no-gutters">
                      <h4 className="col-12 text-center">Community</h4>
                    </div>
                  </div>

                    <div className="col-4">
                      <div className="row no-gutters">
                        <h4 className="col-12 text-center">Follow</h4>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="row no-gutters">
                        <h4 className="col-12 text-center">Documents</h4>
                      </div>
                    </div>
                  </div>
                </div>

            </div>

          </section>


      </div>


    )
  }
}

export default Index;
