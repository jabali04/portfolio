import React from 'react'
import './about.css'
import ME from '../../assests/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FaLanguage} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3 Years Working On The Tech Industry</small>
            </article>
            <article className='about__card'>
              <FaLanguage className='about__icon'/>
              <h5>Bilingual</h5>
              <small>I can communicate fluently in English and Spanish</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>I have worked on different cybersec projects, troubleshooting, scripting and implementations.</small>
            </article>
          </div>
          <p>Security Engineer Linux Enthusiast And Passionate About Frontend Technologies I Am Looking For A New Challenge In My Career As A Member Of A Web Development Team Where I Can Develop My Teamwork And Critical Thinking Skills</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About


