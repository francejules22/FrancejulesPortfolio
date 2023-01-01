import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Credentials from '../Certifications/cert';
import Services from '../Services/Services';


const Layout = () => {
    return(
        <Fragment>
             <Header />
             <Hero />
             <About />
             <Credentials />
             <Services />
        </Fragment>
    )
}
export default Layout; 