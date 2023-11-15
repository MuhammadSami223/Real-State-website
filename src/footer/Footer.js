import React from 'react'
import './Footer.css'
import loogo2 from '../images/logo2.png'
function Footer() {
  return (
    <div>
      <div className="container-footer">
        <div className="left">
            <div className="footer-logo"><img src={loogo2} alt="" /></div>
            <div className="footer-para">Our vision is to make all people
the best place to live for them.</div>
        </div>
      </div>
      <div className="right">
        <div className="footer-information">
            <div className="footer-heading">Information</div>
            <div className="footer-heading2">360 Karachi,Pakistan</div>
            <div className="footer-service">
                <li>property</li>
                <li>Product</li>
                <li>Services</li>
                <li>About Us</li>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
