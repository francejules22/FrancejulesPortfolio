import React from 'react'
import {FaFacebook} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
import './footer.css';
import { Slide } from 'react-reveal';

const Footer = () => {
    return(
        <Slide bottom>
       <footer>
        <a href="#" className="footer_logo">FRANCE</a>

        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#credentials">Credentials</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer_socials">
            <a href="https://www.facebook.com/francisjules.celeste" target="_blank"><FaFacebook/></a>
            <a href="https://github.com/francejules22" target="_blank"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/francis-jules-espartero-b81687226/" target="_blank"><BsLinkedin /></a>
            <a href="https://mail.google.com/mail/u/2/" target="_blank"><SiGmail /></a>
        </div>

       <div className="footer_copyright">
          <small>&copy; FRANCE Portfolio 2022. All right reserved</small>
       </div>

       </footer>
       </Slide>
    ) 
}
export default Footer;