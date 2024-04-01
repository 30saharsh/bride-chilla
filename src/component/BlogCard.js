import React from 'react'

export default function BlogCard() {
  return (
    <div className='row border-1 border-secondary py-3 px-2 d-flex justify-content-center align-content-center align-items-center' style={{backgroundColor : '#ECECEC', borderRadius : 25, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12'>
        <div style={{color : '#00C5C1', fontSize : 10}} className='fw-bolder mb-3'>October 15 2023</div>
        <span className='fw-bolder' style={{fontSize : 16, lineHeight : 0}}>Unveiling the Bridechilla Experience: Your One-Stop Bridal Consultancy
</span>
        <p className='fw-normal py-2' style={{fontSize : 12, color : '#8F8F8F'}}>Congratulations on your upcoming nuptials! As you embark on this exciting journey towards your special day, we at Bridechilla are thrilled to introduce our revolutionary bridal consultancy services designed to make your wedding preparations a breeze.

A Holistic Approach to Bridal Bliss:
At Bridechilla, we understand that planning a wedding can be overwhelming, with countless decisions to make and details to coordinate. That's why we've curated a team of experts in makeup artistry, dermatology, tarot card reading, and astrology to ensure that every aspect of your wedding is as magical as you've always dreamed.
</p>
        <span className='fw-normal' style={{fontSize : 10,color : 'gray'}}>By Admin</span>
      </div>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12'>
        <img src={require('../assets/images/home.png')}  className='w-100'/>
      </div>
    </div>
  )
}
