import React from 'react'
import './Team.scss'
import team from '../../img/WhatsApp Image 2023-07-09 at 10.11.44 PM.jpeg'
import team1 from '../../img/team-img.jpg'

import { Link } from 'react-router-dom'
import { FacebookLogo, InstagramLogo ,TwitterLogo ,PinterestLogo} from '@phosphor-icons/react'

function Team() {
    const member=[
        {
            'pic':<img  src={team} className="img-inr1" alt=""/>,
            'delay':"100"
        },
        {
            'pic':<img  src={team1} className="img-inr1" alt=""/>,
            'delay':"250"
        }
    ]
    
  return (
    <div>



    <section className="create">
        <div className="container">
            <div className="wrapper">
                <h4 className="head-h4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                    How to be a creator
                </h4>
                <h2 className="heading-h2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    What we actually do?
                </h2>
            </div>
            <div className="row row-custom1">
                {member.map((item,i)=>
                <div className="creater-ot col-lg-5" key={i} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={item.delay}>
                <span className="img-otr">
                    {item.pic}
                </span>
                <div className="creater-inr">
                    <h3 className="head-h">
                        Setup Your Wallet
                    </h3>
                    <p className="detail">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam est doloremque fugit asperiores odit repellendus corrupti, quis ut ad iure corporis cumque, quam animi? Voluptas id repellat aspernatur, aliquid tenetur consectetur fugiat nobis, eveniet dolores doloremque quis illum mollitia cupiditate.
                    </p>
                    <ul className="social-ul">
                      <li className="social-li">
                          <Link  className="social-a" href="#">
                             <InstagramLogo  className='icon' />
                          </Link>
                      </li>
                      <li className="social-li">
                          <Link  className="social-a" href="#">
                          <FacebookLogo  className='icon' />

                          </Link>
                      </li>
                      <li className="social-li">
                          <Link  className="social-a" href="#">
                          <TwitterLogo  className='icon' />
                          </Link>
                      </li>
                      <li className="social-li">
                          <Link  className="social-a" href="#">
                             <PinterestLogo  className='icon' />
                          </Link>
                      </li>
                  </ul>
                </div>
            </div>
                )}
                {/* <img src="./assets/img/team-img.jpg" class="img-inr" alt=""/> */}

                {/* <div class="creater-otr col-lg-5">
                <span class="img-otr">
                    <img src="./assets/img/team-img.jpg" class="img-inr" alt="">
                </span>
                <div class="creater-inr">
                    <h3 class="head-h3">
                        Setup Your Wallet
                    </h3>
                    <p class="detail">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam est doloremque fugit asperiores odit repellendus corrupti, quis ut ad iure corporis cumque, quam animi? Voluptas id repellat aspernatur, aliquid tenetur consectetur fugiat nobis, eveniet dolores doloremque quis illum mollitia cupiditate.
                    </p>
                    <ul class="social-ul">
                        <li class="social-li">
                            <a  class="social-a" href="#">
                            <i class="ri-instagram-line icon"></i>
                            </a>
                        </li>
                        <li class="social-li">
                            <a  class="social-a" href="#">
                                <i class="ri-facebook-circle-line icon"></i>
                            </a>
                        </li>
                        <li class="social-li">
                            <a  class="social-a" href="#">
                                <i class="ri-twitter-line icon"></i>
                            </a>
                        </li>
                        <li class="social-li">
                            <a  class="social-a" href="#">
                                <i class="ri-pinterest-line icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> */}
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default Team
