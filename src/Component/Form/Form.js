import React from 'react'
import './Form.scss'

function Form() {
 

  return (
    <div>
      
   


    
<section className="contact">
    <div className="container-fluid">
      <h2 className="headimg-main" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Get in Touch</h2>
    <form className="row row-custom" action="mail.php" method="post">
          <div className='form-inr col-lg-7 row'>
          <div className="input-otr col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
            <label for="fname" className="label-input body-S">First Name</label>
            <input className="input-field" name="fname" id="fname" type="text" placeholder="First Name" required />
          </div>
          <div className="input-otr col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <label for="lname" className="label-input body-S">Last Name</label>
            <input className="input-field" name="lname" id="lname" type="text" placeholder="Last Name" required />
          </div>
          <div className="input-otr col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
            <label for="email" className="label-input body-S">EMail Address Here</label>
            <input className="input-field" name="email" id="email" type="text" placeholder="Your Email Address" required />
          </div>
          <div className="input-otr col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <label for="phone" className="label-input body-S">Phone Number</label>
            <input className="input-field" name="phone" id="phone" type="text" placeholder="Your Phone Number" required />
          </div>
          <div className="input-otr col-lg-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
            <label for="message" className="label-input body-S">Message</label>
            <textarea className="txtarea" placeholder="Message Here" ></textarea>
          </div>
          <div className="col-lg-4 mx-auto action-otr" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
            <input className="btn-1 send-btn primary-btn" type="submit" value="SEND MESSAGE"/>
        </div>
          </div>
    </form>
    </div>
  </section>




    </div>
  )
}

export default Form
