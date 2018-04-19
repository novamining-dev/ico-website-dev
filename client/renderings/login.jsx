import React , { Component } from 'react';
import { BrowserRouter as Router, Switch , Link, Route , Redirect} from 'react-router-dom';
const logo = '/images/Logo_1.png';

export default class Login extends React.Component{

  constructor(props){
    super(props);

      this.state ={
        password:''
      }
   }

   componentWillMount(){
     console.log(this.props.match)
     console.log('auth')
     const auth = localStorage.getItem('hasAccess?');
     auth === 'true' ? window.location.href="/" : console.log('false')
     console.log(auth)
   }

   handleSubmit(e){
     var change = {}
       change[e.target.name] = e.target.value
         this.setState(change)
   }
   redirect(){
     localStorage.setItem('hasAccess?',true)
     window.location.href="/";
   }
   forLogin(e){
     e.preventDefault();
     this.state.password === 'N0=Va-M1NinG19'? this.redirect() : console.log('no')

   }
  render(){
    return(
<Router>

        <div className="container-fluid" id="access">
            <div className="row no-gutters d-flex h-75">

          <img src={logo} className="icon animated  fadeInLeft col-auto" alt="logo" />


          <Switch>

          <Route exact path={`${this.props.match.path}`} render={()=>
              <div className="col-12 text-center">
                <div className="row no-gutters d-flex align-self-start align-items-center h-50 justify-content-center">

                    <Link to={`${this.props.match.path}/login`} className="col-3 text-center mont bold ">PreSale User</Link>
                    <div className="w-100"></div>
                    <Link to={`${this.props.match.path}/login`} className="col-3 text-center mont bold ">First Time Login</Link>
                </div>
            </div>
          }/>

              <Route  path={`${this.props.match.url}/login`}  render={()=>
                  <div className="col-12 text-center align-self-start">

                    <div className="row no-gutters d-flex align-items-center h-100 justify-content-center">
                        <form  className="col-6 col-sm-5 col-md-3 text-center" >
                          <label className="col-12">
                              <input type="text" className="col-12 text-center" placeholder="Password" name="password" onChange={(e) => this.handleSubmit(e)}/>
                              <button className="col-12 text-center" onClick={(e) => this.forLogin(e) }>Enter</button>
                          </label>
                        </form>
                    </div>
                </div>
            }/>

      </Switch>


              </div>
        </div>
</Router>

    )
  }
}
