import React from 'react'
import './header.css'
import MainFoto from '../../assets/me.svg'
import { CTA } from './CTA'
import { HeaderSocials } from './HeaderSocials'


export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jair Arteaga</h1>
        <h5 className='text-light'>FullstacK Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={MainFoto} alt='Me' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
