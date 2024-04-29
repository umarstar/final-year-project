import React from 'react'
import './FAQ.scss'
import Accordion from 'react-bootstrap/Accordion';


function FAQ() {
    const FAQdata=[
        {
            'ekey':0,
            'accHEAD':'In what all cases, Can I avail Free Filing / Do It Yourself plan?',
            'accBODY':'If you have Salary Income, One House Property, Interest from Fixed Deposits or Saving Accounts then you can use Do It Yourself for ITR Filing.'
        },
        {
            'ekey':1,
            'accHEAD':'In what all cases, Can I avail Free Filing / Do It Yourself plan?',
            'accBODY':'If you have Salary Income, One House Property, Interest from Fixed Deposits or Saving Accounts then you can use Do It Yourself for ITR Filing.'
        },
        {
          'ekey':2,
          'accHEAD':'In what all cases, Can I avail Free Filing / Do It Yourself plan?',
          'accBODY':'If you have Salary Income, One House Property, Interest from Fixed Deposits or Saving Accounts then you can use Do It Yourself for ITR Filing.'
      },
      {
        'ekey':3,
        'accHEAD':'In what all cases, Can I avail Free Filing / Do It Yourself plan?',
        'accBODY':'If you have Salary Income, One House Property, Interest from Fixed Deposits or Saving Accounts then you can use Do It Yourself for ITR Filing.'
    },
    {
      'ekey':4,
      'accHEAD':'In what all cases, Can I avail Free Filing / Do It Yourself plan?',
      'accBODY':'If you have Salary Income, One House Property, Interest from Fixed Deposits or Saving Accounts then you can use Do It Yourself for ITR Filing.'
  },
  {
    'ekey':5,
    'accHEAD':'In what all cases, Can I avail Free Filing / Do It Yourself plan?',
    'accBODY':'If you have Salary Income, One House Property, Interest from Fixed Deposits or Saving Accounts then you can use Do It Yourself for ITR Filing.'
}
    ]
  return (
    <div>


  
     <section className="accordian-section">
        <div className="container">
            <div className="row row-custom">
                <div className="accordian-otr col-lg-8">
                <Accordion className="accordion" defaultActiveKey={0}>
                  {FAQdata.map((item,i)=>
                   <Accordion.Item key={i} eventKey={item.ekey} className="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="75" id="accordionExample">
      <Accordion.Header className="accordion-button1 heading-MB">{item.accHEAD}</Accordion.Header>
      <Accordion.Body className="accordion-body heading-M">
        {item.accBODY}
      </Accordion.Body>
                    </Accordion.Item>
                   )}
                    </Accordion>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default FAQ
