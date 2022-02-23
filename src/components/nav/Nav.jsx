import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const navs = [
  { key:'#', href:"#", icon: <AiOutlineHome />, text: 'Home' },
  { key:'#about', href:"#about", icon: <AiOutlineUser />, text: 'About' },
  { key:'#experience', href:"#experience", icon: <BiBook />, text: 'Experience' },
  { key:'#services', href:"#services", icon: <RiServiceLine />, text: 'Services' },
  { key:'#contact', href:"#contact", icon: <BiMessageSquareDetail />, text: 'Contact' },
]

export const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');
  const isActive = ( path ) => path === activeNav ? 'active' : '';

  return (
    <nav>
      { navs.map( (nav, index) => (
        <a 
          key={nav.key}
          href={`/${nav.href}`}
          className={isActive(nav.href)}
          onClick={()=>setActiveNav(nav.href)}
        >{nav.icon}</a>
      ))}
    </nav>
  )
}
