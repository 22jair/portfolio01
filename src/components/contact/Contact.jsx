import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const data = [
  { key:'1', title: 'Email', href:'mailto:22jair27@gmail.com', text:'22jair27@gmail.com', icon: <MdOutlineEmail className='contact__option-icon' /> },
  { key:'2', title: 'Messenger', href:'https://m.me/josejair.arteagasaravia', text:'josejair.arteagasaravia', icon: <RiMessengerLine className='contact__option-icon' /> },
  { key:'3', title: 'WhatsApp', href:'https://wa.me/+51953096666', text:'953096666', icon: <BsWhatsapp className='contact__option-icon' /> }
]

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_edwdorb', 'template_4hg3xhp', form.current, 'user_Zy6BAGusxZxuBcfNdzD0s')
      .then((result) => {
        alert("Message sent!");
        console.log(result.text);
      }, (error) => {
        alert("Something went wrong, try again later");
        console.log(error.text);
      }).finally(() => {
        e.target.reset();
      });
      
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          { data.map(item =>
            <article key={item.key} className="contact__option">
             { item.icon }
             <h4>{ item.title }</h4>
             <h5>{ item.text }</h5>
             <a href={ item.href } target="_blank" rel="noreferrer">Send a message</a>
            </article>
          )}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows={7} placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}
