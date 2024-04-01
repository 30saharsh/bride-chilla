import React from 'react'
import Header from '../../component/Header'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='p-0 m-0'>
    <Header />
    <div className='d-flex' style={{height : 50}} />
    <div className='container-fluid mt-5 pt-5 px-5' style={{marginTop : 200}}>
      <span className='fw-bold' style={{fontSize : 22}}>CANCELLATION AND REFUND
</span><br></br><br></br>
       <p className='' style={{color : 'gray'}}>
       
       No refund shall be processed on the payment of any reports under any circumstances if the payment has reached the “processing” stage. The risk and liability of paying in a haste and careless manner totally lies with the User and the Website is not responsible for any refund once the processing stage has started.
No refund shall be processed once the payment has executed. However, if the User intends to cancel a successful payment before execution, the User is required to contact the customer care team within 1 (one) hour of making the payment, whereafter it is totally at the caution of the website whether to issue refund.
Any technical delay or glitch reported in the website during the processing of the request which includes generating reports by the service provider i.e. Experts shall not be eligible for claiming refund. The User agrees that the timelines are approximate and all essentials steps would be taken to adhere to the timelines as displayed.
No refund shall be processed for the reason that in-correct information or data has been provided by You. The User agrees to be careful while providing any information to the website and must re-check the information filled before clicking on “Submit”. The User can request for change in the in-correct information or data entered provided, the request for such change has been made with the customer care within 1 (one hour) of execution of the service provided by the service provider.
The services offered are strictly not meant to replace any philosophical, emotional or medical treatment. The Website holds no responsibility or liability about the reality or reliability of the astrological effects on the human physiology.
No refund shall be processed for providing a wrong contact number for the purpose of availing the “Call with Experts” feature. The User once opted for this feature is advised to keep the Contact Number in full coverage area and must answer the call when received. No refund shall be processed for any call which gets connected.
 <br></br><br></br>
 The refunds, if any, shall be processed after deduction of the transaction charges levied by the Bank and/or the Payment Gateway, any other charges that may have been incurred by the Website during processing and/or delivering the service, as applicable.
In case the Website or Payment gateway’s webpage, that is linked to the Website, is experiencing any server related issues like ‘slow down’ or ‘failure’ or ‘session timeout’, the User shall, before initiating the second payment, check whether his/her Bank Account has been debited or not and accordingly resort to one of the following options:
In case the Bank Account appears to be debited, ensure that you do not make the payment twice and immediately thereafter contact the Website via customer care to confirm payment.
In case the Bank Account is not debited, the User may initiate a fresh transaction to make payment.
However, refund for multiple payment, if any, even after the above precaution against the same shall be refunded in full without deduction of the transaction charges as mentioned above.

Bridechilla quality audit team, at best effort basis, provide partial/full refunds to the users in their Bridechilla wallet wherever consultant’s quality parameters are not satisfied. It can take upto 72 hours to analyse and refund the amount back to Bridechilla wallet.

Note: All refunds will be credited to user’s Bridechilla wallet.
Refunds will only be considered in the following cases:
Network issue due to which chat/call was affected in between or there was a weak signal, background noise, inaudible consultant etc during the video/normal call sessions
Consultant is unable to respond fluently in the language mentioned in their profile
Consultant is taking inordinately long enough to respond back to the user
Consultant has responded back in irrelevant or inappropriate response to the query asked by the user
Please Note: No refund will be given in case of lack of accuracy of any consultation. Bridechilla takes no responsibility for factual accuracy on any consultations. <br></br><br></br>

       </p>
    </div>
    <div className='w-100 row p-4'>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12'>
        <Link className='fw-normal me-2' href="#" style={{textDecoration : 'none', color : 'black'}}>Home</Link>
        <Link className='fw-normal me-2' href="/about-us" style={{textDecoration : 'none', color : 'black'}}>About Us</Link>
        <Link className='fw-normal me-2' href="#" style={{textDecoration : 'none', color : 'black'}}>Services</Link>
        <Link className='fw-normal me-2' href="#" style={{textDecoration : 'none', color : 'black'}}>Blogs</Link>
        <Link className='fw-normal me-2' href="#" style={{textDecoration : 'none', color : 'black'}}>Career</Link>
        <Link className='fw-normal me-2' href="/contact-us" style={{textDecoration : 'none', color : 'black'}}>Contact Us</Link>
      </div>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12'>
        <div className='float-end'> 
        <a style={{textDecoration:"none" , color:"black" , margin:"10px"}} href="/cancel">Cancellation Process</a>
          <a style={{textDecoration:"none" , color:"black" , margin:"10px"}}  href="/payment">Payment Breakups</a>
          <a style={{textDecoration:"none" , color:"black" , margin:"20px"}}  href="/pp">Privacy Policy</a>
           <Link href=""><img src={require('../../assets/images/Facebook.png')} style={{width : 20, marginRight : 10}}/></Link> 
           <a href="https://www.instagram.com/bridechillaofficial?igsh=MWF5bXhpN3d6ZTgxNw%3D%3D&utm_source=qr"><img src={require('../../assets/images/Insta.png')} style={{width : 20, marginRight : 10}}/></a>  
           <a href="https://www.instagram.com/bridechillaofficial?igsh=MWF5bXhpN3d6ZTgxNw%3D%3D&utm_source=qr"> <img src={require('../../assets/images/Twitter.png')} style={{width : 20, marginRight : 10}}/></a>
        </div>
      </div>
  </div>
    </div>
  )
}

export default index
