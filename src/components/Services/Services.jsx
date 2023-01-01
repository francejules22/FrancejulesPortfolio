import React from 'react';
import './Services.css'
import { Container, Row, Col } from 'reactstrap';
import {Slide} from 'react-reveal';


const servicesData = [
    {
        icon: 'ri-code-box-fill',
        title: 'Front-End Web Development',
        desc: 'Experience in building website using HTML5, CSS3, Javascript with Bootstrap and ReactJS framework.'
    },

    {
        icon: 'ri-database-2-fill',
        title: 'Back-End Web Development',
        desc: 'Build and manage database using mySQL and Microsoft SQL Server with Xampp.'
    },

    {
        icon: 'ri-pen-nib-fill',
        title: 'UI | UX Design',
        desc: 'Create and build beautiful web design with responsive interfaces, prototyping, interactive visual design, and cohesive user experience.',
    },

]

const Services = () => {
    return(
       <section id="services">
          <Container>
              <Row>
                 <Col lg='12' className="services-top mb-5">
                    <Slide right>
                       <h5 className="services-main-title">Features</h5>
                       <h1>What services I provide</h1>
                    </Slide>
                 </Col>

                 {
                        servicesData.map((item, index)=> (
                            <Col lg='4' md='6' sm='6' key={index} className="mb-5">
                              <div className="single-services">
                                   <span className="service-icon">
                                      <i class={item.icon}></i>
                                   </span>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                              </div>
                        </Col>
                    ))
                 }
              </Row>
          </Container>
       </section>
    )
}
export default Services;