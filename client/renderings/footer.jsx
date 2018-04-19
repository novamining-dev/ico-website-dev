import React from 'react';

export const Footer = (props) => (

  <div className="row no-gutters d-flex justify-content-center white footer" style={{background:'rgba(0,0,0,.95)'}}>
    <div className="col-12" style={{height:150,background:'rgba(255,255,255,.1)'}}/>
      <div className="col-11 mt-50 mb-50">
        <div className="row no-gutters d-flex justify-content-center align-items-end mb-50">

                <div className="col-12 mt-50">
                    <img src={props.source} alt="" className="col-auto mb-15 mt-15" style={{height:50}}/>
                </div>

                <div className="col-12 col-sm-6 col-md-4 text-center text-md-right mt-15 mb-50">
                    <div className="row no-gutters d-flex justify-content-center ">




                            <i className="fas fa-map-marker opaque col-1"></i>

                            <p className="col-11 col-md-11 text-left ">Registered Office:<br/>25 ul. Hashovska<br/>Plovdiv, 4000<br/><span className="upcase">Bulgaria</span></p>
                            <i className="fas fa-home opaque col-1"></i>
                            <p className="col-11 col-md-11  text-left">www.novamining.io</p>

                            <i className="fas fa-envelope mb opaque col-1"></i>
                            <p className="col-11 col-md-11  text-left">contact@novamining.io</p>


                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-8 mt-15 mb-50">
                    <div className="row no-gutters d-flex align-items-end align-self-end text-center text-md-right">

                      <div className="col-4">

                        <div className="row no-gutters">
                          <p className="col-10">Terms & Conditions</p>
                          <p className="col-10">KYC Policy</p>
                          <p className="col-10">eIDV Policy</p>


                          </div>

                      </div>

                      <div className="col-4">

                          <div className="row no-gutters">
                            <p className="col-10">Disclaimer</p>
                            <p className="col-10">AML Policy</p>
                            <p className="col-10">About us</p>


                          </div>

                      </div>

                      <div className="col-4">

                        <div className="row no-gutters">
                          <p className="col-10">Privacy Policy</p>
                          <p className="col-10">CTF Policy</p>
                          <p className="col-10">Contact us</p>

                          </div>

                      </div>

                    </div>
                </div>

                <div className="w-100"></div>
                <div className="col-12 col-md-4 mt-15 mb-50">
                    <div className="row no-gutters d-flex justify-content-center justify-content-md-center text-center  align-items-start">
                          <p className="mb-15 col-12 white f25 light upcase">Follow us</p>
                          <div className="col-12 ">
                          <div className="row no-gutters d-flex align-self-start align-items-start justify-content-center ">

                                <div className="col">
                                  <i className="fab  opaque fa-facebook white"  style={{ margin:2 }}></i>
                                </div>
                                <div className="col">
                                  <i className="fab  opaque fa-twitter white"  style={{ margin:2 }}></i>
                                </div>
                                <div className="col">
                                  <i className="fab  opaque fa-linkedin white"  style={{ margin:2 }}></i>
                                </div>
                                <div className="col">
                                  <i className="fab  opaque fa-instagram white"  style={{ margin:2 }}></i>
                                </div>
                                <div className="col">
                                  <i className="fab  opaque fa-youtube white"  style={{ margin:2 }}></i>
                                </div>

                                <div className="col">
                                  <i className="fab  opaque fa-medium white"  style={{ margin:2 }}></i>
                                </div>
                                <div className="col">
                                  <i className="fab  opaque fa-bitcoin white"  style={{ margin:2 }}></i>
                                </div>
                                <div className="col">
                                  <i className="fab  opaque fa-github white"  style={{ margin:2 }}></i>
                                </div>
                                <div className="col">
                                  <i className="fab  opaque fa-slack white"  style={{ margin:2 }}></i>
                                </div>
                                <div className="col">
                                  <i className="fab  opaque fa-telegram white"  style={{ margin:2 }}></i>
                                </div>

                            </div>
                          </div>


                    </div>
                </div>
        </div>
        <p className="mb-15 mt-15 col-12 text-center white">Copyright © 2018 NovaMining Ltd - All rights reserved</p>

    </div>


  </div>
)
