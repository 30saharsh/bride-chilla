import React from 'react'
import Header from '../../component/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import BlogCard from '../../component/BlogCard'
import TestCard from '../../component/TestCard'
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../utitlity/helper'
import "../Home/Home.css"


export default function Index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [width, height] = useWindowSize();
  return (
    <div className='p-0 m-0'>
      <Header />
      <div className='container-fluid mt-5 pt-5' style={{marginTop : 140}}>
         <div className='row' >
           <div className='col-sm-12 col-xs-12 col-md-8 col-lg-7 col-8'>
            <div class="my-5 py-5 align-items-center h-100 mx-5 w-100">
                <img src={require('../../assets/images/bad.png')} alt="Sub Heading" style={{display : 'block', width : width < 600 ?  '130%' :'90%'}} />

               <div className='my-3 d-flex'>
                    <button className='border-0 p-0 m-0' style={{backgroundColor : 'transparent'}}>
                        <img src={require('../../assets/images/android.png')} width={width < 600 ? '70%': '80%'}/>
                    </button>
                    <button className='border-0' style={{backgroundColor : 'transparent'}}>
                        <img src={require('../../assets/images/apple.png')}  width={width < 600 ? '70%': '80%'}/>
                    </button>
               </div>
            </div>
           </div>
           <div className='col-xs-12 col-sm-12 col-md-4 col-xl-5 ' style={{position : 'relative'}}>
             <img src={require('../../assets/images/bride.png')} width={'100%'} alt='Lady'/>
             <div style={{position :'absolute', top : '18%', left : -30}}>
                 <img src={require('../../assets/images/star.png')} style={{ zIndex : 999, width : 35, height : 35}}/>
             </div>
             <div style={{position :'absolute', bottom : '28%', left : -10}}>
                 <img src={require('../../assets/images/star3.png')} style={{ zIndex : 999, width : 20, height : 20}}/>
             </div>

             <div style={{position :'absolute', top : '38%', right : 0}}>
                 <img src={require('../../assets/images/star3.png')} style={{ zIndex : 999, width : 20, height : 20}}/>
             </div>
           </div>
         </div>
      </div>

      <div className='w-100 h-100'>
        <img src={require('../../assets/images/order-green.png')} className='w-100'/>
      </div>

      <div className='row m-sm-2 m-xs-2 m-md-5 m-lg-5 m-lg-5 m-3'>
        <div className='col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7'>
           <span style={{color : '#00C5C1', letterSpacing : 2, fontSize : 50}} className='fw-bolder'>About us</span>
           <div className='fw-bold my-4' style={{fontSize : width < 600 ? 22 : 28, letterSpacing : 3, lineHeight : 1}}>Join Us on the Journey to Self-Care and Self-Expression</div>
           <p style={{fontSize : 12, color : '#AFAFAF'}} className='my-3'>Welcome to Bridechilla, where the pursuit of well-being meets the artistry of self-expression. Our mission is to unite a diverse team of dedicated experts, all focused on enhancing your overall wellness and ensuring you look and feel your absolute best. With Bridechilla, you gain direct access to a curated selection of top-notch professionals spanning various fields, right at your fingertips. <br></br><br></br>

            Discover a world where self-care and self-expression converge seamlessly. We've crafted a platform that not only prioritizes your well-being but also connects you with skilled professionals capable of transforming your unique vision into reality. Whether you're seeking beauty transformations, skincare guidance, nutritional expertise, mental well-being support, mystical insights, or a wardrobe makeover, Bridechilla is your gateway to a personalized and enriching experience. <br></br><br></br>

            Our commitment is to make self-care and expert guidance accessible to everyone, providing a space where your individuality is celebrated. Embark on a journey with Bridechilla, where the fusion of expertise and personalized care ensures that you shine from the inside out. <br></br><br></br>

            Join us in celebrating the art of being your most vibrant, confident, and authentic self. Bridechilla - Where Well-Being Meets Self-Expression. <br></br><br></br>

            </p>
        </div>
        <div className='col-sm-12 col-xs-12 col-md-5 col-lg-5 col-xl-5'>
           <div className='d-flex justify-content-between align-content-center align-items-center w-100 px-sm-0 px-xs-0 px-md-5 px-lg-5 px-xl-5 py-xs-4 py-sm-4 py-md-5 py-lg-5 py-xl-5'>
             <span style={{fontSize : width < 600 ? 28 : 34, color : '#00C5C1'}} className='fw-bold'>10+</span>
             <span style={{fontSize : width < 600 ? 18 : 24, color : '#00C5C1'}} className='fw-bold'>Year Of Experience</span>
             <span style={{fontSize : width < 600 ? 18 : 24, color : '#00C5C1'}} className='fw-bold'><FontAwesomeIcon icon={faAngleRight} /></span>
           </div>

           <div className='d-flex justify-content-between align-content-center align-items-center w-100 px-sm-0 px-xs-0 px-md-5 px-lg-5 px-xl-5 py-xs-4 py-sm-4 py-md-5 py-lg-5 py-xl-5'>
             <span style={{fontSize : width < 600 ? 28 : 34, color : '#00C5C1'}} className='fw-bold'>18K+</span>
             <span style={{fontSize : width < 600 ? 18 : 24, color : '#00C5C1'}} className='fw-bold'>Happy Users</span>
             <span style={{fontSize : width < 600 ? 18 : 24, color : '#00C5C1'}} className='fw-bold'><FontAwesomeIcon icon={faAngleRight} /></span>
           </div>

           <div style={{backgroundColor : '#00C5C1', borderRadius : 30}} className='my-xs-4 my-sm-4 my-md-5 my-lg-5 my-xl-5 my-5 mx-xs-0 mx-sm-0 mx-md-4 mx-lg-4 mx-xl-4'>
            <div className='d-flex justify-content-between align-content-center align-items-center w-100 px-sm-0 px-xs-0 px-md-4 px-lg-4 px-xl-4 px-2 py-2'>
                <span style={{fontSize : width < 600 ? 28 : 34, color : '#FFFFFF'}} className='fw-bold'>18K+</span>
                <span style={{fontSize : width < 600 ? 18 : 24, color : '#FFFFFF'}} className='fw-bold'>Happy Users</span>
                <span style={{fontSize : width < 600 ? 18 : 24, color : '#FFFFFF'}} className='fw-bold'><FontAwesomeIcon icon={faAngleDown} /></span>
            </div>
            <p style={{color : '#FFFFFF', fontSize : 10, lineHeight : 1.5}} className='px-4 pb-4'>
            Our paramount goal is ensuring unparalleled client happiness through a diverse array of services. From the artistic touch of our makeup artist to the transformative care of our dermatologist, the style expertise of our wardrobe stylist, and the well-being focus of our nutritionist – each facet is meticulously crafted to bring joy. The mystical insights of our tarot card reader and the empathetic support from our mental health coach complete the circle, fostering not just external radiance but inner contentment. We are dedicated to making every client's experience a harmonious journey, ensuring they emerge not only beautifully adorned but genuinely happy.
            </p>
           </div>
        </div>
      </div>

      <div className='p-4' style={{backgroundColor : '#00C5C1'}}>
        <div className='text-center fw-bold text-white' style={{fontSize : 40}}>Who We Are</div>
        <p className='mx-sm-3 mx-sm-3 mx-md-5 mx-lg-5 mx-xl-5 mx-3 px-xs-2 px-xs-2 px-md-5 mx-lg-5 px-lx-5 px-2 mt-4 mb-2 text-xs-left text-sm-left text-lg-center text-md-center text-xl-center text-start text-white' style={{fontSize : 12}}>
        In the month of September, our founder, Divya Chaudhary, a fervent and skilled makeup artist, embarked on a transformative journey. Fueled by passion and a desire to enhance the bridal experience, Divya diligently researched and expanded her vision. <br></br>
        <br></br>

        The result is a curated array of services, including a dermatologist for radiant skin, a wardrobe stylist for impeccable ensembles, a nutritionist for holistic well-being, a tarot card reader for mystical insights, and a mental health coach for emotional support. Under Divya's guidance, we are committed to weaving together expertise and care, ensuring that each client's journey is not just beautiful but profoundly joyful.<br></br><br></br>
        </p>
      </div>

      <div className='center'>
        <h1 className="a" >Featured Services</h1>
        <div className='main' >
<div className="up">
  <div className="card">
    <h3 style={{color:"#fff" , textAlign:"left"}} >01 Makeup Artist</h3>
    <p >Makeup Artist engages in a thorough exploration of the bride's face, delving into the intricacies of her unique features. With a keen understanding of face shape and structure, the artist expertly assesses the canvas, identifying key focal points and contours. Through this insightful analysis, tailored recommendations unfold, guiding the bride on the most flattering makeup choices for her distinct facial attributes. Whether it's enhancing cheekbones, defining eyes, or achieving a radiant complexion, the consultation becomes a collaborative journey where the artist imparts valuable insights, ensuring the bride feels</p>
  </div>
  <div className="card" >
    <h3 style={{color:"#fff" , textAlign:"left"}} >02 Dermatologist</h3>
    <p >In the personalized consultation with the Dermatologist, the focus extends beyond skincare—it becomes a dedicated exploration of the bride's unique skin characteristics. The dermatologist meticulously examines the skin's texture, tone, and any specific concerns the bride may have. Through this comprehensive analysis, tailored skincare recommendations emerge, addressing not only immediate concerns but also ensuring long-term skin health. The consultation becomes a collaborative dialogue, with the dermatologist providing valuable insights on a personalized skincare regimen. Read More</p>
  </div>
  <div className="card">
    <h3 style={{color:"#fff" , textAlign:"left"}} >03 Nutritionist</h3>
    <p >In the tailored consultation with the Nutritionist, the bride's journey towards a radiant and healthy glow takes center stage. The nutritionist dives into a thorough discussion, understanding the bride's dietary preferences, lifestyle, and any specific health objectives. Through this insightful conversation, a personalized and sustainable diet plan unfolds, carefully curated to support not just physical health but also skin vibrancy and overall well-being. The nutritionist imparts valuable guidance on nourishing foods, hydration strategies, and lifestyle adjustments, ensuring that the bride's dietary choices align with her aspirations for a radiant appearance on her special day. This collaborative effort becomes a transformative experience, setting the foundation for not only a beautiful wedding but a continued journey of wellness.</p>
  </div>


</div>
<div className="down">
<div className="card">
    <h3 style={{color:"#fff" , textAlign:"left"}} >04 Mental Health Coach </h3>
    <p >In the empathetic consultation with the Mental Health Coach, the focus shifts to the bride's emotional well-being, recognizing the significance of mental health on her overall wedding experience. The mental health coach engages in a compassionate dialogue, exploring the bride's emotions, stressors, and aspirations. Together, they navigate through strategies to manage pre-wedding jitters, set realistic expectations, and cultivate a positive mindset. The consultation becomes a safe space for the bride to express her feelings and receive practical tools for emotional resilience. From mindfulness techniques to personalized coping strategies, the mental health coach ensures the bride embarks on her wedding journey not only looking radiant but feeling emotionally empowered, ready to embrace the joy and challenges that come with this momentous occasion.</p>
  </div>
  <div className="card">
    <h3 style={{color:"#fff" , textAlign:"left"}} >05 Tarot Card Reader</h3>
    <p >In the enchanting consultation with the Tarot Card Reader, the bride embarks on a mystical exploration of her journey towards matrimony. The tarot card reader creates a sacred space, inviting the bride to share her hopes and dreams. Through the ancient art of tarot, the reader unveils insights into the bride's path, offering guidance and perspective on the unfolding chapters of her life. The consultation becomes a captivating and introspective experience, blending spiritual wisdom with the bride's personal narrative. The tarot card reader serves as a gentle guide, providing symbolic interpretations and encouraging reflection, adding a magical dimension to the bride's preparations. This unique and spiritual consultation aims to infuse the bride's wedding journey with a sense of wonder and purpose, ensuring she steps into her new chapter with clarity and inspiration.</p>
  </div>
  <div className="card" >
    <h3 style={{color:"#fff" , textAlign:"left"}} >06 Wardrobe Stylist </h3>
    <p >In the personalized consultation with the Wardrobe Stylist, the bride's journey towards finding the perfect ensemble becomes a collaborative and empowering experience. The wardrobe stylist begins by understanding the bride's body shape, style preferences, and the overall aesthetic she envisions for her wedding day. Through thoughtful dialogue, the stylist offers expert insights into flattering silhouettes, colors, and fabrics that complement the bride's unique features. From showcasing her best assets to ensuring comfort and confidence, the consultation becomes a tailored exploration of outfit ideas that align with the bride's vision. The wardrobe stylist curates a selection of attire options that not only capture the essence of the occasion but also resonate with the bride's personal style, making her feel not just adorned but truly radiant on her special day.</p>
  </div>

</div>


          
        </div>
      </div>

      <div className='p-5'>
        <div className='row  py-4' style={{backgroundColor : '#ECECEC', borderRadius : 50}}>
            <div className='col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-12 text-dark '>
              <div className='d-flex px-xs-1 px-sm-1 mx-md-5 px-lg-5 px-xl-5 px-1 justify-content-between align-content-center align-items-center w-100 '>
                 <span className='fw-bold' style={{fontSize : width < 600 ? 34 : 48}}>Download Our App</span>
                 <img src={require('../../assets/images/barcode.png')}  style={{width : width < 600 ? 120 : 200}}/>
              </div>
              <div className='d-flex p-4 px-5 text-center'>
                <button className='border-0'>
                    <img src={require('../../assets/images/light-android.png')} style={{width : width < 600 ? 100 : 180}}/>
                </button >
                <button className='border-0'>
                    <img src={require('../../assets/images/light-apple.png')} style={{width : width < 600 ? 100 : 180}}/>
                </button>
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-12'>
               <div className='w-100 pe-4'>
                <img src={require('../../assets/images/mobile-hand.png')}  style={{height : width < 600 ? 300 : 400}}/>
               
               </div>
            </div>
        </div>
      </div>

      <div className='p-5'>
        <div style={{color : '#00C5C1', letterSpacing : 2, fontSize : 18}} className='fw-bolder'>EXPLORE</div>
        <div className='fw-bold my-2' style={{fontSize : 28, letterSpacing : 3, lineHeight : 1}} >Our Blogs</div>

        <div className='w-100 mt-5 row'>
          {
            [1,2].map((item, index) => {
              return(
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12 my-2'>
                  <div className='mx-1'>
                  <BlogCard key={index}/>

                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='pt-5 px-5 pb-3'>
        <div style={{color : '#00C5C1', letterSpacing : 2, fontSize : 18}} className='fw-bolder'>TESTIMONIAL</div>
        <div className='fw-bold my-2' style={{fontSize : 28, letterSpacing : 3, lineHeight : 1}} > What Our Clients Say About Us</div>

        <div className='w-100 mt-5 row'>
          {
            [1,2, 3].map((item, index) => {
              return(
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-12 my-2'>
                  <div className='mx-1'>
                  <TestCard key={index}/>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='d-flex'>
        <div className='d-flex justify-content-center align-content-center align-items-center w-100'>
            <FontAwesomeIcon icon={faDotCircle} color={'gray'} size={15} style={{color : 'gray' , marginRight : 5}}/>
            <FontAwesomeIcon icon={faDotCircle} color={'gray'} size={15} style={{color : 'gray', marginRight : 5}}/>
            <FontAwesomeIcon icon={faDotCircle} color={'gray'} size={15} style={{color : 'gray', marginRight : 5}}/>
        </div>
      </div>

      {
        width > 600 &&
        <div className='d-flex' style={{height : 200}}></div>
      }
      

      <div className='p-5 my-5' style={{marginTop : 250}}>
        <div className='row py-4' style={{backgroundColor : '#00C5C1', borderRadius : 50 , height : width < 600 ? 600 : 'auto'}}>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12 text-dark p-4 px-sm-4 px-xs-4 px-md-5 px-lg-5 px-xl-5 px-4' >
              <div className='d-flex px-sm-1 px-xs-1 px-md-5 px-lg-5 px-xl-5 px-1 justify-content-between align-content-center align-items-center w-100 '>
                 <span className='fw-bold' style={{fontSize : width < 600 ? 32 : 48, lineHeight : 1}}>{`Download App \n for free`}</span>
              </div>
              <div className='d-flex p-4 px-sm-1 px-xs-1 px-md-5 px-lg-5 px-xl-5 px-1'>
                <button className='border-0' style={{backgroundColor : '#00C5C1'}}>
                    <img src={require('../../assets/images/black-android.png')} style={{width : 110}}/>
                </button >
                <button className='border-0' style={{backgroundColor : '#00C5C1'}}>
                    <img src={require('../../assets/images/black-apple.png')} style={{width : 110}}/>
                </button>
              </div>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-12' style={{position : 'relative'}}>
               <div className='w-100' style={{position : 'absolute', top : width < 600 ? -92 : -92 , right : -180, bottom : 0}}>
                <img src={require('../../assets/images/mobile2.png')}  style={{height : width < 600  ? 200 : 300}}/>
               </div>
               <div className='w-100 pe-4' style={{position : 'absolute', top : width < 600 ? -192 : -192}}>
                <img src={require('../../assets/images/mobile.png')}  style={{height : width < 600  ? 300 : 400, zIndex : -1}}/>
               </div>
            </div>
        </div>
      </div>

      {/* <div className='d-flex justify-content-between  w-100 px-5 mt-5 pb-3'>
        <div>
          <Link className='fw-normal me-2' href="#" style={{textDecoration : 'none', color : 'black'}}>Home</Link>
          <Link className='fw-normal me-2' href="#" style={{textDecoration : 'none', color : 'black'}}>About Us</Link>
          <Link className='fw-normal me-2' href="#" style={{textDecoration : 'none', color : 'black'}}>Services</Link>
          <Link className='fw-normal me-2' href="#" style={{textDecoration : 'none', color : 'black'}}>Blogs</Link>
          <Link className='fw-normal me-2' href="#" style={{textDecoration : 'none', color : 'black'}}>Career</Link>
          <Link className='fw-normal me-2' href="#" style={{textDecoration : 'none', color : 'black'}}>Contact Us</Link>

        </div>
        <div className='float-end'>
          <img src={require('../../assets/images/Facebook.png')} style={{width : 20, marginRight : 5}}/>
          <img src={require('../../assets/images/Insta.png')} style={{width : 20, marginRight : 5}}/>
          <img src={require('../../assets/images/Twitter.png')} style={{width : 20, marginRight : 5}}/>
        </div>
        
      </div> */}

    <div className='w-100 row p-4'>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12'>
          <a className='fw-normal me-3' href="/" style={{textDecoration : 'none', color : 'black'}}>Home</a>
          <a className='fw-normal me-3' href="/about-us" style={{textDecoration : 'none', color : 'black'}}>About Us</a>
          <a className='fw-normal me-3' href="#" style={{textDecoration : 'none', color : 'black'}}>Services</a>
          <a className='fw-normal me-3' href="/blog" style={{textDecoration : 'none', color : 'black'}}>Blogs</a>
          <a className='fw-normal me-3' href="career" style={{textDecoration : 'none', color : 'black'}}>Career</a>
          <a className='fw-normal me-3' href="/contact-us" style={{textDecoration : 'none', color : 'black'}}>Contact Us</a>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12'>
          <div className='float-end'> 
          <a style={{textDecoration:"none" , color:"black" , margin:"10px"}} href="/cancel">Cancellation Process</a>
          <a style={{textDecoration:"none" , color:"black" , margin:"10px"}}  href="/payment">Payment Breakups</a>
          <a style={{textDecoration:"none" , color:"black" , margin:"20px"}}  href="/pp">Privacy Policy</a>
          <a style={{textDecoration:"none" , color:"black" , margin:"20px"}}  href="/tc">T & C</a>
           <a href=""><img src={require('../../assets/images/Facebook.png')} style={{width : 15, marginRight : 10}}/></a> 
           <a href="https://www.instagram.com/bridechillaofficial?igsh=MWF5bXhpN3d6ZTgxNw%3D%3D&utm_source=qr"><img src={require('../../assets/images/Insta.png')} style={{width : 15, marginRight : 10}}/></a>  
           <a href="https://www.instagram.com/bridechillaofficial?igsh=MWF5bXhpN3d6ZTgxNw%3D%3D&utm_source=qr"> <img src={require('../../assets/images/Twitter.png')} style={{width : 15, marginRight : 10}}/></a>
          </div>
        </div>
    </div>
    </div>
  )
}
