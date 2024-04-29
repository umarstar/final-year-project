import React from 'react'

import './City.scss'

function City(props) {


  return (
    <div>
          <section className="our-involvment " id="">
      <div className="container-fluid">
      <div className="row row-custom" >
          <div className="col-lg-5 col-content-otr">
              <div className="col-content-inr" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                  <h2 className="heading-H2" >{props.name}</h2>
                  <p className="heading-M" >
                    {props.detail}
                  </p>
              </div>
          </div>
          <div className="col-lg-6 col-img-otr">
              <div className="col-img-inr">
                 <img src={props.image} className='img-sec1' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50" alt=""/>
              </div>
          </div>
      </div>
         
      </div>
  </section>
    </div>
  )
}

export default City
