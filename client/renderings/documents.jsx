import React from 'react';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';

const articles = window["rss"]
console.log(articles)
export const Documentation = ({match}) => {

          return(


          <section className="row no-gutters d-flex justify-content-center alternative contain" id="documents" >
              <div className="col-12">

                <p className="green col-12 text-center upcase p  mb-50" >Overview on</p>
                <h1 className="col-12 text-center upcase mb-50">Documents & <strong>Media</strong></h1>

                <div className="row no-gutters d-flex justify-content-center animated fadeInDown">
                <button className="radius col-auto col-sm-4 col-md-2  bgreen white  bordergreen light f15 upcase vhb" style={{padding:10 , margin:15 , minWidth:170 }}><i className="fab fa-file-pdf fa " style={{marginRight:5}}></i>Get Whitepaper</button>
                <button className="radius col-auto col-sm-4 col-md-2  bgreen white  bordergreen light f15 upcase vhb" style={{padding:10 , margin:15 , minWidth:170 }}><i className="fab fa-file-pdf fa " style={{marginRight:5}}></i>Get Whitepaper</button>
                <button className="radius col-auto col-sm-4 col-md-2  bgreen white  bordergreen light f15 upcase vhb" style={{padding:10 , margin:15 , minWidth:170 }}><i className="fab fa-file-pdf fa " style={{marginRight:5}}></i>Get Whitepaper</button>
                <button className="radius col-auto col-sm-4 col-md-2  bgreen white  bordergreen light f15 upcase vhb" style={{padding:10 , margin:15 , minWidth:170 }}><i className="fab fa-file-pdf fa " style={{marginRight:5}}></i>Get Whitepaper</button>
                <button className="radius col-auto col-sm-4 col-md-2  bgreen white  bordergreen light f15 upcase vhb" style={{padding:10 , margin:15 , minWidth:170 }}><i className="fab fa-file-pdf fa " style={{marginRight:5}}></i>Get Whitepaper</button>
                <button className="radius col-auto col-sm-4 col-md-2 bgreen white  bordergreen light f15 upcase vhb" style={{padding:10 , margin:15 , minWidth:170 }}><i className="fab fa-file-pdf fa " style={{marginRight:5}}></i>Get Whitepaper</button>
                <button className="radius col-auto col-sm-4 col-md-2 bgreen white  bordergreen light f15 upcase vhb" style={{padding:10 , margin:15 , minWidth:170 }}><i className="fab fa-file-pdf fa " style={{marginRight:5}}></i>Get Whitepaper</button>
                <button className="radius col-auto col-sm-4 col-md-2 bgreen white  bordergreen light f15 upcase vhb" style={{padding:10 , margin:15 , minWidth:170 }}><i className="fab fa-file-pdf fa " style={{marginRight:5}}></i>Get Whitepaper</button>
                <button className="radius col-auto col-sm-4 col-md-2 bgreen white  bordergreen light f15 upcase vhb" style={{padding:10 , margin:15 , minWidth:170 }}><i className="fab fa-file-pdf fa " style={{marginRight:5}}></i>Get Whitepaper</button>
                <button className="radius col-auto col-sm-4 col-md-2 bgreen white  bordergreen light f15 upcase vhb" style={{padding:10 , margin:15 , minWidth:170 }}><i className="fab fa-file-pdf fa " style={{marginRight:5}}></i>Get Whitepaper</button>
                </div>



            </div>

            <div className="col-12 h-100">

            <section className="row no-gutters d-flex">

            <p className="green col-12 text-center upcase p  mb-50" >Our laters on</p>
            <h1 className="col-12 text-center upcase mb-50">Media & <strong>Press</strong></h1>
                  <div className="col-12">
                    <div className="row no-gutters">

                        {

                          articles.map(article =>{
                            let text = article.date;
                              let point = text.search('2018')
                                let date = text.slice(0 , [point + 4])

                                return(
                                  <div className="col-12 col-sm-4 mb-50  " key={article.id} onClick={()=> window.open(article.url)}>
                                    <div className="row no-gutters d-flex animated fadeInUp justify-content-center text-left ">
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
            </div>
          </section>
        )
      };
