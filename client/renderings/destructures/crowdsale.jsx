import React from 'react';
import ReactDOM from 'react-dom';

import Particles from 'react-particles-js';
const logo1 = "/images/Logo_2.png";

export default class Crowdsale extends React.Component{
  render(){
    return(

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
    )
  }
}
