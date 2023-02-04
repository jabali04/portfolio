import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiVsco} from 'react-icons/si'

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/amirezsilva" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/jabali04" target="_blank"><FaGithub/></a>
      <a href="https://vsco.co/macondiano/" target="_blank"><SiVsco/></a>
    </div>
  )
}

export default HeaderSocials
