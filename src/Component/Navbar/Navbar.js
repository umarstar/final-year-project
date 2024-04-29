import React from 'react'
import { Link} from 'react-router-dom'
import './Navbar.scss'
import try3 from '../../img/try3.png'
import { FacebookLogo, InstagramLogo ,TwitterLogo ,PinterestLogo ,List ,X} from '@phosphor-icons/react'



import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import offlogo from '../../img/try3.png'


function Navbar() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (
    <>
        
      
      
      

    {/* Offcanvas-start */}

    <Offcanvas className="offcan"  show={show} onHide={handleClose}>
      <Offcanvas.Header>
          <Offcanvas.Title>
            <div class="logo-main">
            <Link to='' className="logo-otr">
              <img className="logo" src={offlogo} alt="logo"/>
            </Link>
            
          </div>
          </Offcanvas.Title>
          <div className='close-icon-otr' onClick={handleClose}>
            <X  className='close-icon'/>
            </div>
        </Offcanvas.Header>
        <Offcanvas.Body className='off-body'>
        <ul class="menu-ul">
            <li class="menu-li">
              <Link to="/" class="menu-a heading-SB">
                Home
              </Link>
            </li>
            <li class="menu-li">
              <Link to="/FAQPage" class="menu-a heading-SB">
                FAQ
              </Link>
            </li>
            <li class="menu-li">
              <Link to="/ContactPage" class="menu-a heading-SB">
                Contact
              </Link>
            </li>
            <li class="menu-li">
              <Link to="/TeamPage" class="menu-a heading-SB">
                Team
              </Link>
            </li>
            <li class="menu-li">
              <Link to="/AboutPage" class="menu-a heading-SB">
                About
              </Link>
            </li>
          </ul>
          <div class="social-otr">
            <p class="heading heading-LB">Follow Us Now</p>
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
        </Offcanvas.Body>
      </Offcanvas>


      {/* off-end */}

    {/* nav main start */}



       <header className="navbar-main ">
      <div className="container-fluid">
        <div className="nav-bar">
          <div className="logo-main">
          <Button variant="primary" className='menu-icon-otr' onClick={handleShow}>
        <List className="menu-icon" />
      </Button>
            <Link to="index.html" className="logo-otr">
              <img className="logo" src={try3} alt="logo"/>
            </Link>
          </div>
          <div className="action-otr">
            <div className="menu-otr">
              <ul className="menu-ul">
                <li className="menu-li">
                  <Link to="/" className="menu-a heading-SB">
                    Home
                  </Link>
                </li>
                <li className="menu-li">
                  <Link to="/FAQPage" className="menu-a heading-SB">
                    FAQ
                  </Link>
                </li>
                <li className="menu-li">
                  <Link to="/ContactPage" className="menu-a heading-SB">
                    Contact
                  </Link>
                </li>
                <li className="menu-li">
                  <Link to="/TeamPage" className="menu-a heading-SB">
                    Team
                  </Link>
                </li>
                <li className="menu-li">
                  <Link to="/AboutPage" className="menu-a heading-SB">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header> 

    {/* end here */}
    </>
  )
}

export default Navbar
