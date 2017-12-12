import React from 'react';
import ReactDom from 'react-dom';

import Particles from 'react-particles-js';
import Navbar from './navbar.jsx'

const logo1 = "/images/Logo_2.png";



import Metamask from '../../web3js/metamask.jsx'


export default class Header extends React.Component{

  render(){
    return(
      <header className="row no-gutters d-flex" id="header"  >


                          <Particles retinaDetect="true" className="col-12 particle" params={{

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

              <div className="row no-gutters d-flex align-self-center justify-content-center ">

                <div className=" col-12 col-md-6 align-self-center ">

                  <div className="col-12 justify-content-center justify-content-md-end d-flex">
                    <img src={logo1} alt="" className="col-8 align-self-center " id="logo" />
                  </div>

                </div>

                <form className="col-10 col-sm-8 col-md-5 d-flex justify-content-center">

                  <label className="col-12 col-md-12 col-lg-7 align-self-center justify-content-center">

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

                      <button type="button" className="col-12" 
                        onClick={()=>{
                        let data=Metamask.buyToken(1, 'ether');
                        }}   >Buy 1 token</button>


                  </label>

                </form>

              </div>

            </section>

            </div>



      </header>
    )
  }
}
