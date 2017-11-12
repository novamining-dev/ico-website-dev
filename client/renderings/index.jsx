import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';

import Navbar from './destructures/navbar.jsx'
const logo = "https://image.flaticon.com/icons/svg/179/179437.svg";

class Index extends React.Component{



  render(){
    return(

      <div>

      <header className="row no-gutters d-flex" id="header"  >


                          <Particles retinaDetect="true" className="col-12 particle mr-auto" params={{

                                		particles:{

                                      number:{
                                        value:200,
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



        <div className="col-12 overtParticle">

        <Navbar/>

        <section className="col-12" id="login_wrap">

          <div className="row no-gutters">

            <div className="col-6 d-flex">

              <img src={logo} alt="" className="col-6 ml-auto" id="logo" />

            </div>

            <form className="col-sm-5 col-6 d-flex mx-auto align-self-center">

              <label className="col-6 mr-auto">

                <input type="text" name="Email" placeholder="Email" value="" className="col-12 text-center" />

                <input type="text" name="Password" value="" placeholder="Password" className="col-12 text-center" />

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

      <section className="col-12">
        <div className="row no-gutters">
        <h2 className="col-12 text-center">Recent News</h2>
        </div>
      </section>


</div>


    )
  }
}

export default Index;
