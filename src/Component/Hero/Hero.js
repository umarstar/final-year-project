import React from 'react'
import './Here.scss'
import { Link } from 'react-router-dom'
import colony from "../../img/colony1.jpg"
import colony1 from "../../img/colony2-img1.jpg"
import colony2 from "../../img/colony3-img3.jpg"
import colony3 from "../../img/colony3-img4.jpg"


import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';


function Hero() {
  const swidata=[
    {
    'imag' :<img class="img" src={colony1} alt="img"/>

    },
    {
      'imag' :<img class="img" src={colony2} alt="img"/>
  
      },
      {
        'imag' :<img class="img" src={colony3} alt="img"/>
    
        },
        {
          'imag' :<img class="img" src={colony} alt="img"/>
      
          },
          {
            'imag' :<img class="img" src={colony3} alt="img"/>
        
            },
            {
              'imag' :<img class="img" src={colony3} alt="img"/>
          
              },
              {
                'imag' :<img class="img" src={colony} alt="img"/>
            
                },
                {
                  'imag' :<img class="img" src={colony3} alt="img"/>
              
                  },
  ] 
 const params = {
    // Swiper parameters and options
    spaceBetween: 24,
    loop: true,
    speed: 1000,
    slidesPerView: 3,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <div>
       
        {/* hero-section start */}
          <section class="hero-main ">
      <div class="container-fluid">
        <div class="hero-content">
          <h1 class="heading heading-large-h1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
            Estimated Rate
            of  <br/> Your  dream
            Home
          </h1>
          <p class="desc heading-L" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Your dream home price are one click away put your required features and see the estimated  <br/>  price of your dream home. 
          </p>
          <div class="action">
            <Link to="http://127.0.0.1:8000/" class="cta-btn primary-btn" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">For Estimated Rate Click Here</Link>
          </div>
          <div class="wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="20">
          <Swiper
      {...params}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        stopOnLast: false,
      }}
      modules={[Autoplay]}
      class="swiper-wrapper"
    >
      {swidata.map((item,i)=>
      <SwiperSlide key={i} className="swiper-slide">
      <Link href="#" class="img-otr">
        {item.imag}
      </Link>
    </SwiperSlide>
      )
      
      }
    </Swiper>
        </div>
        </div>
      </div>
    </section>
      
    {/* <Swiper
        class="swiper-wrapper"
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="swiper-slide">
        <Link href="#" class="img-otr">
        <img class="img" src={colony} alt="img"/>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
      <Link href="#" class="img-otr">
            <img class="img" src={colony1} alt="img"/>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
      <Link href="#" class="img-otr">
            <img class="img" src={colony2} alt="img"/>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
      <Link href="#" class="img-otr">
            <img class="img" src={colony3} alt="img"/>
        </Link>
      </SwiperSlide>
    </Swiper> */}
      
    </div>
  )
}





export default Hero
