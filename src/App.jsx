import React from 'react';
import Layout from './components/Layout/Layout';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
    return(
        <>
           <Layout />
           <Portfolio/>
           <Contact />
           <Footer />
        </>
    )
}
export default App;