import React from 'react'
import './footer.css'
import {SiVsco} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'




function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>ANDRES RAMIREZ</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://github.com/jabali04"><FaGithub/></a>
        <a href="https://vsco.co/macondiano/"><SiVsco/></a>
        <a href="https://linkedin.com/in/amirezsilva"><BsLinkedin/></a> 
      </div>


    </footer>
  )
}

export default Footer
