import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

export const Footer = () => {
  return (
    <footer>
      <a href='/#' className='footer__logo' >JAIR</a>
      <ul className='permalinks'>
        <li><a href='/#' >Home</a></li>
        <li><a href='/#about' >About</a></li>
        <li><a href='/#experience' >Experience</a></li>
        <li><a href='/#services' >Services</a></li>
        <li><a href='/#portfolio' >Portfolio</a></li>
        <li><a href='/#testimonials' >Testimonials</a></li>
        <li><a href='/#contact' >Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://www.facebook.com' target="_blank" rel="noreferrer"><FaFacebook/></a>
        <a href='https://www.twettir.com' target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href='https://www.youtube.com' target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Jair Arteaga - All rights reserved.</small>
      </div>
    </footer>
  )
}
