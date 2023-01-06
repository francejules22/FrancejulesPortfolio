import React, { useState } from 'react';
import './About.css';
import { Container, Row, Col } from 'reactstrap';
import AboutImg from '../../assets/HeroImg.png';
import Education from './Education';
import Skills from './Skills';
import Award from './Award';
import {Slide} from 'react-reveal';

const About = () => {
   const [aboutFilter, setAboutFilter] = useState('ABOUT');
    return(
        <section id="about">
           <Container>
              <Row>
                 <Col lg='12' className='mb-5'>
                <Slide left>
                    <h5 className="about-title">Know More</h5>
                    <h2 className="about-title-heading">About Me</h2>
                </Slide>
                 </Col>

                 <Col lg='4' md='3'>
                    <div className="about-btn-box d-flex flex-column align-items-center">
                        <button className={`about-btn ${aboutFilter == 'ABOUT' ? 'about-btn-active' : ''}`} onClick={() => setAboutFilter('ABOUT')}>About</button>
                        <button className={`about-btn ${aboutFilter == 'EDUCATION' ? 'about-btn-active' : ''}`} onClick={() => setAboutFilter('EDUCATION')}>Education</button>
                        <button className={`about-btn ${aboutFilter == 'SKILLS' ? 'about-btn-active' : ''}`} onClick={() => setAboutFilter('SKILLS')}>Skills</button>
                        <button className={`about-btn ${aboutFilter == 'AWARD' ? 'about-btn-active' : ''}`} onClick={() => setAboutFilter('AWARD')}>Awards</button>
                    </div>
                 </Col>

                 <Col lg='8' md='9'>
                    {
                        aboutFilter == 'ABOUT' && <div className="about-content-wrapper d-flex gap-5">
                        <div className="about-img w-25">
                            <img src={AboutImg} alt='About Image' className="w-100" />
                        </div>

                        <div className="about-content w-75">
                            <h2>I'm Francis Jules C. Espartero</h2>
                            <p>I have strong foundation in HTML5, CSS3, Javascript, JQuery, SASS, Bootstrap and basic knowledge in ReactJS libraries for building user interfaces.I am also skilled in developing and maintaining web applications including designing, integrating APIs, implementing database structures, testing and debugging code.I am thrill and excited to bring my Front-End Development skills to new project and help bring them to successful completion.</p>
                            <div className="social-links">
                                <h2 className="connect-para mb-2">Connect with me:</h2>
                                <span><a href="https://www.facebook.com/francisjules.celeste/" rel="noreferrer" target="_blank"><i class="ri-facebook-box-fill"></i></a></span>
                                <span><a href="https://www.instagram.com/pransis_jules07/" rel="noreferrer" target="_blank"><i class="ri-instagram-fill"></i></a></span>
                                <span><a href="https://www.linkedin.com/in/francis-jules-espartero-b81687226/" rel="noreferrer" target="_blank"><i class="ri-linkedin-box-fill"></i></a></span>
                                <span><a href="https://github.com/francejules22" rel="noreferrer" target="_blank"><i class="ri-github-fill"></i></a></span>
                            </div>
                        </div>
                    </div>
                    }

                    {  aboutFilter == 'EDUCATION' && <Education /> }

                    {  aboutFilter == 'SKILLS' && <Skills/> }

                    {  aboutFilter == 'AWARD' && <Award /> }
                  
                 </Col>
              </Row>
           </Container>
        </section>
    )
}
export default About;