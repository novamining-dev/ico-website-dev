import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link , Switch , Redirect  } from "react-router-dom";
// import { database } from '../firebase';
// import axios from 'axios';
// import '../css/App.css';
import { Container } from './intracontainer.jsx';
import { Header } from './header.jsx';
import { Team } from './team.jsx';
import { Footer } from './footer.jsx';
import { Timeline } from './timeline.jsx'
// import Slider from 'rc-slider';
const bgblue = '/images/bgblue.jpg';
const bggreen = '/images/bggreen.jpg';
const bgoverview = '/images/bgoverview.jpg';
const bgpurple = '/images/bgpurple.jpg';
const cloud = '/images/cloud.png';
const competitive = '/images/competitive.png';
const dashboard = '/images/icon-dashboard.png';
const decentralized = '/images/decentralized.png';
const distribution = '/images/distribute.png';
const eyes = '/images/eyes.png';
const fair = '/images/fairness.png';
const funds = '/images/funds.png';
const header = '/images/Header_background.png';
const htw = '/images/htw.png';
const logo = '/images/Logo_1.png';
const market = '/images/icon-market.png';
const mediumbg = '/images/bgmedium.jpg';
const pos = '/images/icon-pos.png';
const pohc = '/images/icon-pohc.png';
const smartContract = '/images/icon-smart-contract.png';
const smartWallet = '/images/icon-smart-wallet.png';

// import 'rc-slider/assets/index.css';
// import Select from 'react-select';
// import 'react-select/dist/react-select.css';

const logo1 = "/images/Logo_1.png";
const articles = window["rss"]

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      amount:0,
      change:undefined,
      crypto:'',
      data:undefined,
      date: new Date(),
      dropdown:'none',
      email:'',
      isMenu:false,
      isSubmitActive: false,
      isSubmitable:true,
      name:'',
      selectedOption: '',
    }

  }

  handleChange(e){
    var change = {}
      change[e.target.name] = e.target.value
        this.setState(change)
  }

  handleSelect(selectedOption){
    this.setState({ selectedOption });

  }

  scrollTo(element){
    window.location.href = element;
 }


  componentWillMount(){
    // temporary
    const auth = localStorage.getItem('hasAccess?');
    auth !== 'true' ? window.location.href="/Auth" : console.log('false')
    console.log(auth)
    //
  }

  submit(){

    let email = this.state.email;
      var re = email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        console.log(re);
          let addUser = [{
              name: this.state.name,
                email: this.state.email,
                  amount: this.state.amount,
                    conversion: Number(this.state.amount) / this.state.change,
                      date:  this.state.date.toString(),
                  }]

    console.log(addUser);

    // let v = this.state;
    // const submitable = v.amount.length > 0 && v.crypto.lenght > 0 && re!== null && v.email.lenght > 0;
    //   submitable === true ? this.setState({isSubmitable:true}) : null;

            let data = database.ref()
                              .child('ico/landing/whitelist')
                                .push(addUser ,
                                function(error){
                                  if(error){
                                    console.log(error)
                                  }else{
                                    console.log('data has been saved')
                                    return true;
                                  }
                                  return;
                                })

              }

  componentDidMount(){
    console.log(this.props)
    database.ref().on('value' , (snapshot) => {
          console.log(snapshot.val())
        });
        axios.get('https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10').then(
         function(response){
           return response;
         }
      ).then(data =>{
        console.log(data.data[1].price_usd);
        let price = data.data[1].price_usd;
        data.error ? this.setState({error:'error'}) :
        this.setState({ change: price})
          }).catch(error=>{
            console.log(error);
            throw error;
          });
  }


  render() {

        const { selectedOption } = this.state;
      	const value = selectedOption && selectedOption.value;
        const eth = Number(this.state.amount) / this.state.change;
        const steps = this.state.amount < 10000 ? 500 : this.state.amount < 50000 ? 1000 : 5000;

    return (
    <Router>

      <div className="container-fluid p-0 m-0" >


                  <div className="col-12 mobileMenu h-100 d-sm-none'" style={{display:this.state.isMenu ? 'block' : 'none'}}>
                    <div className="row no-gutters align-self-center align-items-center h-50 d-flex justify-content-center">
                      <div className="col-10">
                        <div className="row no-gutters">
                          <button className="col-12 text-center">Home</button>
                          <button className="col-12 text-center">Team</button>
                          <button className="col-12 text-center">Join</button>
                        </div>
                      </div>
                    </div>
                  </div>

            <header className="row no-gutters d-flex" >
                <div className="col-12" style={{backgroundImage:`url(${header})` , backgroundSize:'cover' , backgroundPosition:'left center' , backgroundRepeat:'no-repeat', height:'100%'}}>
                    <div className="row no-gutters d-flex">
                    <div className="col-12 animated fadeInDown" id="navbar" style={{height:'20vh' , position:'absolute' , zIndex:200}}>

                      <div className="row no-gutters d-flex justify-content-center">
                        <div className="col-12 col-lg-10">
                          <div className="row no-gutters justify-content-center">


                          <img src={logo} className="App-logo animated  fadeInLeft col-4 col-sm-3 col-md-3 mr-auto"  alt="logo" />
                          <button className="col-auto animated fadeInRight col-2 ml-auto d-sm-none align-self-center navbutton" onClick={() => this.setState({isMenu: true})}>Menù</button>


                              <div className="d-none d-sm-block col-sm-auto ml-auto text-left" style={{minHeight:150 , minWidth:'40vw' }} >

                                  <div className="row no-gutters d-flex animated h-100 fadeInRight justify-content-end  ">

                                  <div className="col-auto">
                                    <button className="hoverable upcase col-auto " onClick={() => this.scrollTo('#Overview') }>Xnm ico</button>
                                  </div>
                                  <div className="col-auto">
                                    <button className="hoverable upcase col-auto " onClick={() => this.scrollTo('#Project') }>Project</button>
                                  </div>
                                  <div className="col-auto">
                                   <button className="hoverable upcase col-auto " onClick={() => this.scrollTo('#Roadmap') }>Roadmap</button>
                                   </div>
                                  <div className="col-auto">
                                    <button className="hoverable upcase col-auto " onClick={() => this.scrollTo('#Team') }>Team</button>
                                  </div>

                                  <div className="col-auto dropdown" style={{maxWidth:120}}>
                                      <div className="row no-gutters m-0 p-0">
                                       <button className=" upcase col-12 " onClick={() => this.setState({dropdown: this.state.dropdown === 'documents' ? '' : 'documents'})}>Contact Us</button>
                                        <div className="col-12">
                                            <div className="row no-gutters droppables animate fadeInUp" style={{display:this.state.dropdown === 'documents' ? 'block' : 'none' }}>
                                            <button className=" upcase col-12 m-0 " onClick={() => this.scrollTo('#Support') }>Whitepaper</button>
                                            <button className=" upcase col-12 m-0 " onClick={() => this.scrollTo('#Support') }>Lightpaper</button>
                                            <button className=" upcase col-12 m-0 " onClick={() => this.scrollTo('#Support') }>Greenpaper</button>
                                            <button className=" upcase col-12 m-0" onClick={() => this.scrollTo('#Support') }>Medium</button>
                                          </div>
                                        </div>
                                       </div>
                                    </div>

                                  <div className="col-auto">
                                    <button className="hoverable upcase col-auto " onClick={() => this.scrollTo('#Faqs') }>Faqs</button>
                                  </div>

                                    <div className="col-auto dropdown" style={{maxWidth:120}}>
                                      <div className="row no-gutters m-0 p-0">
                                       <button className=" upcase col-12 " onClick={() => this.setState({dropdown: this.state.dropdown === 'contacts' ? '' : 'contacts'})}>Contact Us</button>
                                        <div className="col-12">
                                            <div className="row no-gutters droppables animate fadeInUp" style={{display:this.state.dropdown === 'contacts' ? 'block' : 'none' }}>
                                            <button className=" upcase col-12 m-0 " onClick={() => this.scrollTo('#Support') }>Facebook</button>
                                            <button className=" upcase col-12 m-0 " onClick={() => this.scrollTo('#Support') }>Linkedin</button>
                                            <button className=" upcase col-12 m-0 " onClick={() => this.scrollTo('#Support') }>Twitter</button>
                                            <button className=" upcase col-12 m-0" onClick={() => this.scrollTo('#Support') }>Medium</button>
                                          </div>
                                        </div>
                                       </div>
                                    </div>

                                  </div>
                                
                              </div>


                          </div>
                        </div>


                      </div>
                    </div>

                    <div className="col-12  " style={{minHeight:'80vh' , marginTop:'20vh'}}>

                      <div className="row no-gutters d-flex  justify-content-center">

                          <div className="col-12 text-center">



                                <Header />



                          </div>
                      </div>

                    </div>
                    </div>
                </div>

            </header>

              <section className="row no-gutters d-flex justify-content-center about alternative contain" id="Overview">

                  <div className="col-10 h-100 mt-50 mb-50">

                        <p className="green col-12 text-center upcase p mt-50 mb-0" >Overview on</p>
                        <h1 className="col-12 text-center m-0">XNM TOKEN</h1>

                        <div className="row no-gutters d-flex justify-content-center m-0 h-100" id="about">
                            <div className="col-11 col-sm-12  paper h-100">
                              <div className="row no-gutters d-flex justify-content-center mission h-100" style={{marginTop:50 , marginBottom:50}}>

                              <div className="col-8 col-md-6 col-lg-4 " >
                                  <img src={cloud} alt="" className="col-12"/>
                              </div>

                                  <div className=" col-12 col-md-6 align-self-center align-items-center " >

                                    <div className="proportioned  p-0 row no-gutters ">



                                        <p className="col-12 col-md-10 text-center f16 text-sm-left paragraph light">
                                          The XNM token is born to maximize the <span className="green italic">hashrate liquidity</span> in the mining industry, contributing the <span className="green italic">decentralization</span> of the network.
                                        </p>

                                        <p className="col-12 col-md-10 text-center f16 text-sm-left paragraph light">
                                          It introduces a new protocol which can be used by pools to create cloud mining smart contracts, increasing <span className="green italic">transparency</span> and <span className="green italic">competitiveness</span> between the pools, preventing frauds and information asimmetries.
                                        </p>

                                        <p className="col-12 col-md-10 text-center f16 text-sm-left paragraph light">
                                          The XNM committed by the parties constitute a <span className="green italic">Proof-of-Stake layer</span> providing the economic incentives for miners and pools to behave in compliance with the cloud mining contracts, allowing this way to achieve even major hashrate liquidity than the traditional mining industry.
                                        </p>



                                    </div>

                                  </div>



                              </div>


                          <div className="row no-gutters  d-flex justify-content-center mt-50 mb-50">
                              <button className="radius col-auto col-lg-3 bgreen white  bordergreen light f15 upcase vhb" style={{padding:10 , margin:15 , minWidth:170 }}><i className="fab fa-file-pdf fa " style={{marginRight:5}}></i>Get Whitepaper</button>
                              <button className="radius col-auto col-lg-3 nobackg  greenhover bordergreen green light upcase f15" style={{ padding:10 , margin:15 , minWidth:170}}><i className="fab fa-list-alt fa" style={{marginRight:5}}></i>Join Whitelist</button>
                          </div>



                            </div>


                        </div>

                  </div>

              </section>

              <Container image={bggreen}
               preTitle="Code verified with"
               title="Security" postTitle="Audit"
               paragraph="XNM Token Smart Contract were audited by an external professional team following the best practices for the common known Solidity vurnerabilities"
               developer={true}
               hover="gh"
               button="Smart Contract"
               classes="fas fa-file-code fa-3x"
               linking="/GitHub"
               buttonIcon="fab fa-github-square fa-2x" altSource="icon"/>

            <section className="row no-gutters d-flex justify-content-center about alternative contain" id="Project">

                  <div className="col-12 col-sm-11 col-md-11 mt-50 h-100">

                        <p className="green col-12 text-center upcase mt-50 p" >In depth analisys</p>
                          <h1 className="col-12 text-center light upcase h1 ">Main <span className="normal">Features</span></h1>

                            <div className="row no-gutters d-flex justify-content-center align-self-center align-items-center features mt-50">

                                <div className="col-10 col-sm-6 col-md-6 col-lg-4 feature m-0 p-0 ">
                                    <div className="row no-gutters d-flex justify-content-center">
                                        <img src={smartContract} style={{height:100}} alt=""/>
                                    </div>
                                  <div className="row no-gutters">
                                    <p className="green col-12 text-center upcase mt-15" >Payouts regulated with </p>
                                      <h2 className="col-12 text-center mb-15  light upcase">Smart Contract</h2>
                                        <p className="col-12 mt-0 text-center" style={{marginBottom:60}}>The payouts, will be splitted directly by the<br/>contract itself, every shareholder will receive<br/> payouts in proportion to their contract shares.</p>
                                  </div>

                                </div>

                                <div className="col-10 col-sm-6 col-md-6 col-lg-4 feature m-0 p-0 ">
                                    <div className="row no-gutters d-flex justify-content-center">
                                        <img src={smartWallet} style={{height:100}} alt=""/>
                                    </div>
                                  <div className="row no-gutters">
                                    <p className="green col-12 text-center upcase f-16" >Easy management with</p>
                                      <h2 className="col-12 text-center mb-15 light upcase">Smart Wallet</h2>
                                        <p className="col-12 mt-0 text-center" style={{marginBottom:60}}>Contracts can be easily managed with the<br/>open-source <span className="bold italic">Smart Wallet App</span> directly<br/>on your Computer, Smartphone or Tablet.</p>
                                  </div>
                                </div>

                                <div className="col-10 col-sm-6 col-md-6 col-lg-4 feature m-0 p-0 ">
                                    <div className="row no-gutters d-flex justify-content-center">
                                        <img src={market} style={{height:100}} alt=""/>
                                    </div>

                                  <div className="row no-gutters">
                                    <p className="green col-12 text-center upcase f-16" >Buy and sell contracts on the</p>
                                      <h2 className="col-12 text-center mb-15 light upcase">Smart Contract Market</h2>
                                        <p className="col-12 mt-0 text-center" style={{marginBottom:60}}>Mining contracts can be easily buyed or selled <br/>on the <span className="bold italic">Smart Contract Market.</span><br/>Even if brand new or near to be expired.</p>
                                  </div>
                                </div>

                                <div className="col-10 col-sm-6 col-md-6 col-lg-4 feature m-0 p-0 ">
                                    <div className="row no-gutters d-flex justify-content-center">
                                        <img src={pos} style={{height:100}} alt=""/>
                                    </div>
                                    <div className="row no-gutters">

                                        <p className="green col-12 text-center upcase f-16" >Funds secured with</p>
                                        <h2 className="col-12 text-center mb-15 light upcase">Proof-of-stake</h2>
                                        <p className="col-12 mt-0 text-center" style={{marginBottom:60}}>Every operator which adopts XNM protocol<br/>should deposit XNM as escrow in proportion<br/>to its own reputation rank on XNM platform.</p>

                                    </div>
                                </div>

                                <div className="col-10 col-sm-6 col-md-6 col-lg-4 feature m-0 p-0 ">
                                    <div className="row no-gutters d-flex justify-content-center">
                                        <img src={pohc} style={{height:100}} alt=""/>
                                    </div>

                                    <div className="row no-gutters">

                                      <p className="green col-12 text-center upcase f-16" >Commitment verified with</p>
                                        <h2 className="col-12 text-center mb-15 light upcase">Proof-of-hashrate</h2>

                                          <p className="col-12 mt-0 text-center" style={{marginBottom:60}}>Thanks to the open-source Merkle-Tree based<br/><span className="bold italic">Proof-of-Hashrate-Commitment</span> everyone<br/>will be able to prove the correct hashpower.</p>

                                    </div>
                                  </div>

                                <div className="col-10 col-sm-6 col-md-6 col-lg-4 feature m-0 p-0 ">
                                    <div className="row no-gutters d-flex justify-content-center">
                                        <img src={dashboard} style={{height:100}} alt=""/>
                                    </div>
                                  <div className="row no-gutters">
                                    <p className="green col-12 text-center upcase f-16" >Easy reporting check with</p>
                                      <h2 className="col-12 text-center mb-15 light upcase">Chain report dashboard</h2>
                                        <p className="col-12 mt-0 text-center" style={{marginBottom:60}}>Every reporting data will be always<br/>available through API and the open-source<br/>tool <span className="bold italic">Chain Report Dashboard</span></p>
                                  </div>
                                </div>

                            </div>

                  </div>


              </section>

            <section className="row no-gutters d-flex justify-content-center" id="benefits" style={{background:`url(${bgpurple})`}}>

              <p className="col-12 text-center light white p opaque upcase mt-50">Overview on</p>
              <h3 className="col-12 text-center light white h1 upcase mb-50 ">Main <span className="normal">Benefits</span></h3>



              <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-50 mt-50">


                  <div className="row no-gutters d-flex justify-content-center">
                    <div className="col-auto">
                    <div className="row no-gutters d-flex justify-content-center">
                        <img src={competitive} style={{height:40 , margin:5}} alt=""/>
                    </div>
                    </div>
                    <div className="col-9 ">
                      <div className="row no-gutters">
                        <p className="col-12 text-left opaque light upcase white">Increase Mining Industry</p>
                          <h4 className="col-12 text-left normal upcase white m-0">Competitiveness</h4>
                              <p className="col-12 text-left light white m-0">The adoption of XNM protocol<br/>by pool and data center will<br/>increase the competitiveness.</p>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-50 mt-50">


                  <div className="row no-gutters d-flex justify-content-center">
                    <div className="col-auto">
                    <div className="row no-gutters d-flex justify-content-center">
                        <img src={eyes} style={{height:23 , margin:5}} alt=""/>
                    </div>
                    </div>
                    <div className="col-9 ">
                      <div className="row no-gutters">
                        <p className="col-12 text-left opaque light upcase white">Adds a new layer of</p>
                        <h4 className="col-12 text-left normal upcase white m-0">Transparence</h4>
                              <p className="col-12 text-left light white m-0">XNM allows high level of<br/>transparency in pool<br/>signaling and rewards.</p>
                      </div>
                    </div>
                  </div>
              </div>


              <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-50 mt-50">


                  <div className="row no-gutters d-flex justify-content-center">
                    <div className="col-auto">
                    <div className="row no-gutters d-flex justify-content-center">
                        <img src={decentralized} style={{height:40 , margin:5}} alt=""/>
                    </div>
                    </div>
                    <div className="col-9 m-0 p-0 ">
                      <div className="row no-gutters">
                        <p className="col-12 text-left opaque light upcase f white">Helps improving networks</p>
                        <h4 className="col-12 text-left normal upcase white m-0">Decentralization</h4>
                        <p className="col-12 text-left light white m-0">XNM will help the various nets<br/>to improve their decentralization<br/>and consequentially their security.</p>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-50 mt-50">


                  <div className="row no-gutters d-flex justify-content-center">
                    <div className="col-auto">
                    <div className="row no-gutters d-flex justify-content-center">
                        <img src={fair} style={{height:40 , margin:5}} alt=""/>
                    </div>
                    </div>
                    <div className="col-9 ">
                      <div className="row no-gutters">
                        <p className="col-12 text-left opaque light upcase white">Brings back</p>
                          <h4 className="col-12 text-left normal upcase white m-0">Fairness</h4>
                              <p className="col-12 text-left light white m-0">XNM allows high level of<br/>transparency in pool<br/>signaling and rewards.</p>
                      </div>
                    </div>
                  </div>
              </div>

            </section>


          <section className="row no-gutters d-flex justify-content-center alternative contain" >
              <p className="lnh green col-12 text-center upcase light  mt-50">Xnm protocol in depth</p>
                <h3 className="col-12 text-center upcase light">How it <span className="normal">Works</span></h3>
                  <div className="col-10 col-md-4">
                      <div className="row no-gutters ">
                          <div className="col-12 mb-50 mt-50 ">


                              <div className="row no-gutters d-flex justify-content-center align-self-stretch">
                                <div className="col-auto p-0 m-0">
                                <div className="row no-gutters h-100 p-0 m-0">
                                    <p className="f55 lnh violet" >1</p>
                                </div>
                                </div>
                                <div className="col-9 ">
                                  <div className="row no-gutters ">
                                    <p className="col-12 text-center text-md-left opaque light upcase violet m-0 p-0">Users buy</p>
                                      <h4 className="col-12 text-center text-md-left normal upcase lnh  ">Xnm Token</h4>
                                          <p className="col-12 text-center text-md-left light lnh f16">In the ICO or from other users in the Market (XNM will be available on the market after the ICO)</p>
                                  </div>
                                </div>
                              </div>
                          </div>

                          <div className="col-12  mb-50 mt-50">


                              <div className="row no-gutters d-flex justify-content-center align-self-stretch">
                                <div className="col-auto p-0 m-0">
                                  <div className="row no-gutters h-100 p-0 m-0">
                                      <p className="f55 lnh violet" >3</p>
                                  </div>
                                </div>
                                <div className="col-9 ">
                                  <div className="row no-gutters ">
                                    <p className="col-12 text-center text-md-left opaque light upcase violet m-0 p-0">Users locks their xnm</p>
                                      <h4 className="col-12 text-center text-md-left normal upcase lnh ">on the contract</h4>
                                          <p className="col-12 text-center text-md-left light lnh f16">In a new form to borrow cloud mining<br/>hashrate offer from an operator</p>
                                  </div>
                                </div>
                              </div>
                          </div>

                          <div className="col-12  mb-50 mt-50">


                              <div className="row no-gutters d-flex justify-content-center align-self-stretch">
                                <div className="col-auto p-0 m-0">
                                <div className="row no-gutters h-100 p-0 m-0">
                                    <p className="f55 lnh violet" >5</p>
                                </div>
                                </div>
                                <div className="col-9 ">
                                  <div className="row no-gutters ">
                                    <p className="col-12 text-center text-md-left opaque light upcase violet m-0 p-0">Users get their</p>
                                      <h4 className="col-12 text-center text-md-left normal upcase lnh ">Block Rewards</h4>
                                          <p className="col-12 text-center text-md-left light lnh f16">Each user earns a quota according to<br/>how many XNM he ransferred on the<br/>total number of XNM settled in the<br/>hasrate offer of the operator</p>
                                  </div>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-10 col-md-4 mt-50 mb-50 p-0">
                    <div className="row no-gutters d-flex justify-content-end h-100">
                        <img src={htw} alt="" className="col-10 align-self-center"/>
                    </div>
                  </div>

                  <div className="col-10 col-md-4">
                      <div className="row no-gutters">
                          <div className="col-12 mt-50 mb-50">


                              <div className="row no-gutters d-flex justify-content-center align-self-stretch">

                                <div className="col-9 ">
                                  <div className="row no-gutters ">
                                    <p className="col-12 text-center text-md-right opaque light upcase green m-0 p-0">Operators creates</p>
                                      <h4 className="col-12 text-center text-md-right normal upcase lnh ">Smart Contract</h4>
                                          <p className="col-12 text-center text-md-right light lnh f16">With a public <strong>hashrate offer</strong><br/>for a deetermined number of<br/>XNM to finance mining-ops</p>
                                  </div>
                                </div>

                                <div className="col-auto p-0 m-0">
                                <div className="row no-gutters h-100 p-0 m-0">
                                    <p className="f55 lnh green" >2</p>
                                </div>
                                </div>
                              </div>
                          </div>

                          <div className="col-12  mb-50 mt-50">


                              <div className="row no-gutters d-flex justify-content-center align-self-stretch">

                                <div className="col-9 ">
                                  <div className="row no-gutters ">
                                    <p className="col-12 text-center text-md-right opaque light upcase green m-0 p-0">Operators unlocks their xnm</p>
                                      <h4 className="col-12 text-center text-md-right normal upcase lnh ">on the contract</h4>
                                          <p className="col-12 text-center text-md-right light lnh f16">In the Smart Contract gradually<br/>once they proof hashing and payouts</p>
                                  </div>
                                </div>
                                <div className="col-auto p-0 m-0">
                                <div className="row no-gutters h-100 p-0 m-0">
                                    <p className="f55 lnh green" >4</p>
                                </div>
                                </div>
                              </div>
                          </div>

                          <div className="col-12  mb-50 mt-50">


                              <div className="row no-gutters d-flex justify-content-center align-self-stretch">

                                <div className="col-9 ">
                                  <div className="row no-gutters ">
                                    <p className="col-12 text-center text-md-right opaque light upcase green m-0 p-0">Upon contract</p>
                                      <h4 className="col-12 text-center text-md-right normal upcase lnh ">Expires</h4>
                                          <p className="col-12 text-center text-md-right light lnh f16">The Operator will be allowed by the<br/>Smart Contract to take the remain <br/>XNM funds on it. Each contract is<br/>valid until the last XNM is unlocked</p>
                                  </div>
                                </div>
                                <div className="col-auto p-0 m-0">
                                <div className="row no-gutters h-100 p-0 m-0">
                                    <p className="f55 lnh green" >6</p>
                                </div>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
            </section>

            <Container image={bggreen}
             preTitle="Don't trust, verify with"
             title="Proof of" postTitle="Hashrate Commitment"
             paragraph="With the open-source Merkle-Tree based Proof-of-Hashrate-Commitment everyone will be able to prove if an operator is giving the correct haspower to their own customers or pool workers."
             developer={true}
             button="Hashing proof"
             hover="gh"
             linking="/GitHub"
             classes="fas fa-shield-alt fa-3x"
             buttonIcon="fab fa-github-square fa-2x" altSource="icon"/>

          <section className="row no-gutters d-flex align-items-center justify-content-center text-center backgrounding" style={{minHeight:'100vh', padding:10 ,background:`url(${bgoverview})`}}>

            <div className="col-12">

              <div className="row no-gutters d-flex justify-content-center">

                <div className="col-11 col-md-6" style={{marginRight:2 }}>

                  <div className="col-12 box">
                      <div className="row no-gutters d-flex justify-content-center ">
                          <h5 className="col-12 text-center light white upcase mt-15">Ico <span className="normal">Overview</span></h5>

                          <div className="col-12 col-sm-6 ">
                            <div className="row no-gutters  p-0 white">
                              <p className="col-12 text-sm-left text-center  upcase light m-0">Public Pre-sale</p>
                              <p className="col-12 text-sm-left text-center  upcase normal m-0">May 1,2018 00:00 GMT+2</p>
                              <p className="col-12 text-sm-left text-center  upcase normal m-0">May 31,2018 23:59 GMT+2</p>

                              <p className="col-12 text-sm-left text-center  upcase light mt-15 mb-0">Soft-cap</p>
                              <p className="col-12 text-sm-left text-center  upcase normal m-0">3,000,000 USD</p>

                              <p className="col-12 text-sm-left text-center  upcase light mt-15 mb-0">Token sale volume</p>
                              <p className="col-12 text-sm-left text-center  upcase normal m-0">42,600,000 XNM</p>


                            </div>
                          </div>


                          <div className="col-12 col-sm-6">

                            <div className="row no-gutters d-flex justify-content-end p-0 white">

                                <div className="col-md-auto col-12">

                                    <p className="col-12 text-sm-left text-center  upcase light m-0">Ico token sale</p>

                                    <p className="col-12 text-sm-left text-center  upcase normal m-0">July 1,2018 00:00 GMT+2</p>

                                    <p className="col-12 text-sm-left text-center  upcase normal m-0">July 31,2018 23:59 GMT+2</p>


                                    <p className="col-12 text-sm-left text-center  upcase light mt-15 mb-0">Hard Cap</p>

                                    <p className="col-12 text-sm-left text-center  upcase normal m-0">60,000,000 USD</p>

                                    <p className="col-12 text-sm-left text-center  upcase light mt-15 mb-0">Total Token Volume</p>
                                    <p className="col-12 text-sm-left text-center  upcase normal m-0">60,000,000 XNM</p>
                                </div>
                            </div>
                          </div>

                          <p className="col-12 text-sm-left text-center  upcase white light"><i>(Unsold token will be distributed in airdrop)</i></p>

                          <div className="col-12">
                            <div className="row no-gutters  p-0 white">
                              <p className="col-12 text-sm-left text-center  upcase light m-0">Token price at issue</p>
                              <p className="col-12 text-sm-left text-center  upcase normal m-0">0,27 usd equivalent of btc or eth</p>


                              <p className="col-12 text-sm-left text-center  upcase light italic mt-15 mb-0"><i>Price increases nearly</i></p>
                              <p className="col-12 text-sm-left text-center  upcase light italic m-0"><i>when a new target is reached</i></p>

                              <p className="col-12 text-sm-left text-center  upcase light mt-15 mb-0">Accepted forms of payment</p>
                              <p className="col-12 text-sm-left text-center  upcase normal m-0">BTC,ETH</p>

                              <p className="col-12 text-sm-left text-center  upcase light mt-15 mb-0">Minimum token purchase</p>
                              <p className="col-12 text-sm-left text-center light m-0">Public pre-sale <span className="normal upcase">10,000 usd</span> equivalent of <span className="normal upcase">BTC</span> or <span className="normal upcase">Eth</span></p>
                              <p className="col-12 text-sm-left text-center light m-0">ICO token sale <span className="normal upcase">500 usd</span> equivalent of <span className="normal upcase">BTC</span> or <span className="normal upcase">Eth</span></p>

                              <p className="col-12 text-sm-left text-center  upcase light mt-15 mb-0">Exchanges quotation</p>
                              <p className="col-12 text-sm-left text-center  upcase normal m-0">Q3 2018</p>

                            </div>
                          </div>




                      </div>
                  </div>

                </div>
                <div className="col-11 col-md-5">
                  <div className="row no-gutters d-flex h-100">

                    <div className="col-12  h-50">
                        <div className="row box no-gutters d-flex  justify-content-center align-items-center h-100">

                        <h5 className="col-12 text-center light white upcase align-self-start mb-0 mt-15">Token <span className="normal">Distribution</span></h5>



                            <div className="col-3 col-sm-4 col-md-3">
                              <img src={distribution} alt="" className="col-10 img-fluid"/>
                            </div>

                            <div className="col-8 tokens ">
                              <div className="row no-gutters d-flex text-left">

                                <div className="col-6">
                                <div className="row no-gutters d-flex justify-content-center">

                                    <p className="col-10 white"><span className="fas fa-icon fa-circle lightblue"></span> 1% Early pre-sale</p>
                                    <p className="col-10 white"><span className="fas fa-icon fa-circle yellow"></span> 57% ICO Token-sale</p>
                                    <p className="col-10 white"><span className="fas fa-icon fa-circle red"></span> 3% Reserves</p>
                                    <p className="col-10 white"><span className="fas fa-icon fa-circle violet"></span> 3% Bounty</p>

                                  </div>
                                </div>

                                <div className="col-6 align-self-center">
                                <div className="row no-gutters d-flex justify-content-center">

                                    <p className="col-10 white"><span className="fas fa-icon fa-circle green"></span> 13% Public Pre-sale</p>
                                    <p className="col-10 white"><span className="fas fa-icon fa-circle orange"></span>10%% Team & Advisors</p>
                                    <p className="col-10 white"><span className="fas fa-icon fa-circle pink"></span> 13% Airdrop</p>

                                  </div>
                                </div>

                              </div>
                            </div>


                        </div>
                    </div>

                    <div className="col-12  h-50">

                      <div className="row box no-gutters align-self-end justify-content-center d-flex h-100 align-items-center" style={{marginTop:1}}>

                      <h5 className="col-12 text-center light white upcase align-self-start mb-0 mt-15">Funds <span className="normal">Allocation</span></h5>




                          <div className="col-8 tokens">
                            <div className="row no-gutters text-left d-flex justify-content-center">

                              <div className="col-6">
                                <div className="row no-gutters d-flex justify-content-center">

                                  <p className="col-10 white"><span className="fas fa-icon fa-circle lightblue"></span> 10% Platform</p>
                                  <p className="col-10 white"><span className="fas fa-icon fa-circle yellow"></span> 15% Infrastructure</p>
                                  <p className="col-10 white"><span className="fas fa-icon fa-circle red"></span> 7% Legal</p>


                                </div>
                              </div>

                              <div className="col-6 align-self-center">
                              <div className="row no-gutters d-flex justify-content-center">

                                  <p className="col-10 white"><span className="fas fa-icon fa-circle green"></span> 35% Hardware</p>
                                  <p className="col-10 white"><span className="fas fa-icon fa-circle orange"></span> 15% Marketing</p>
                                  <p className="col-10 white"><span className="fas fa-icon fa-circle pink"></span> 8% Security</p>

                                </div>
                              </div>

                            </div>
                          </div>

                          <div className="col-3 col-sm-4 col-md-3">

                            <img src={funds} alt="" className="col-10 img-fluid"/>

                          </div>



                      </div>
                    </div>

                  </div>
                </div>

                <div className="col-11 mt-15">
                  <div className="col-12 box" >
                    <div className="row no-gutters">
                      <h5 className="col-12 text-center light white upcase mt-15 " >Airdrops <span className="normal">Distribution</span></h5>
                        <div className="col-6 col-md-3">
                            <div className="row no-gutters">
                                <h6 className="col-12 text-center m-0 p-0 light white upcase">
                                1st round
                                </h6>
                                <p className="col-12 text-center m-0 p-0 normal upcase white">oct 15 2018</p>
                                <h6 className="col-12 text-center m-0 p-0 bold upcase white f55">33%</h6>
                                <p className="col-12 text-center mt-0 mb-15 p-0 light upcase white">To each wallet</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-3">
                            <div className="row no-gutters">
                                <h6 className="col-12 text-center m-0 p-0 light white upcase">
                                2nd round
                                </h6>
                                <p className="col-12 text-center m-0 p-0 normal upcase white">Jan 15 2019</p>
                                <h6 className="col-12 text-center m-0 p-0 bold upcase white f55">50%</h6>
                                <p className="col-12 text-center mt-0 mb-15 p-0 light upcase white">To each wallet</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-3">
                            <div className="row no-gutters">
                                <h6 className="col-12 text-center m-0 p-0 light white upcase">
                                3rd round
                                </h6>
                                <p className="col-12 text-center m-0 p-0 normal upcase white">Mar 31 2019</p>
                                <h6 className="col-12 text-center m-0 p-0 bold upcase white f55">80%</h6>
                                <p className="col-12 text-center mt-0 mb-15 p-0 light upcase white">To each wallet</p>
                            </div>
                        </div>

                        <div className="col-6 col-md-3">
                            <div className="row no-gutters">
                                <h6 className="col-12 text-center m-0 p-0 light white upcase">
                                4th round
                                </h6>
                                <p className="col-12 text-center m-0 p-0 normal upcase white">May 31 2019</p>
                                <h6 className="col-12 text-center m-0 p-0 bold upcase white f55">100%</h6>
                                <p className="col-12 text-center mt-0 mb-15 p-0 light upcase white">To each wallet</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="row no-gutters d-flex justify-content-center bopaque">

              <div className="col-7 col-md-4 mt-50 mb-50">
              <div className="row no-gutters d-flex align-items-center mt-50 mb-50 m-0 p-0 justify-content-center text-center ">
                      <i className="fab fa-5x fa-bitcoin white mb-0 mt-50 opaque"></i>
                      <div className="w-100"></div>
                      <p className="green col-12 f16 light upcase m-0 p-0">More than</p>
                      <p className="white col-12 f30 normal upcase m-0 p-0 opaque">4 billion usd</p>
                      <p className="white col-12 f16 light upcase m-0 p-0 opaque">Global mining-ops</p>
                      <p className="white col-12 f16 light upcase mt-0 mb-50 p-0 opaque">Industry value</p>

                  </div>
              </div>


              <div className="col-7 col-md-4 mt-50 mb-50">
              <div className="row no-gutters d-flex align-items-center mt-50 mb-50 m-0 p-0 justify-content-center text-center ">
                      <i className="fas fa-5x fa-users white mb-0 mt-50 opaque"></i>
                      <div className="w-100"></div>
                      <p className="green col-12 f16 light upcase m-0 p-0">More than</p>
                      <p className="white col-12 f30 normal upcase m-0 p-0 opaque">80k followers</p>
                      <p className="white col-12 f16 light upcase m-0 p-0 opaque">Read about our posts and</p>
                      <p className="white col-12 f16 light upcase mt-0 mb-50 p-0 opaque">updates on social media</p>

                  </div>
              </div>

              <div className="col-7 col-md-4 mt-50 mb-50">
                  <div className="row no-gutters d-flex align-items-center mt-50 mb-50 m-0 p-0 justify-content-center text-center ">
                      <i className="fas fa-5x fa-tasks white mb-0 mt-50 opaque"></i>
                      <div className="w-100"></div>
                      <p className="green col-12 f16 light upcase m-0 p-0">xnm ico it's</p>
                      <p className="white col-12 f30 normal upcase m-0 p-0 opaque">100% compliant</p>
                      <p className="white col-12 f16 light upcase m-0 p-0 opaque">with the kyc,aml,ctf,eidv</p>
                      <p className="white col-12 f16 light upcase mt-0 mb-50 p-0 opaque">International laws</p>

                  </div>
              </div>
          </section>
            <section className="row no-gutters d-flex justify-content-center alternative contain " id="Roadmap">
              <Timeline source={bggreen} />
              </section>

              <Container image={bgblue}
               preTitle="Join our"
               title="Telegram" postTitle="Group"
               paragraph="If you have any question regarding the XNM Project don't hesitate to join us: we will be glad to answer all your questions!"
               developer={false}
               invite="Would you like to chat with our team? Join us on Telegram"
               button="Join our Group"
               hover="ah"
               linking="/telegram"
               classes="fab fa-3x fa-telegram"
               buttonIcon="fab fa-telegram fa-2x" altSource="icon"/>





            <Team/>

            <Container image={mediumbg}
             preTitle="Read our"
             title="Medium" postTitle="Blog"
             paragraph="If you have any interest in keeping yourself updated about the Cryptocurencies and the XNM Project don't forget to follow us on Medium."
             developer={false}
             invite="Would you like to read about latest news and updates? Join us on Medium"
             button="Go to Medium"
             hover="vh"
             linking="/GitHub"
             classes="fab fa-medium fa-3x"
             buttonIcon="fab fa-medium fa-2x" altSource="icon"/>
             
              <section className="alternative contain row no-gutters d-flex">

              <p className="green col-12 text-center upcase p mt-50 mb-0" >Our latest updates on</p>
              <h1 className="col-12 text-center mt-0 mb-50 upcase light">Media & <span className="normal">Press</span></h1>

              <div className="col-12 mt-50 mb-50">
                <div className="row no-gutters">

                    {

                      articles.map(article =>{
                        let text = article.date;
                          let point = text.search('2018')
                            let date = text.slice(0 , [point + 4])

                            return(
                              <div className="col-12 col-sm-4 " key={article.id} onClick={()=> window.open(article.url)}>
                                <div className="row no-gutters d-flex justify-content-center text-left ">
                                  <img src={article.url_image} className=" hoverable col-10 h-75 mb-15"  alt=""/>
                                  <p className="col-10 upcase  hoverable green f15">{date}</p>
                                  <h3 className="col-10  limited hoverable ">{article.title}</h3>
                                  <p className="col-10 limited2 hoverable">{article.content}</p>

                                  </div>
                                  </div>

                                )
                      })
                    }

                </div>
              </div>

              </section>
             <Footer
              source={footerlogo}
             />

      </div>
    </Router>

    );
  }
}
export default Main;

