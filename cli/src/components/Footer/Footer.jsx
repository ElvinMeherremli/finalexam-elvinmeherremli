import React from 'react'
import './Footer.scss'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

import { FaBehance } from "react-icons/fa";

function Footer() {
  return (
    <div className='Footer-sectopm mt-14 pb-10'>
      <div className="container max-w-[1140px]">
        <div className="row">
          <div className="col-12 col-lg-3">
            <img src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div className="col-12 col-lg-3">
            <h2>Quick Links</h2>
            <ul>
              <li>About</li>
              <li>Offers & Discounts</li>
              <li>Get Coupon</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-12 col-lg-3">
            <h2>New Products</h2>
            <ul>
              <li>Woman Cloth</li>
              <li>Fashion Accessories</li>
              <li>Man Accessories</li>
              <li>Rubber made Toys</li>
            </ul>
          </div>
          <div className="col-12 col-lg-3">
            <h2>Support</h2>
            <ul>
              <li>Frequently Asked Questions</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Privacy Policy</li>
              <li>Report a Payment Issue</li>
            </ul>
          </div>
        </div>
        <div className="unit mt-10 flex justify-between h-[100px] items-center">
          <p className='m-[0px]'>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
          <div className="socials flex gap-2">
            <FaTwitter />
            <FaFacebookF />
            <FaBehance />
            <AiOutlineGlobal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer