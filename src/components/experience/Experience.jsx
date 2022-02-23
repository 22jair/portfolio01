import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const frontend = [
  { key:"1", title: 'HTML', text:'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
  { key:"2", title: 'CSS', text:'Intermediate', icon: <BsPatchCheckFill className='experience__details-icon' /> },
  { key:"3", title: 'JavaScript', text:'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
  { key:"4", title: 'Bootstrap', text:'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
  { key:"5", title: 'Tailwind', text:'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
  { key:"6", title: 'React', text:'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
]

const backend = [
  { key:"1", title: 'NodeJs', text:'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
  { key:"2", title: 'Php', text:'Intermediate', icon: <BsPatchCheckFill className='experience__details-icon' /> },
  { key:"3", title: 'Java', text:'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
  { key:"4", title: 'MongoDB', text:'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
  { key:"5", title: 'MySql', text:'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
  { key:"6", title: 'Firebase', text:'Experienced', icon: <BsPatchCheckFill className='experience__details-icon' /> },
]

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>            
            {
              frontend.map((experience, index) => (
                <article className='experience__details' key={experience.key}>
                  { experience.icon }
                  <div>
                    <h4>{ experience.title }</h4>
                    <small className='text-light'>{ experience.text }</small>
                  </div>
                </article>
              ))
            }                                    
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>            
            {
              backend.map((experience, index) => (
                <article className='experience__details' key={experience.key}>
                  { experience.icon }
                  <div>
                    <h4>{ experience.title }</h4>
                    <small className='text-light'>{ experience.text }</small>
                  </div>
                </article>
              ))
            }                                    
          </div>
        </div>
      </div>
    </section>
  )
}
