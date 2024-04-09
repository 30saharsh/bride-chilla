import React from 'react'
import Header from '../../component/Header'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div>
      return (
    <div className='p-0 m-0'>
    <Header />
    <div className='d-flex' style={{height : 50}} />
    <div className='container-fluid mt-5 pt-5 px-5' style={{marginTop : 200}}>
      <span className='fw-bold' style={{fontSize : 22}}>Terms & Conditions:

</span><br></br><br></br>
       <p className='' style={{color : 'gray'}}>
       

       [i] User Agreement : By accessing and using this website you agree to be bound by these terms and condition

 <br></br><br></br>
 [ii] Consultancy Services : This website provides access to consultancy services offered by independent consultants. The consultants are not employees of the app and are solely responsible for the services they provide.
 <br></br><br></br>
[iii] Registration: Users must register an account to access consultancy services. Users agree to provide accurate and complete information during the registration process.

<br /><br />
[iv] User Conduct : Users agree to use the website and its services in accordance with all applicable laws and regulations. Users must not engage in any unlawful, fraudulent, or abusive behavior.

<br /><br />
[v] Consultant Services : Consultants agree to provide services with professionalism and competence. Consultants are responsible for setting their availability, and terms of service.
<br /><br />
[vi] Intellectual Property : Users retain ownership of any content or materials they provide during consultancy sessions. Consultants retain ownership of their proprietary materials and content.
<br /><br />
[vii] Privacy Policy : The website collects and processes personal information in accordance with its Privacy Policy. By using the app, users consent to the collection and use of their personal data as described in the Privacy Policy.

<br /><br />
[viii] Disclaimer of Warranties : The website and its services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. The app disclaims all warranties, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.

<br /><br />
[ix] Limitation of Liability : In no event shall the app or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or in connection with the use of the app or its services.

<br /><br />

[x] Governing Law : These terms and conditions shall be governed by and construed in accordance with the laws of [jurisdiction]. Any disputes arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts of [jurisdiction].


<br /><br />
[xi] Severability : If any provision of these terms and conditions is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.

<br /><br />
By using the consultancy app, users acknowledge that they have read, understood, and agree to abide by these terms and conditions.

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
          <a style={{textDecoration:"none" , color:"black" , margin:"20px"}}  href="/tc">T & C</a>
           <Link href=""><img src={require('../../assets/images/Facebook.png')} style={{width : 20, marginRight : 10}}/></Link> 
           <a href="https://www.instagram.com/bridechillaofficial?igsh=MWF5bXhpN3d6ZTgxNw%3D%3D&utm_source=qr"><img src={require('../../assets/images/Insta.png')} style={{width : 20, marginRight : 10}}/></a>  
           <a href="https://www.instagram.com/bridechillaofficial?igsh=MWF5bXhpN3d6ZTgxNw%3D%3D&utm_source=qr"> <img src={require('../../assets/images/Twitter.png')} style={{width : 20, marginRight : 10}}/></a>
        </div>
      </div>
  </div>
    </div>
  )
    </div>
  )
}

export default index
