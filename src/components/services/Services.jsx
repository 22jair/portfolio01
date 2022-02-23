import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const firstList = [
  { key: '1', text: 'Lorem, ipsum dolor sit amet consectetur elit.', icon: <BiCheck className='service__list-icon' /> },
  { key: '2', text: 'Lorem, ipsum dolor sit amet consectetur elit.', icon: <BiCheck className='service__list-icon' /> },
  { key: '3', text: 'Lorem, ipsum dolor sit amet consectetur elit.', icon: <BiCheck className='service__list-icon' /> },
  { key: '4', text: 'Lorem, ipsum dolor sit amet consectetur elit.', icon: <BiCheck className='service__list-icon' /> },
  { key: '5', text: 'Lorem, ipsum dolor sit amet consectetur elit.', icon: <BiCheck className='service__list-icon' /> },
  { key: '6', text: 'Lorem, ipsum dolor sit amet consectetur elit.', icon: <BiCheck className='service__list-icon' /> }
]

const secondList = [
  ...firstList,
  { key: '7', text: 'Lorem, ipsum dolor sit amet consectetur elit.', icon: <BiCheck className='service__list-icon' /> },
  { key: '8', text: 'Lorem, ipsum dolor sit amet consectetur elit.', icon: <BiCheck className='service__list-icon' /> }
]

const thirdList = [
  ...firstList,
  { key: '7', text: 'Lorem, ipsum dolor sit amet consectetur elit.', icon: <BiCheck className='service__list-icon' /> },  
]

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>

        <article className='service'> 
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            { firstList.map(item => 
              <li key={item.key}>
                { item.icon }
                <p> { item.text } </p>
              </li>
            ) }            
          </ul>          
        </article>

        <article className='service'> 
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            { secondList.map(item => 
              <li key={item.key}>
                { item.icon }
                <p> { item.text } </p>
              </li>
            ) }            
          </ul>
        </article>
        
        <article className='service'> 
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            { thirdList.map(item => 
              <li key={item.key}>
                { item.icon }
                <p> { item.text } </p>
              </li>
            ) }            
          </ul>
        </article>

      </div>
    </section>
  )
}
