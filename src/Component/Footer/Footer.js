import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import try3 from '../../img/try3.png'
import { FacebookLogo, InstagramLogo ,TwitterLogo ,PinterestLogo ,MapPin ,Phone ,EnvelopeSimple} from '@phosphor-icons/react'

function Footer() {
  return (
    <div>
      
      <footer className="footer">
      <div className="container-fluid">
          <div className="row row-custom">
              <div className="col-lg-4 col-md-6 col-sm-6 col-logo-otr" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                  <div className="col-logo-inr">
                      <Link href="index.html" className="logo-otr">
                        <img className="logo" src={try3} alt="logo"/>
                      </Link>
                      <p className="heading-LB desc">
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </p>
                      <div className="winner-otr">
                          <p className="heading heading-MB">Today’s Winner</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-navigation-otr" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                  <div className="col-navigation-inr">
                      <p className="heading heading-LB">Navigation</p>
                      <ul className="navigation-ul">
                          <li className="navigation-li">
                            <Link to="/" className="navigation-a heading-MB">
                              Home
                            </Link>
                          </li>
                          <li className="navigation-li">
                             <Link to="/FAQPage" className="navigation-a heading-MB">
                                 FAQ
                             </Link>
                             
                          </li>
                          <li className="navigation-li">
                            <Link to="/ContactPage" className="navigation-a heading-MB">
                                 Contact
                            </Link>
                              
                          </li>
                          <li className="navigation-li">
                            <Link to="/TeamPage" className="navigation-a heading-MB">
                                Team
                            </Link>
                              
                          </li>
                          <li className="navigation-li">
                            <Link to="/AboutPage" className="navigation-a heading-MB">
                                About
                            </Link>
                             
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-address-otr" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
                  <div className="col-address-inr">
                      <h6 className="heading-LB heading">Contact</h6>
                      <ul className="address-ul">
                          <li className="address-li">
                              <div className="address-div">
                              <MapPin className="icon" />
                                  <p className="heading-MB text">
                                      136 Harding Ave Wheeling, West Virginia
                                  </p>
                              </div>
                          </li>
                          <li className="address-li">
                              <Link href="tel:00 (62) 632 867 4497" className="address-a">
                              <Phone className="icon" />
                                  <p className="heading-MB text">00 (62) 632 867 4497</p>
                              </Link>
                          </li>
                          <li className="address-li">
                              <Link href="mailto: Info@gmail.com" className="address-a">
                              <EnvelopeSimple className="icon" />
                                  <p className="heading-MB text">Info@gmail.com</p>
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-social-otr" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="col-social-inr">
                      <p className="heading heading-LB">Follow us now</p>
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
                      <div id="google_translate_element" className="translator-style"></div>
                  </div>
              </div>
          </div>
      </div>
      <div className="copy-right">
          <div className="container-fluid">
              <div className="wrapper">
                  <p className="copy-text heading-s">
                      Copyright © 2022.All Rights Reserved By 
                      <Link href="index.html" className="text-inr heading-sb">GAMING</Link>
                  </p>
                  <div className="privacy-terms-otr">
                      <Link href="/pages/privacy-policy.html" className="linkk1 heading-s">Privacy Policy</Link>
                      <p className="dot heading-sb">.</p>
                      <Link href="/pages/terms-conditions.html" className="linkk1 heading-s">Terms & Conditions</Link>
                  </div>
              </div>
          </div>
      </div>
  </footer>
    </div>
  )
}

export default Footer
