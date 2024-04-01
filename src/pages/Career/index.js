import React from 'react'
import Header from '../../component/Header'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='p-0 m-0'>
    <Header />
    <div className='d-flex' style={{height : 50}} />
    <div className='container-fluid mt-5 pt-5 px-5' style={{marginTop : 200}}>
       <p className='' style={{color : 'gray'}}>
      <span className='fw-bold text-dark'>1. Personal Information:</span> <br></br>
        - Full Name: <br />
    - Contact Information: <br />
    - Address:
 <br></br><br></br>

          <span className='fw-bold text-dark'>2. Professional Background: </span> <br></br>
          - Resume/CV: <br />
   - Previous Experience: <br />
   - Certifications/Qualifications:
<br></br><br></br>

          <span className='fw-bold text-dark'>3. Area of Expertise:</span> <br></br>
             - Specify the role you are applying for (Makeup Artist, Dermatologist, Wardrobe Stylist, Nutritionist, Tarot Card Reader, Mental Health Coach, Digital Marketing).
<br></br><br></br>

          <span className='fw-bold text-dark'>4. Makeup Artist/Dermatologist/Wardrobe Stylist/Nutritionist/Tarot Card Reader/Mental Health Coach Specific Questions:</span> <br></br>
          - Share your approach or philosophy in your respective field. <br />
   - Highlight any unique skills or techniques related to your role. <br />
   - Provide examples of successful projects or client interactions. <br />
<br></br><br></br>

          <span className='fw-bold text-dark'>5. Digital Marketing Specific Questions:</span> <br></br>
          - Experience with SEO, SEM, and social media marketing. <br />
   - Examples of successful digital marketing campaigns. <br />
   - Familiarity with analytics tools and metrics. <br />
<br></br><br></br>

          <span className='fw-bold text-dark'>6. Collaboration:</span> <br></br>
          - Describe how you collaborate with other professionals in a team setting.
<br></br><br></br>
<span className='fw-bold text-dark'>7. Continuous Learning:</span> <br></br>
- How do you stay updated on industry trends and advancements in your field?

<br></br><br></br>
<span className='fw-bold text-dark'>8. Client Satisfaction:</span> <br></br>
- Share an experience where you went above and beyond to ensure client satisfaction.


<br></br><br></br>
<span className='fw-bold text-dark'>9.  Handling Challenges:</span> <br></br>
- How do you handle challenging situations or unexpected issues?



<br></br><br></br>
<span className='fw-bold text-dark'>10. Ethical Practices:</span> <br></br>
- How do you ensure ethical practices in your respective profession or in digital marketing strategies?



<br></br><br></br>
<span className='fw-bold text-dark'>11. Digital Marketing Specific Questions:</span> <br></br>
- Familiarity with various digital marketing channels (social media, email, content marketing).
   - Experience with data-driven decision-making in digital marketing.




<br></br><br></br>
<span className='fw-bold text-dark'>12.  References:</span> <br></br>
- Provide contact information for professional references.





<br></br><br></br>
<span className='fw-bold text-dark'>13.  Additional Information:</span> <br></br>
- Any additional information or insights you'd like to share.





<br></br><br></br>
<span className='fw-bold text-dark'>14.  Availability for Interview:</span> <br></br>
- Specify your availability for an interview.






<br></br><br></br>
This questionnaire aims to gather information about your qualifications, approach, and suitability for the respective roles. Thank you for taking the time to provide detailed responses.





<br></br><br></br>

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
          <img src={require('../../assets/images/Facebook.png')} style={{width : 20, marginRight : 10}}/>
          <img src={require('../../assets/images/Insta.png')} style={{width : 20, marginRight : 10}}/>
          <img src={require('../../assets/images/Twitter.png')} style={{width : 20, marginRight : 10}}/>
        </div>
      </div>
  </div>
    </div>
  )
}

export default index
