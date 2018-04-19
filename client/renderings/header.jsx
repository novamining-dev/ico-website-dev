import React from 'react';

export const Header= (props) => (
  <div className="col-12" >
      <div className="row no-gutters justify-content-center d-flex align-items-center" >
          <div className="col-12 col-sm-12 col-lg-5 animated fadeInLeft  align-self-end " >



              <div className="row no-gutters d-flex justify-content-center homepage" style={{marginBottom:20, marginTop:20}}>

                <h1 className="col-12 text-center   white ">A scalable <span className="bold">Environment</span></h1>
                    <div className="w-100"></div>
                    <h1 className="col-12 text-center   white ">For increasing <span className="bold green">transparence</span></h1>
                    <div className="w-100"></div>
                    <h1 className="col-12 text-center   white ">And <span className="bold green">competitiveness</span> in</h1>
                    <h1 className="col-12 text-center   white ">Cloud mining industry</h1>

                    <button className="button bgreen  bordergreen white  light vhb"><i className="fab fa-file-pdf fa" style={{marginRight:5}}></i>Get Whitepaper</button>
                    <button className="button nobackg bsolidwhite white  light wh"><i className="fab fa-list-alt fa" style={{marginRight:5}}></i>Join Whitelist</button>

              </div>


          </div>

          <div className="col-12 col-sm-12 col-md-7 col-lg-6  align-self-stretch animated radius fadeInRight homepageForm" style={{marginBottom:20, marginTop:20}}>



              <div className="row no-gutters d-flex m-0 p-0 justify-content-center  h-100 m-0 p-0 ">

                <h3 className="col-12 text-center   white f33" style={{marginTop:20}}>Public token pre-sale</h3>
                <h3 className="col-12 text-center   white f25 ">starts from</h3>

                <h4 className="col-12 text-center f33  green bold">May 1, 2018 00:00 GMT+2</h4>

                <div className="countDown col-12">
                    <div className="row no-gutters d-flex justify-content-center">
                          <div className="col-auto">
                          <p className="main col-12 text-center  ">00</p>
                            <p className="col-12 text-center green bold upcase ">days</p>
                          </div>
                          <span>:</span>
                          <div className="col-auto">
                          <p className="main col-12 text-center  ">00</p>
                            <p className="col-12 text-center green bold  upcase">hours</p>
                          </div>
                          <span>:</span>
                          <div className="col-auto">
                          <p className="main col-12 text-center  ">00</p>
                            <p className="col-12 text-center green bold upcase ">minutes</p>
                          </div>
                          <span>:</span>
                          <div className="col-auto">
                            <p className="main col-12 text-center  ">00</p>
                            <p className="col-12 text-center green bold upcase ">seconds</p>
                          </div>
                    </div>
                </div>
                <p className="col-12 text-center   white light upcase f15" style={{marginTop:40}}>Subscribe to receive updates about XNM ICO</p>
                    <form action="" className="col-8">
                      <label htmlFor="" className="col-12 text-center">
                        <input type="text" placeholder="Insert your email address " className="col-12 text-center"/>
                        <button className=" col-12  bgreen bordergreen white    radius light">Subscribe now</button>
                      </label>
                    </form>

              </div>


          </div>

      </div>

      <div className="row no-gutters d-flex mt-50  mb-50">
        <div className="col-12 col-lg-6">
          <div className="row no-gutters">
              <p className="p col-12 text-center f20 white capitalize italic opaque">Join the NovaMining Community NOW!</p>
              <div className="col-12">
                <div className="row no-gutters justify-content-center">

                    <i className="fab fa-2x opaque fa-facebook col-auto white"  style={{height:20 , margin:10 }}></i>
                    <i className="fab fa-2x opaque fa-twitter col-auto white"  style={{height:20 , margin:10}}></i>
                    <i className="fab fa-2x opaque fa-instagram col-auto white"  style={{height:20 , margin:10}}></i>
                    <i className="fab fa-2x opaque fa-youtube col-auto white"  style={{height:20 , margin:10}}></i>
                    <i className="fab fa-2x opaque fa-linkedin col-auto white"  style={{height:20 , margin:10}}></i>
                    <i className="fab fa-2x opaque fa-medium col-auto white"  style={{height:20 , margin:10}}></i>
                    <i className="fab fa-2x opaque fa-bitcoin col-auto white"  style={{height:20 , margin:10}}></i>
                    <i className="fab fa-2x opaque fa-github col-auto white"  style={{height:20 , margin:10}}></i>
                    <i className="fab fa-2x opaque fa-slack col-auto white"  style={{height:20 , margin:10}}></i>
                    <i className="fab fa-2x opaque fa-telegram col-auto white"  style={{height:20 , margin:10}}></i>

                </div>
              </div>
          </div>
        </div>
      </div>
  </div>


  )
