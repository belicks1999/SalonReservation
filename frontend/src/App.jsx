import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { Element } from 'react-scroll';
import bg from './assets/images/bg.jpg'; // Ensure this path is correct

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <Element name="hero">
          <Hero />
        </Element>
      </div>

      <Element name="about">
        <About />
      </Element>

      <Element name="services">
        <Services />
      </Element>

      <Element name="review">
        <Review />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
