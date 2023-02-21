import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/P1.png'
import IMG2 from '../../assests/P2.png'
import IMG3 from '../../assests/P3.png'
import IMG4 from '../../assests/P4.png'
import IMG5 from '../../assests/P5.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'TODO LIST APP',
    github: 'https://github.com/jabali04/jabali04.github.io',
    demo: 'https://jabali04.github.io/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'POMODORO APP',
    github: 'https://github.com/jabali04/pomodoro-app',
    demo: 'https://jabali04.github.io/pomodoro-app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'IMAGE SEARCH APP',
    github: 'https://github.com/jabali04/search-images',
    demo: 'https://jabali04.github.io/search-images/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'READING LIST APP',
    github: 'https://github.com/jabali04/reading-list-app',
    demo: 'https://jabali04.github.io/reading-list-app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'RESPONSIVE SITE',
    github: 'https://github.com/jabali04/responsiveSite',
    demo: 'https://jabali04.github.io/responsiveSite/'
  }
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



