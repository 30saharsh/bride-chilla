import React from 'react'
import Header from '../../component/Header'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='p-0 m-0'>
    <Header />
    <div className='d-flex' style={{height : 50}} />
    <div className='container-fluid mt-5 pt-5 px-5' style={{marginTop : 200}}>
      <span className='fw-bold' style={{fontSize : 22}}>PRIVACY POLICY
</span><br></br><br></br>
       <p className='' style={{color : 'gray'}}>
       The User hereby consents, expresses and agrees that the User has read and fully understand the Privacy Policy of the Website. The User further consents that the terms and contents of such Privacy policy is acceptable to the User inclusive of any update/alteration/change made and duly displayed on the Website.
       </p>
    </div>
    </div>
  )
}

export default index
