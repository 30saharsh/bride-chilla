import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index';
import About from './pages/About/index';
import Contact from './pages/Contact/index';
import Career from './pages/Career/index';
import Blog from './pages/Blog/index'
import Cancellation from './pages/Cancellation/index'
import Payment from './pages/Payment/index'
import Privacy from './pages/Privacy/index'
import TermsConditions from './pages/TermsConditions/index'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <div style={{backgroundColor : '#F8F8F8'}} className='m-0 p-0 overflow-hidden'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/career' element={<Career />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/cancel' element={<Cancellation />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/pp' element={<Privacy />} />
        <Route path='/tc' element={<TermsConditions />} />


      </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
