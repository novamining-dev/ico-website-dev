import React from 'react';
import ReactDOM from 'react-dom';

import Header from './destructures/header.jsx'
import Separator from './destructures/separator.jsx';
import Crowdsale from './destructures/crowdsale.jsx'
import Team from './destructures/team.jsx'
import Advisors from './destructures/advisors.jsx'

const logo1 = "/images/Logo_1.png";
const articles =window["rss"] /* [
  {
    id:1,
    title:'novamining',
    url:'https://google.com',
    content: 'content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content '
  },
  {
    id:2,
    title:'novamining',
    url:'https://google.com',
    content: 'content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content '
  },
  {
    id:3,
    title:'novamining',
    url:'https://google.com',
    content: 'content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content '
  }
]
*/
class Index extends React.Component{
  componentDidMount(){
    console.log(articles)
  }
  render(){
    return(

      <div>




        <Header/>

          <Separator text="Recent News"/>

            <div className="col-12">
              <div className="row no-gutters">

                  {

                     articles.map(article => {
                                  return (

                                  <div className="col-12 col-sm-4">
                                    <div className="row no-gutters d-fles justify-content-center" key={article.id}>

                                          <h1 className="col-12 text-center"  >
                                            {article.title}
                                         </h1>
               <p className="col-10 text-center"  style={{  "min-height": '50px', overflow:'hidden' , textOverflow:'ellipsis'}}   dangerouslySetInnerHTML={{__html: article.content}} >
                                     
                                          </p>

                                          <a href={article.url} className="col-12 text-center"  >
                                            Read
                                         </a>

                                    </div>
                                  </div>

                                 )
                                })
                            }
                  </div>
              </div>

            <Crowdsale/>

              <Separator text="How it works"/>

              <Team/>
              <Advisors/>




        {/*         <Footer/>

          */}

          <section className="col-12 d-flex justify-content-center align-self-center" id="footer">

            <div className="row no-gutters d-flex justify-content-center">

                <div className="col-10">
                    <div className="row no-gutters">

                    <div className="col-4 mx-auto " >

                      <img src={logo1} alt="" className="col-12" />

                    </div>

                    <a href="https://www.html.it" target="_blank" className="col-12 text-center">contact@nova.mining</a>

                    <label  className="col-4 mx-auto">
                    <p className="col-12 text-center">Subscribe to the nova newsletter</p>

                      <span className="row no-gutters">
                        <input type="text" placeholder="Your email address" className="col-10 text-center"/>
                        <button className="col-2">Subscribe</button>
                      </span>
                    </label>


                    </div>
                </div>



            </div>

          </section>


      </div>


    )
  }
}

export default Index;
