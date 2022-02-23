import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/jennie.jpg'

export const Portfolio = () => {

  const data = [
    { key:'1', title:'This is a portfolio item title', img:IMG1, code_link:'https://github.com', demo_link:'https://youtube.com', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.' },
    { key:'2', title:'This is a portfolio item title', img:IMG1, code_link:'https://github.com', demo_link:'https://youtube.com', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.' },
    { key:'3', title:'This is a portfolio item title', img:IMG1, code_link:'https://github.com', demo_link:'https://youtube.com', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.' },
    { key:'4', title:'This is a portfolio item title', img:IMG1, code_link:'https://github.com', demo_link:'https://youtube.com', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.' },
    { key:'5', title:'This is a portfolio item title', img:IMG1, code_link:'https://github.com', demo_link:'https://youtube.com', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.' },
    { key:'6', title:'This is a portfolio item title', img:IMG1, code_link:'https://github.com', demo_link:'https://youtube.com', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.' }
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        { 
          data.map(item => 
            <article className='portfolio__item' key={item.key}>
              <div className='portfolio__item-image'>
                <img src={item.img} alt="portfolio file" />
              </div>
              <h3>{item.title}</h3>
              <div className='portfolio__item-cta'>
                <a href={item.code_link} className='btn' target="_blank" rel="noreferrer">Github</a>
                <a href={ item.demo_link } className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>
          )
        }
      </div>
    </section>
  )
}
