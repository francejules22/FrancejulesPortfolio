import React from 'react'
import {MdEmail} from 'react-icons/md';
import {BsFacebook} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';
import './contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com'; //Type npm install emailjs-com in terminal 
import { Slide, Fade } from 'react-reveal';


const Contact = () => {
  //emailjs package 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();   

    emailjs.sendForm('service_0kye5qq', 'template_uytoxta', form.current, 'vpfMiWGio4v7mdDuv')

    e.target.reset()
  };
  //end of emailjs package 

    return(
      <section id="contact">
        <Slide right>
          <h5 className="contact-title">Get In Touch</h5>
          <h2>Contact</h2>
        </Slide>

       
        <div className="container contact_container">
        <Fade>
          <div className="contact_options">
                <article className="contact_option">
                  <MdEmail className="contact_icons"/>
                  <h4 className="contact-para">Email</h4>
                  <h5 className="contact-para">francisjulescelesteespartero@gmail.com</h5>
                  <a href="https://mail.google.com/mail/u/2/" target="_blank">Send a message</a>
                </article>

                <article className="contact_option">
                  <BsFacebook className="contact_icons"/>
                  <h4 className="contact-para">Facebook</h4>
                  <h5  className="contact-para">francisjulescelesteespartero</h5>
                  <a href="https://www.facebook.com/francisjules.celeste" target="_blank">Send a message</a>
                </article>

                <article className="contact_option">
                  <IoLogoWhatsapp className="contact_icons"/>
                  <h4 className="contact-para">WhatsApp</h4>
                  <h5 className="contact-para">+639485058747</h5>
                  <a href="https://api.whatsapp.com/send?phone+639485058747" target="_blank">Send a message</a>
                </article>
          </div>
          </Fade>
          {/*END OF CONTACT OPTIONS*/}

          <Fade>
           <form ref={form} onSubmit={sendEmail} className="form-input">
             <input type="text" name="name" placeholder="Enter your Fullname" required />
             <input type="email" name="email" placeholder="Enter your Email" required />
             <textarea name="message"  rows="7" placeholder="Enter your message" required></textarea>
             <button type="submit" className="btn btn-primary">Submit</button>
           </form>
          </Fade>
        </div>
      </section>
    )
}
export default Contact;