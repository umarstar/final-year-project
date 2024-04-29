import React from 'react'
import "./Header.scss"


function Header(props) {
  return (
    <div>
                <div className="otr-header">
                <div className="container">
                <div className="inner-header" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                    <div className="wrapper">
                        <h2 className="heading-H2">{props.name}</h2>
                    </div>
                </div>
                </div>
            </div>
      
    </div>
  )
}

export default Header
