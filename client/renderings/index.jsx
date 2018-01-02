import React from 'react';
import ReactDOM from 'react-dom';

import Header from './destructures/header.jsx'
import Separator from './destructures/separator.jsx';
import Crowdsale from './destructures/crowdsale.jsx'
import Team from './destructures/team.jsx'
import Advisors from './destructures/advisors.jsx'

const logo1 = "/images/Logo_1.png";



class Index extends React.Component{

  render(){
    return(

      <div>




        <Header/>

          <Separator text="Recent News"/>

            <Crowdsale/>

              <Separator text="How it works"/>

              <Team/>
              <Advisors/>




        {/*         <Footer/>

          */}

          <section className="col-12 d-flex justify-content-center align-self-center" id="footer">

            <div className="row no-gutters d-flex justify-content-center">

                <div className="col-10">
                    <div className="row no-gutters">

                    <div className="col-4 mx-auto " >

                      <img src={logo1} alt="" className="col-12" />

                    </div>

                    <a href="https://www.html.it" target="_blank" className="col-12 text-center">contact@nova.mining</a>

                    <label  className="col-4 mx-auto">
                    <p className="col-12 text-center">Subscribe to the nova newsletter</p>

                      <span className="row no-gutters">
                        <input type="text" placeholder="Your email address" className="col-10 text-center"/>
                        <button className="col-2">Subscribe</button>
                      </span>
                    </label>


                    </div>
                </div>



            </div>

          </section>


      </div>


    )
  }
}

export default Index;
