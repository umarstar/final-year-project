import React, { useState} from 'react';
import './Form.scss';
import { Link ,useNavigate} from 'react-router-dom';

function Form() {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [phonenumber, setphone] = useState('');
  const [massage, setmassage] = useState('');
  const [err, seterr] = useState(false);
 const navigate =useNavigate();
//   useEffect(()=>{
//    senddata()
// },[])


  const senddata= async()=>{
    console.log(!firstname);
  if(!firstname || !lastname || !email ||!phonenumber || !massage){
    seterr(true);
    return false
  }
    //  console.log(firstname,lastname,email,phone,massage);
     let result = await fetch("http://localhost:4000/post",{
      method:"post",
            body :JSON.stringify({firstname,lastname,email,phonenumber,massage}),
           headers: {
                "Content-Type":"application/json"
            },
     });
     result =await result.json();
     console.log(result);
     navigate("/");
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
            {err && !firstname && <span className='invalid-input'>Enter Valid FirstName</span>}
          </div>
          <div className="input-otr col-lg-6" >
            <label for="lname" className="label-input body-S">Last Name</label>
            <input className="input-field"  type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)} placeholder="Last Name" required />
            {err && !lastname && <span className='invalid-input'>Enter Valid LastName</span>}

          </div>
          <div className="input-otr col-lg-6" >
            <label for="email" className="label-input body-S">EMail Address Here</label>
            <input className="input-field"  type="text" placeholder="Your Email Address" value={email} onChange={(e)=>setemail(e.target.value)} required />
            {err && !email && <span className='invalid-input'>Enter Valid Email</span>}

          </div>
          <div className="input-otr col-lg-6">
            <label for="phone" className="label-input body-S">Phone Number</label>
            <input className="input-field"  type="text" placeholder="Your Phone Number" value={phonenumber} onChange={(e)=>setphone(e.target.value)} required />
            {err && !phonenumber && <span className='invalid-input'>Enter Valid PhoneNumber</span>}

          </div>
          <div className="input-otr col-lg-12" >
            <label for="message" className="label-input body-S">Message</label>
            <textarea className="txtarea" placeholder="Message Here"  value={massage} onChange={(e)=>setmassage(e.target.value)}></textarea>
            {err && !massage && <span className='invalid-input'>Enter Valid Massage</span>}

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
