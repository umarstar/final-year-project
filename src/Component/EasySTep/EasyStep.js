import React from 'react'
import './EasyStep.scss'

function EasyStep() {
    const easydata =[
        {
            'num':1,
        'estimate':'Click on Estimated Button',
        "delay": "350"
        },
        {
            'num':2,
        'estimate':'Click on Estimated Button',
        "delay": "350"
        },
        {
            'num':3,
        'estimate':'Click on Estimated Button',
        "delay": "350"
        },
        {
            'num':4,
        'estimate':'Click on Estimated Button',
        "delay": "350"
        }
    ]

  return (
    <div>
      <section class="easy-step " id="easy-step">
      <div class="container">
          <div class="row row-custom">
              <div class="col-box1 col-lg-5 col-md-6 col-sm-12">
                 
                  {easydata.map((item,i)=>
                   <div class="col-box1-inr" key={i} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={item.delay}>
                   <div class="number-otr">
                       <h3 class="heading-H3 numbers">{item.num}</h3>
                   </div>
                   <h3 class="heading-H3 heading">{item.estimate}</h3>
               </div>
                      )}
              </div>
              <div class="col-box2 col-lg-5 col-md-5 col-sm-12">
                  <div class="col-inr">
                      <h2 class="heading-H2 box2-heading" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="20">Help for our users</h2>
                  </div>
              </div>
          </div>
      </div>
    </section>
    </div>
  )
}

export default EasyStep
