import React from 'react';
import { Link } from 'react-router-dom'


export const Container = (props) => (

  <section className="row no-gutters d-flex justify-content-center" style={{background:`url(${props.image})`}}>
      <div className="col-12 intraContainer mt-50 mb-50">
          <div className="row text-center no-gutters d-flex justify-content-center">

              <div className="col-4 intraIcon mt-50 mb-50">
              <i className={props.classes}  style={{height:60  }}></i>
              </div>

                  <div className="w-100"></div>

            <p className="col-12 preTitle upcase light mt-50">{props.preTitle}</p>
              <h3 className="intra title col-12 upcase light mb-50 ">{props.title} <span className="normal">{props.postTitle}</span></h3>
                <p className="col-10 light mt-50">{props.paragraph}</p>
                  <p className="col-12 developer light mb-50">
                  {props.developer ?
                  'Are you a developer? Check the source code on GitHub' : props.invite } </p>
                    <Link className={["col-auto button upcase mt-50 " + props.hover]} to={props.linking} style={{padding:'5px 10px'}}><i className={props.buttonIcon}  style={{height:20 , marginRight:5 }}></i>
                    {props.button}</Link>

          </div>
      </div>
  </section>
)
