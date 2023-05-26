import React from 'react'
import "./Footer.css"
import { AiFillApple } from "react-icons/ai"
import { FaGooglePlay } from "react-icons/fa"
import { IoMdAppstore } from "react-icons/io"
import { CgMail } from "react-icons/cg"
import img from "../../assets/1.webp"
// import { CiLocationOn } from "react-icons/ci"
import { BsFacebook } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"
import img1 from "../../assets/foo1.jpg"
import img2 from "../../assets/foo2.jpg"
import img3 from "../../assets/foo3.jpg"
import img4 from "../../assets/foo4.jpg"
import img5 from "../../assets/foo5.jpg"
import img6 from "../../assets/foo6.jpg"
import { useLocation } from 'react-router-dom'
function Footer() {

  const {pathname} = useLocation()
  if(pathname.includes("admin")){
    return <></>
  } 

  return (
    <div className='footer'>
      <div className="container">
        <div className="footer__container">
          <div className="footer__top">
            <div className="footer__left">
              <div className="footer_btns">
                {/* <button className='footer__btn'><AiFillApple className='btn__app' />App Story</button>
                <button className='footer__btn'><FaGooglePlay className='btn__play' />Google Play</button>
                <button className='footer__btn'><IoMdAppstore className='btn__gallery' /> AppGallery</button> */}
              </div>
            </div>
            <div className="footer__right">
              {/* <img className='footer__img' src={img} alt="" /> */}
            </div>
          </div>
          <div className='br'></div>
          <div className="footer__middle">
            <div className="footer__right2">
              <div className="footer__alpha">
                <h1 className='nav__logo'>HERMES</h1>
                <p>Phone support</p>
                <p>+998 (91) 352 55 56</p>
                <p>Manzil namangan shaxar taxtako'prik </p>
                <p><CgMail />info@hermes.uz</p>
              </div>
           
            </div>
            <div className="footer__left2">
              
            </div>
          </div>
          <hr />
          <div className="footer__bottom">
            <div className="thee">
              <p>© 2022. LLC "HERMES"</p>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer