import React from 'react'
import Contactimage from '../images/contact.jpg'
import'./Contact.css'
function Contact() {
  return (
    <div>
       <div className="value-right" id='Contact'>                    
       <h2 className='contact-heading'>Our Contact Us</h2>
                    <h1 className='contact-heading2'>Easy to contact us</h1>
                    <p className='contact-para'>We always ready to help by providing the best services for you.
    We beleive a good blace to live can make your life better.</p>
    <div className="contact-section">
    <div className="call">
      <div className="call-icon">
      <i className="fa fa-phone icon1" aria-hidden="true"></i>

      <div className="call-detail">
<h3>Call </h3>
<h5>+92 3128935406</h5>

      </div>
      </div>
      <div className="call-btn">Call Now</div>
      </div>
    <div className="call">
      <div className="call-icon">
      <i class="fas fa-comment-dots icon1"></i>
      <div className="call-detail">
<h3>Whatsapp</h3>
<h5>+92 3128935406</h5>

      </div>
      </div>
      <div className="call-btn">Message Now</div>
      </div>
      
    </div>
    <div className="contact-section">
    <div className="call">
      <div className="call-icon">
      <i className="	fas fa-comment-alt icon1" aria-hidden="true"></i>

      <div className="call-detail">
<h3>Message</h3>
<h5>+92 3128935406</h5>

      </div>
      </div>
      <div className="call-btn">Message Now</div>
      </div>
    <div className="call">
      <div className="call-icon">
      <i class="fa fa-envelope icon1" aria-hidden="true"></i>

      <div className="call-detail">
<h3>Gmail</h3>
<h5>+92 3128935406</h5>

      </div>
      </div>
      <div className="call-btn">Mail </div>
      </div>
      
    </div>
    </div>
    <div className="contact-left">
      <div className="contact-image">
<img src={Contactimage} alt="" />
      </div>
      <div className="inner-container"id='Started'>
        <div className="primry-text">Get started with Homyz</div>
        <div className="secondory-text">Subscribe and find super attractive price quotes from us.
Find your residence soon <br />Find your Residence soon</div>
        <div className="btn2">Get Started</div>
      </div>
    </div>
    </div>
  
  )
}

export default Contact
