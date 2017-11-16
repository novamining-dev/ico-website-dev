import React from 'react';
import ReactDom from 'react-dom';

import Particles from 'react-particles-js';
import Navbar from './navbar.jsx'

const logo1 = "/images/Logo_2.png";

export default class Header extends React.Component{

  render(){
    return(
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

                    <input type="password" name="Password" placeholder="Password" className="col-12 text-center" />

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
    )
  }
}
