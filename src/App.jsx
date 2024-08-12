import React from 'react';
import { FaMobileScreen } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdOutlineSms } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { MdIosShare } from "react-icons/md";
import './App.css';


function App() {
 

  return (
    <>
      

      <div className="Container">
        <div className="Mobile-Data" style={{backgroundImage: 'url("/images/bck-ground.jpg")'}} >
        <div className="inner-data">
        <h2 className='name-heading'>John Smith</h2>
          <h3  className='m-m-head'>Web Development</h3>
          <div className="T-l">T <span className='t-ll'>.</span></div>
          <h4 className='m-m-head'>Avicenna Enterprices</h4>

          <div className="divs">
            <div className="div"><FaMobileScreen /></div>
            <div className="div"><CiMail /></div>
            <div className="div"><MdOutlineSms /></div>
            <div className="div"><FaWhatsapp /></div>
          </div>

<div className="About-container">
<br />
  <h2 className='about-h ' >About Me</h2>
  <p className='para'>Hy I am john Working as Web Developer <br /> <span className='para'>At Avicenna Solutions</span></p>
<br /><br />
</div>


<div className="divs">
  <div className="div2"><MdOutlineQrCodeScanner /></div>
  <div className="div2"><MdIosShare /></div>
  <div className="div3">
<div className="txt">
Add to <br />
Confirm
</div>
<div className="blk-btn">
+
</div>
  </div>
</div>
<br />
        </div>
        </div>
      </div>
    </>
  )
}

export default App
