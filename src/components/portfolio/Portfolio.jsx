import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/P1.png'
import IMG2 from '../../assests/P2.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'TODO LIST APP-- VANILLA JS',
    github: 'https://github.com/jabali04/jabali04.github.io',
    demo: 'https://www.pinterest.es/inmobiliariaolaranozores/colores-oscuros-en-decoraci%C3%B3n/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'POMODORO APP-- REACT JS',
    github: 'https://github.com/jabali04/pomodoro-app',
    demo: 'https://www.pinterest.es/inmobiliariaolaranozores/colores-oscuros-en-decoraci%C3%B3n/'
  },

]




function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          }) 
        }
      </div>
    </section>
  )
}

export default Portfolio



