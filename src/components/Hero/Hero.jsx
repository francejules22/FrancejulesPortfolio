import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Hero.css';
import HeroImg from '../../assets/HeroImg.png';
import { init } from "ityped";
import {Slide, Fade} from 'react-reveal';


const Hero = () => {
    const textRef = useRef()
    
    useEffect(() => {
       init(textRef.current, {
        backDelay: 1500,
        showCursor: true,
        strings: [
            'Francis Jules C. Espartero',
            'Web Developer',
            'UI and UX Designer',
            'Software Developer'
        ]
       } )
    }, [])

    return (
    <section className="hero__section" id="home">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <p className="mb-3">Welcome to my Tech World!</p>
                        <h5 className="mb-4">Hello, there 👋</h5>
                        <h2 className="hero__title mb-4">I'm <span ref={textRef}></span></h2>
                        <p>Studied in ISAT U (Iloilo Science and Technology University) taking Computer Science Degree, and a passionate self-taught web developer.</p>

                        <div className="mt-4 hero__btn d-flex align-items-center gap-4">
                           <button className="hire_btn"><a href="https://drive.google.com/file/d/1Ay4Aacmc0fyg_UaI-H-CrdpY1Tyc8f3a/view?usp=sharing"  rel="noreferrer" target="_blank">Resume</a></button> 
                           <button className="contact_btn"><a href="#contact">Contact</a></button>
                        </div>
                    </div>
                </Col>

                  <Col lg='6' md='6'>
                      <div className="hero__img">
                          <img src={HeroImg} alt="ProfileImage" className="w-100"/>
                      </div>
                  </Col>
            </Row>
        </Container>
    </section>
    )
}
export default Hero;