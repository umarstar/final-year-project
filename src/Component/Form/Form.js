import React, { useState} from 'react';
import './Form.scss';
import { Link } from 'react-router-dom';

function Form() {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [phonenumber, setphone] = useState('');
  const [massage, setmassage] = useState('');

//   useEffect(()=>{
//    senddata()
// },[])


const apiUrl = 'https://backaend-final-year-project.vercel.app';

  const senddata= async()=>{
    //  console.log(firstname,lastname,email,phone,massage);
     let result = await fetch(`${apiUrl}/post`,{
      method:"post",
            body :JSON.stringify({firstname,lastname,email,phonenumber,massage}),
           headers: {
                "Content-Type":"application/json"
            },
     });
     result =await result.json();
     console.log(result);
     localStorage.setItem("user" ,JSON.stringify(result));
  }

  return (
    <>
      
   


    
<section className="contact">
    <div className="container-fluid">
      <h2 className="headimg-main" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Get in Touch</h2>
    <div className="row row-custom"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150" >
          <div className='form-inr col-lg-7 row'>
          <div className="input-otr col-lg-6" >
            <label for="fname" className="label-input body-S">First Name</label>
            <input className="input-field"  value={firstname} onChange={(e)=>setfirstname(e.target.value)} type="text" placeholder="First Name" required />
          </div>
          <div className="input-otr col-lg-6" >
            <label for="lname" className="label-input body-S">Last Name</label>
            <input className="input-field"  type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)} placeholder="Last Name" required />
          </div>
          <div className="input-otr col-lg-6" >
            <label for="email" className="label-input body-S">EMail Address Here</label>
            <input className="input-field"  type="text" placeholder="Your Email Address" value={email} onChange={(e)=>setemail(e.target.value)} required />
          </div>
          <div className="input-otr col-lg-6">
            <label for="phone" className="label-input body-S">Phone Number</label>
            <input className="input-field"  type="text" placeholder="Your Phone Number" value={phonenumber} onChange={(e)=>setphone(e.target.value)} required />
          </div>
          <div className="input-otr col-lg-12" >
            <label for="message" className="label-input body-S">Message</label>
            <textarea className="txtarea" placeholder="Message Here"  value={massage} onChange={(e)=>setmassage(e.target.value)}></textarea>
          </div>
          <div className="col-lg-4 mx-auto action-otr" >
            <Link className="btn-1 send-btn primary-btn" onClick={senddata}>submit</Link>
        </div>
          </div>
    </div>
    </div>
  </section>




    </>
  )
}

export default Form
