import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>

      <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HyperText Markup Language (HTML)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cascading Style Sheets (CSS)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Design & Mobile-First Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CSS and JS Frameworks</p>
            </li>
          </ul>
        </article>




        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Technical documentation for internal and public reference</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing technical articles so external clients can understand the projects/products I work on</p>
            </li>

          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>Other Skills</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Networking Troubleshooting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Work on Linux enviroments</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Network-Security Troubleshooting</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services


// Technical documentation for internal and public reference.
// Documentation of the case with good details from RCA.
// Track cases, set response times, and document all interactions