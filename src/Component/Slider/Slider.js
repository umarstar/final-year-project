import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import colony from "../../img/colony1.jpg"
import colony1 from "../../img/colony2-img1.jpg"
import colony2 from "../../img/colony3-img3.jpg"
import colony3 from "../../img/colony3-img4.jpg"
import './Slider.scss'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';


function Slider() {
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
  return (
    <div>
           <section class="slider ">
      <div class="container-fluid">
        
          
          <div class="wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
          <Swiper
          className='swiper-wrapper'
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints= {
        {
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
            }
          }
      }
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

    </section>
      
    </div>
  )
}

export default Slider
