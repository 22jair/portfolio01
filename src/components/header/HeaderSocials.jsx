import React from 'react'
import { BsLinkedin, BsGithub, BsYoutube } from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' rel="noreferrer" target="_blank"><BsLinkedin/></a>
      <a href='https://github.com' rel="noreferrer" target="_blank"><BsGithub/></a>
      <a href='https://youtube.com' rel="noreferrer" target="_blank"><BsYoutube/></a>
    </div>
  )
}
