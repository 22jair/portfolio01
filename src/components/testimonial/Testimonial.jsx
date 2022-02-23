import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/jennie.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  { key:"1", img: AVTR1, name: "Jennie", text: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." },
  { key:"2", img: AVTR1, name: "Jennie", text: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." },
  { key:"3", img: AVTR1, name: "Jennie", text: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." },
  { key:"4", img: AVTR1, name: "Jennie", text: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." },
  { key:"5", img: AVTR1, name: "Jennie", text: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively." },
]

export const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container'        
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}       
        pagination={{ clickable: true }}        
      >
        { data.map(item => 
            <SwiperSlide className='testimonial' key={item.key}>
              <div className='client__avatar'>
                <img src={ item.img } alt='testimonial file' />                
              </div>
              <h5 className='client__name' >{ item.name }</h5>
              <small className='client__review'>{ item.text }</small>
            </SwiperSlide>
          )
        }
      </Swiper>
    </section>
  )
}
