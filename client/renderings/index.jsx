import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';

import Navbar from './destructures/navbar.jsx'
const logo1 = "/images/Logo_2.png";

class Index extends React.Component{



  render(){
    return(

      <div>

      <header className="row no-gutters d-flex" id="header"  >


                          <Particles retinaDetect="true" className="col-12 particle mr-auto" params={{

                                		particles:{

                                      number:{
                                        value:111,
                                      },

                                      color:{
                                        value:'#0a69c3',
                                        opacity:1,
                                      },

                                      size:{
                                        value:5,
                                        random:true,
                                        opacity:1,
                                      },

                                			line_linked: {
                                        color:'#0a69c3',
                                        width:1,
                                        shadow:{
                                          enable:true,
                                          color:'white',
                                          blur:5,
                                        },
                                			}

                                		}}}/>



            <div className="col-12 overParticle">

            <Navbar/>

            <section className="col-12 d-flex" id="login_wrap">

              <div className="row no-gutters align-self-center">

                <div className="col-6 d-flex">

                  <div className="col-6 ml-auto">
                    <img src={logo1} alt="" className="col-12 " id="logo" />
                  </div>

                </div>

                <form className="col-sm-5 col-6 d-flex mx-auto align-self-center">

                  <label className="col-6 mr-auto">

                    <input type="text" name="Email" placeholder="Email" className="col-12 text-center" />

                    <input type="text" name="Password" placeholder="Password" className="col-12 text-center" />

                      <span className="row no-gutters d-flex">
                        <input type="checkbox" className="col-auto  "/>
                        <p className="col-10 align-self-center">I accept <b>terms and condition</b></p>
                      </span>

                      <span className="row no-gutters d-flex">
                        <input type="checkbox" className="col-auto  "/>
                        <p className="col-10 align-self-center">I am not a US or P.R.C. citizen</p>
                      </span>

                      <button type="button" className="col-12">Sign up</button>


                  </label>

                </form>

              </div>

            </section>

            </div>



      </header>



      <section className="col-12" id="news">

          <div className="row no-gutters">
            <h2 className="col-12 text-center">Recent News</h2>
          </div>

      </section>




      <section className="col-12" id="crowdsale_wrap">

        <div className="row no-gutters" >

            <Particles retinaDetect="true" className="col-12 second_particle" params={{

                      particles:{
                        number:{
                          value:111,
                        },

                        color:{
                          value:'#0a69c3',
                          opacity:1,
                        },

                        size:{
                          value:5,
                          random:true,
                          opacity:1,
                        },

                        line_linked: {
                          color:'#0a69c3',
                          width:1,
                          shadow:{
                            enable:true,
                            color:'white',
                            blur:5,
                          },
                        }

                      }}}/>


            <div className=" col-12" id="crowd" style={{position:'absolute' , zIndex:1000000000 , height:'100%'}}>
              <div className="row no-gutters d-flex" style={{height:'100%'}}>
                <h2 className="col-12 text-center">Crowdsale</h2>
                  <div className="col-8 mx-auto align-self-start">
                      <div className="row no-gutters">

                        <div className="col-4 align-self-center">

                          <h3 className="col-12 text-center align-self-center">Sale Starts in</h3>

                            <div className="row no-gutters">
                              <div className="col-auto mx-auto days">
                                <p className="col-12 text-center">08  :</p>
                                <p className="col-12 text-center">Days</p>
                              </div>

                              <div className="col-auto mx-auto hours">
                                <p className="col-12 text-center">08  :</p>
                                <p className="col-12 text-center">Houts</p>
                              </div>

                              <div className="col-auto mx-auto minutes">
                                <p className="col-12 text-center">08  :</p>
                                <p className="col-12 text-center">Minutes</p>
                              </div>

                              <div className="col-auto mx-auto seconds">
                                <p className="col-12 text-center">08 </p>
                                <p className="col-12 text-center">Seconds</p>
                              </div>
                            </div>

                        </div>

                        <div className="div col-4 align-self-center">

                          <h3 className="col-12 text-center">1 eth = 100 NOVATOKEN</h3>
                          <h4 className="col-12 text-center">50% discount</h4>
                          <h5 className="col-12 text-center">Minimal investement 20 NVT</h5>
                          <p className="col-12 text-center">Dates: 13 November 2017 14:00 UTC -
13 December 2017 14:00 UTC</p>

                        </div>

                        <img src={logo1} alt="" className="col-2 mx-auto align-self-center" id="logo" />


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
