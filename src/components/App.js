import React, { Component } from 'react';

import NavBar from './Navbar';
import SectionCarousel from './CarouselSection';
import Logo from './Logo';
import AboutSection from './AboutSection';
import FirstImageSection from './FirstImageSection';
import ServicesSection from './ServicesSection';
import Gallery from './Gallery';
//import Icons from './Icons';
import Map from './Map';
import Form from './Form';
import Footer from './Footer';
import ScrollUpButton from './ScrollUpButton';


class App extends Component {
  render() {
    return (
       <div className='container-fixed'>
        <NavBar/>
        <Logo/>
        <SectionCarousel/>
        <AboutSection/>
        <FirstImageSection/>
        <ServicesSection/>
        <Gallery/>
        <Form/>
        <Map/>
        <Footer/>
        <ScrollUpButton/>
       </div>
    );
  }
}
export default App;
