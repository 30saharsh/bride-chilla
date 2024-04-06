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
 The pricing policy will offer a flexible consultant rate ranging from 15/- to 150/- Indian rupees per minute.
       </p>
    </div>
    </div>
  )
}

export default index
