import React from 'react';
import ReactDOM from 'react-dom';

const logo1 = "/images/Logo_2.png";

export default class Team extends React.Component{
  render(){
    return(

            <section className="col-12" id="info_section">

              <div className="row no-gutters d-flex justify-content-center" >

                <img src={logo1} alt="logo" />

                <h2 className="col-12 text-center">Team</h2>

                      <div className="col-auto text-center">

                        <div className="row no-gutters d-flex justify-content-center row_names align-self-center">

                            <div className="col-auto">


                              <div style={{backgroundImage:'url("https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/1969192_10202467896771133_361193370_n.jpg?oh=afb74bf92a6a9edf2f0170e9cb631ae7&oe=5AB15D26")'}} alt="logo" className="col-12 align-self-center image"  />

                            </div>

                         <h3 className="col-12 name">Gaetano Nino D'orsi</h3>
                         <p className="col-12 text-center">Progect Manager</p>

                        </div>

                      </div>


                      <div className="col-auto text-center">

                        <div className="row no-gutters d-flex justify-content-center">

                            <div className="col-auto">


                              <div style={{backgroundImage:'url("https://scontent-mxp1-1.xx.fbcdn.net/v/t31.0-8/25398060_2074004866155983_6246970083719359966_o.jpg?oh=a6b86194243e2abea453159a318ef35f&oe=5AB81853")'}} alt="logo" className="col-12 align-self-center image"  />

                            </div>

                         <h3 className="col-12 name">Mattia Pintus</h3>
                         <p className="col-12 text-center">CEO & Founder</p>

                        </div>

                      </div>

                      <div className="col-auto text-center">

                        <div className="row no-gutters d-flex justify-content-center">

                            <div className="col-auto">


                              <div style={{backgroundImage:'url("https://scontent-mxp1-1.xx.fbcdn.net/v/t31.0-8/13558644_1721869991411403_4509873160178725943_o.jpg?oh=0c8ea24a2787c3942c5a303ad0636d82&oe=5AC26522")'}} alt="logo" className="col-12 align-self-center image"  />

                            </div>

                         <h3 className="col-12 name">Federico Calarco</h3>
                         <p className="col-12 text-center">Fullstack Developer</p>

                        </div>

                      </div>


                      <div className="col-auto text-center">

                        <div className="row no-gutters d-flex justify-content-center">

                            <div className="col-auto">

                              <div style={{backgroundImage:'url("https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/14202489_10210257075644223_8530939167010084129_n.jpg?oh=1e0e3e1f4fd27be07ebdec843d8ebdf6&oe=5AEE6CE6")'}} alt="logo" className="col-12 align-self-center image"  />

                            </div>

                         <h3 className="col-12 name">David Jaramillo</h3>
                         <p className="col-12 text-center">Blockchain Developer</p>

                        </div>

                      </div>




              </div>


            </section>
    )
  }
}
