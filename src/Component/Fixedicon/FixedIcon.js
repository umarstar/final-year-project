import React from 'react'
import "./FixedIcon.scss"
import { Link } from 'react-router-dom'
import {WhatsappLogo} from '@phosphor-icons/react'

function FixedIcon() {
  return (
    <div>
        <div className="fixed-icons">
      <ul className="icon-ul">
          <li className="icon-li">
              <Link className="icon-otr" to="tel:+3027899450">
              <WhatsappLogo className="icon-inr" />
                  
              </Link>
          </li>
      </ul>
  </div>
    </div>
  )
}

export default FixedIcon
